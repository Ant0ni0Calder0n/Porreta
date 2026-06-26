import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { User } from '../types';
import { setupForegroundNotifications } from '../utils/notifications';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userData: User | null;
  loading: boolean;
  isSuperAdmin: boolean;
  signup: (email: string, password: string, nick: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUserData = async (user: FirebaseUser) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        setUserData({ uid: user.uid, ...userDoc.data() } as User);
      }

      setupForegroundNotifications().catch(err => {
        console.error('Error preparando notificaciones en primer plano:', err);
      });
    } catch (error) {
      console.error('Error cargando datos usuario:', error);
    }
  };

  const refreshUserData = async () => {
    if (currentUser) {
      await loadUserData(currentUser);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await loadUserData(user);
        // Actualizar lastSeen en background
        updateDoc(doc(db, 'users', user.uid), {
          lastSeen: serverTimestamp()
        }).catch(err => console.error('Error actualizando lastSeen:', err));
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Actualizar lastSeen cuando la app vuelve del background (importante para PWA Android)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && currentUser) {
        updateDoc(doc(db, 'users', currentUser.uid), {
          lastSeen: serverTimestamp()
        }).catch(err => console.error('Error actualizando lastSeen:', err));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [currentUser]);
  
  const signup = async (email: string, password: string, nick: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Crear documento usuario
    await setDoc(doc(db, 'users', user.uid), {
      email,
      nick,
      createdAt: new Date(),
      communities: {},
      notificationSettings: {
        newRounds: true,
        deadlineReminders: true,
        resultsPublished: true,
        winnersAndBote: true
      }
    });

    await loadUserData(user);
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await firebaseSignOut(auth);
  };

  const value = {
    currentUser,
    userData,
    loading,
    isSuperAdmin: userData?.isSuperAdmin === true,
    signup,
    login,
    logout,
    refreshUserData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
