import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, messaging } from '../firebase';
import { User } from '../types';
import { requestNotificationPermission } from '../utils/notifications';
import { onMessage } from 'firebase/messaging';

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

      // Solicitar permisos de notificación después de cargar datos
      setTimeout(() => {
        requestNotificationPermission(user.uid).catch(err => {
          console.error('Error solicitando permisos de notificación:', err);
        });
      }, 1000); // Esperar 1 segundo para que el usuario vea la interfaz primero
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
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Listener para notificaciones en foreground (cuando la app está abierta)
  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('📬 Notificación recibida con app abierta:', payload);
      
      // Mostrar notificación del navegador
      if (payload.notification) {
        const notificationTitle = payload.notification.title || 'Porreta';
        const notificationOptions = {
          body: payload.notification.body || '',
          icon: '/Porreta/icon-192.png',
          badge: '/Porreta/icon-192.png',
          data: payload.data,
          tag: payload.data?.roundId || 'default',
        };

        // Pedir permiso si no lo tenemos
        if (Notification.permission === 'granted') {
          new Notification(notificationTitle, notificationOptions);
        }
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  const signup = async (email: string, password: string, nick: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Crear documento usuario
    await setDoc(doc(db, 'users', user.uid), {
      email,
      nick,
      createdAt: new Date(),
      communities: {}
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
