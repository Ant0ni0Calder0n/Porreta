import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  collection, 
  query, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  writeBatch,
  orderBy,
  where,
  Timestamp,
  getDoc,
  setDoc,
  deleteField,
  increment,
  limit
} from 'firebase/firestore';
import { db } from '../firebaseDb';
import { app } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { Bet, Community, NotificationLog, Prediction, Round, User } from '../types';
import CustomAlert from './CustomAlert';
import CustomConfirm from './CustomConfirm';

const SuperAdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const { isSuperAdmin } = useAuth();
  const [activeSection, setActiveSection] = useState<'users' | 'communities' | 'notifications' | 'config'>('communities');
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [editUserNick, setEditUserNick] = useState('');
  const [savingUser, setSavingUser] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false);
  const [newMemberUserId, setNewMemberUserId] = useState('');
  const [newMemberRole, setNewMemberRole] = useState<'member' | 'admin'>('member');
  const [savingMember, setSavingMember] = useState(false);
  const [showCommunityMembers, setShowCommunityMembers] = useState(false);
  const [communities, setCommunities] = useState<Community[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [selectedRoundId, setSelectedRoundId] = useState('');
  const [roundBets, setRoundBets] = useState<Bet[]>([]);
  const [loadingBets, setLoadingBets] = useState(false);
  const [selectedBetId, setSelectedBetId] = useState('');
  const [editBetPredictions, setEditBetPredictions] = useState<Prediction[]>([]);
  const [savingBet, setSavingBet] = useState(false);
  const [notificationLogs, setNotificationLogs] = useState<NotificationLog[]>([]);
  const [selectedNotificationUserId, setSelectedNotificationUserId] = useState('');
  const [loadingNotificationLogs, setLoadingNotificationLogs] = useState(false);
  const [notificationLogsLoaded, setNotificationLogsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editingCommunity, setEditingCommunity] = useState<Community | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editingRound, setEditingRound] = useState<Round | null>(null);
  const [editRoundName, setEditRoundName] = useState('');
  const [editRoundDeadline, setEditRoundDeadline] = useState('');
  const [editRoundMatches, setEditRoundMatches] = useState<any[]>([]);
  
  // Estados para configuración global
  const [allowUserRegistration, setAllowUserRegistration] = useState(true);
  const [allowCommunityCreation, setAllowCommunityCreation] = useState(true);
  const [savingConfig, setSavingConfig] = useState(false);
  
  // Estados para alertas y confirmaciones
  const [alertMessage, setAlertMessage] = useState<{ message: string; type: 'info' | 'warning' | 'error' | 'success' } | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<{ message: string; confirmText?: string; onConfirm: () => void } | null>(null);

  useEffect(() => {
    // Redirigir si no es super admin
    if (!isSuperAdmin) {
      navigate('/communities');
      return;
    }
    loadUsers();
    loadCommunities();
    loadGlobalConfig();
  }, [isSuperAdmin, navigate]);

  const selectedUser = users.find(user => user.uid === selectedUserId) || null;
  const selectedCommunityData = communities.find(community => community.id === selectedCommunity) || null;
  const selectedRound = rounds.find(round => round.id === selectedRoundId) || null;
  const selectedBet = roundBets.find(bet => bet.id === selectedBetId) || null;
  const selectedCommunityMembers = selectedCommunity
    ? users.filter(user => user.communities?.[selectedCommunity])
    : [];
  const selectableNewMembers = selectedCommunity
    ? users.filter(user => !user.communities?.[selectedCommunity])
    : [];

  const loadUsers = async () => {
    try {
      const q = query(collection(db, 'users'), orderBy('nick', 'asc'));
      const snapshot = await getDocs(q);
      const usersData = snapshot.docs.map(userDoc => ({
        uid: userDoc.id,
        ...userDoc.data()
      })) as User[];
      setUsers(usersData);
    } catch (error) {
      console.error('Error cargando usuarios:', error);
      setAlertMessage({ message: 'Error al cargar usuarios', type: 'error' });
    }
  };

  const handleSelectUser = (userId: string) => {
    setSelectedUserId(userId);
    const user = users.find(item => item.uid === userId);
    setEditUserNick(user?.nick || '');
  };

  const handleSaveUserNick = async () => {
    if (!selectedUser || !editUserNick.trim()) return;

    setSavingUser(true);
    try {
      await updateDoc(doc(db, 'users', selectedUser.uid), {
        nick: editUserNick.trim()
      });
      setUsers(prev => prev.map(user => user.uid === selectedUser.uid ? { ...user, nick: editUserNick.trim() } : user));
      setAlertMessage({ message: 'Nick actualizado correctamente', type: 'success' });
    } catch (error) {
      console.error('Error actualizando nick:', error);
      setAlertMessage({ message: 'Error al actualizar nick', type: 'error' });
    } finally {
      setSavingUser(false);
    }
  };

  const handleResetUserPassword = async () => {
    if (!selectedUser) return;

    setConfirmDialog({
      message: `¿Resetear la contraseña de ${selectedUser.nick}?`,
      confirmText: 'Resetear',
      onConfirm: async () => {
        setConfirmDialog(null);
        setResettingPassword(true);
        try {
          const { getFunctions, httpsCallable } = await import('firebase/functions');
          const functions = getFunctions(app);
          const callable = httpsCallable<{ userId: string }, { password: string }>(functions, 'resetUserPassword');
          const result = await callable({ userId: selectedUser.uid });
          setAlertMessage({ message: `Contraseña reseteada. Nueva contraseña: ${result.data.password}`, type: 'success' });
        } catch (error) {
          console.error('Error reseteando contraseña:', error);
          setAlertMessage({ message: 'Error al resetear la contraseña', type: 'error' });
        } finally {
          setResettingPassword(false);
        }
      }
    });
  };

  const updateUserCommunityLocal = (userId: string, communityId: string, role: 'member' | 'admin' | null) => {
    setUsers(prev => prev.map(user => {
      if (user.uid !== userId) return user;
      const nextCommunities = { ...(user.communities || {}) };
      if (role) {
        nextCommunities[communityId] = role;
      } else {
        delete nextCommunities[communityId];
      }
      return { ...user, communities: nextCommunities };
    }));
  };

  const updateCommunityMembersCountLocal = (communityId: string, delta: number) => {
    setCommunities(prev => prev.map(community => community.id === communityId
      ? { ...community, membersCount: Math.max(0, (community.membersCount || 0) + delta) }
      : community
    ));
  };

  const handleAddMemberToCommunity = async () => {
    if (!selectedCommunity || !newMemberUserId) return;

    setSavingMember(true);
    try {
      const batch = writeBatch(db);
      batch.update(doc(db, 'users', newMemberUserId), {
        [`communities.${selectedCommunity}`]: newMemberRole
      });
      batch.update(doc(db, 'communities', selectedCommunity), {
        membersCount: increment(1)
      });
      await batch.commit();

      updateUserCommunityLocal(newMemberUserId, selectedCommunity, newMemberRole);
      updateCommunityMembersCountLocal(selectedCommunity, 1);
      setNewMemberUserId('');
      setNewMemberRole('member');
      setAlertMessage({ message: 'Usuario añadido a la comunidad', type: 'success' });
    } catch (error) {
      console.error('Error añadiendo miembro:', error);
      setAlertMessage({ message: 'Error al añadir usuario a la comunidad', type: 'error' });
    } finally {
      setSavingMember(false);
    }
  };

  const handleChangeMemberRole = async (userId: string, role: 'member' | 'admin') => {
    if (!selectedCommunity) return;

    setSavingMember(true);
    try {
      await updateDoc(doc(db, 'users', userId), {
        [`communities.${selectedCommunity}`]: role
      });
      updateUserCommunityLocal(userId, selectedCommunity, role);
      setAlertMessage({ message: 'Rol actualizado', type: 'success' });
    } catch (error) {
      console.error('Error actualizando rol:', error);
      setAlertMessage({ message: 'Error al actualizar rol', type: 'error' });
    } finally {
      setSavingMember(false);
    }
  };

  const handleRemoveMemberFromCommunity = async (user: User) => {
    if (!selectedCommunity) return;

    setConfirmDialog({
      message: `¿Quitar a ${user.nick} de ${selectedCommunityData?.name || 'esta comunidad'}?`,
      confirmText: 'Quitar',
      onConfirm: async () => {
        setConfirmDialog(null);
        setSavingMember(true);
        try {
          const batch = writeBatch(db);
          batch.update(doc(db, 'users', user.uid), {
            [`communities.${selectedCommunity}`]: deleteField()
          });
          batch.update(doc(db, 'communities', selectedCommunity), {
            membersCount: increment(-1)
          });
          await batch.commit();

          updateUserCommunityLocal(user.uid, selectedCommunity, null);
          updateCommunityMembersCountLocal(selectedCommunity, -1);
          setAlertMessage({ message: 'Usuario quitado de la comunidad', type: 'success' });
        } catch (error) {
          console.error('Error quitando miembro:', error);
          setAlertMessage({ message: 'Error al quitar usuario de la comunidad', type: 'error' });
        } finally {
          setSavingMember(false);
        }
      }
    });
  };

  const handleSelectRound = (roundId: string) => {
    setSelectedRoundId(roundId);
    setRoundBets([]);
    setSelectedBetId('');
    setEditBetPredictions([]);
  };

  const loadBetsForSelectedRound = async () => {
    if (!selectedRound || !selectedCommunity) return;

    setLoadingBets(true);
    try {
      const betsQuery = query(
        collection(db, 'bets'),
        where('roundId', '==', selectedRound.id),
        where('communityId', '==', selectedCommunity)
      );
      const snapshot = await getDocs(betsQuery);
      const betsData = snapshot.docs.map(betDoc => ({ id: betDoc.id, ...betDoc.data() })) as Bet[];
      betsData.sort((a, b) => a.userNick.localeCompare(b.userNick));
      setRoundBets(betsData);
      setSelectedBetId('');
      setEditBetPredictions([]);
    } catch (error) {
      console.error('Error cargando apuestas:', error);
      setAlertMessage({ message: 'Error al cargar apuestas', type: 'error' });
    } finally {
      setLoadingBets(false);
    }
  };

  const handleSelectBet = (betId: string) => {
    setSelectedBetId(betId);
    const bet = roundBets.find(item => item.id === betId);
    setEditBetPredictions(bet ? bet.predictions.map(prediction => ({ ...prediction })) : []);
  };

  const handleSaveBet = async () => {
    if (!selectedBet) return;

    setSavingBet(true);
    try {
      const updatedAt = Timestamp.now();
      await updateDoc(doc(db, 'bets', selectedBet.id), {
        predictions: editBetPredictions,
        updatedAt
      });
      setRoundBets(prev => prev.map(bet => bet.id === selectedBet.id ? { ...bet, predictions: editBetPredictions, updatedAt } : bet));
      setAlertMessage({ message: 'Apuesta actualizada', type: 'success' });
    } catch (error) {
      console.error('Error actualizando apuesta:', error);
      setAlertMessage({ message: 'Error al actualizar apuesta', type: 'error' });
    } finally {
      setSavingBet(false);
    }
  };

  const handleDeleteBet = async () => {
    if (!selectedBet) return;

    setConfirmDialog({
      message: `¿Eliminar la apuesta de ${selectedBet.userNick}? Esta acción no recalcula ganadores ni resultados.`,
      confirmText: 'Eliminar',
      onConfirm: async () => {
        setConfirmDialog(null);
        setSavingBet(true);
        try {
          await deleteDoc(doc(db, 'bets', selectedBet.id));
          setRoundBets(prev => prev.filter(bet => bet.id !== selectedBet.id));
          setSelectedBetId('');
          setEditBetPredictions([]);
          setAlertMessage({ message: 'Apuesta eliminada', type: 'success' });
        } catch (error) {
          console.error('Error eliminando apuesta:', error);
          setAlertMessage({ message: 'Error al eliminar apuesta', type: 'error' });
        } finally {
          setSavingBet(false);
        }
      }
    });
  };

  const loadNotificationLogs = async () => {
    try {
      setLoadingNotificationLogs(true);
      const q = selectedNotificationUserId
        ? query(
          collection(db, 'notificationLogs'),
          where('userId', '==', selectedNotificationUserId),
          orderBy('createdAt', 'desc'),
          limit(50)
        )
        : query(
          collection(db, 'notificationLogs'),
          orderBy('createdAt', 'desc'),
          limit(50)
        );
      const snapshot = await getDocs(q);
      const logsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as NotificationLog[];
      setNotificationLogs(logsData);
      setNotificationLogsLoaded(true);
    } catch (error) {
      console.error('Error cargando logs de notificaciones:', error);
      setAlertMessage({ message: 'Error al cargar logs de notificaciones', type: 'error' });
    } finally {
      setLoadingNotificationLogs(false);
    }
  };

  const loadGlobalConfig = async () => {
    try {
      const configDoc = await getDoc(doc(db, 'config', 'global'));
      if (configDoc.exists()) {
        const data = configDoc.data();
        setAllowUserRegistration(data.allowUserRegistration ?? true);
        setAllowCommunityCreation(data.allowCommunityCreation ?? true);
      }
    } catch (error) {
      console.error('Error cargando configuración:', error);
    }
  };

  const saveGlobalConfig = async (field: 'allowUserRegistration' | 'allowCommunityCreation', value: boolean) => {
    setSavingConfig(true);
    try {
      await setDoc(doc(db, 'config', 'global'), {
        [field]: value
      }, { merge: true });
      
      if (field === 'allowUserRegistration') {
        setAllowUserRegistration(value);
      } else {
        setAllowCommunityCreation(value);
      }
    } catch (error) {
      console.error('Error guardando configuración:', error);
      setAlertMessage({ message: 'Error al guardar la configuración', type: 'error' });
    } finally {
      setSavingConfig(false);
    }
  };

  const loadCommunities = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'communities'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const communitiesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Community[];
      setCommunities(communitiesData);
    } catch (error) {
      console.error('Error al cargar comunidades:', error);
      setAlertMessage({ message: 'Error al cargar comunidades', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const loadRoundsForCommunity = async (communityId: string) => {
    try {
      const q = query(
        collection(db, 'rounds'),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      const allRounds = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Round[];
      
      // Filtrar solo las rondas de la comunidad seleccionada
      const communityRounds = allRounds.filter(r => r.communityId === communityId);
      setRounds(communityRounds);
      setSelectedRoundId('');
      setRoundBets([]);
      setSelectedBetId('');
      setEditBetPredictions([]);
      setShowCommunityMembers(false);
      setSelectedCommunity(communityId);
    } catch (error) {
      console.error('Error cargando rondas:', error);
      setAlertMessage({ message: 'Error al cargar rondas', type: 'error' });
    }
  };

  const handleEditCommunity = (community: Community) => {
    setEditingCommunity(community);
    setEditName(community.name);
    setEditDescription(community.description || '');
  };

  const handleSaveCommunity = async () => {
    if (!editingCommunity) return;

    if (!editName.trim()) {
      setAlertMessage({ message: 'El nombre no puede estar vacío', type: 'warning' });
      return;
    }

    try {
      const communityRef = doc(db, 'communities', editingCommunity.id);
      await updateDoc(communityRef, {
        name: editName.trim(),
        description: editDescription.trim()
      });
      
      setAlertMessage({ message: 'Comunidad actualizada correctamente', type: 'success' });
      setEditingCommunity(null);
      loadCommunities();
    } catch (error) {
      console.error('Error actualizando comunidad:', error);
      setAlertMessage({ message: 'Error al actualizar la comunidad', type: 'error' });
    }
  };

  const handleToggleCommunityActive = async (community: Community) => {
    const nextIsActive = community.isActive === false;

    try {
      await updateDoc(doc(db, 'communities', community.id), {
        isActive: nextIsActive,
        deactivatedAt: nextIsActive ? deleteField() : Timestamp.now()
      });

      setCommunities(prev => prev.map(item => (
        item.id === community.id
          ? { ...item, isActive: nextIsActive, deactivatedAt: nextIsActive ? undefined : Timestamp.now() }
          : item
      )));

      if (editingCommunity?.id === community.id) {
        setEditingCommunity({ ...editingCommunity, isActive: nextIsActive });
      }

      setAlertMessage({
        message: nextIsActive ? 'Comunidad activada correctamente' : 'Comunidad desactivada correctamente',
        type: 'success'
      });
    } catch (error) {
      console.error('Error cambiando estado de comunidad:', error);
      setAlertMessage({ message: 'Error al cambiar el estado de la comunidad', type: 'error' });
    }
  };

  const handleEditRound = (round: Round) => {
    setEditingRound(round);
    setEditRoundName(round.name);
    
    // Convertir Timestamp a string de fecha/hora LOCAL para el input
    const deadlineDate = round.deadline.toDate();
    // Restar el offset de zona horaria para obtener la hora local correcta
    const localDate = new Date(deadlineDate.getTime() - deadlineDate.getTimezoneOffset() * 60000);
    const formattedDeadline = localDate.toISOString().slice(0, 16); // formato: YYYY-MM-DDTHH:mm
    setEditRoundDeadline(formattedDeadline);
    
    setEditRoundMatches(round.matches);
  };

  const handleSaveRound = async () => {
    if (!editingRound) return;

    if (!editRoundName.trim()) {
      setAlertMessage({ message: 'El nombre no puede estar vacío', type: 'warning' });
      return;
    }

    if (!editRoundDeadline) {
      setAlertMessage({ message: 'La fecha límite es obligatoria', type: 'warning' });
      return;
    }

    try {
      const roundRef = doc(db, 'rounds', editingRound.id);
      await updateDoc(roundRef, {
        name: editRoundName.trim(),
        deadline: Timestamp.fromDate(new Date(editRoundDeadline)),
        matches: editRoundMatches
      });

      setAlertMessage({ message: 'Ronda actualizada correctamente', type: 'success' });
      setEditingRound(null);
      if (selectedCommunity) {
        loadRoundsForCommunity(selectedCommunity);
      }
    } catch (error) {
      console.error('Error actualizando ronda:', error);
      setAlertMessage({ message: 'Error al actualizar la ronda', type: 'error' });
    }
  };

  const handleDeleteCommunity = async (community: Community) => {
    setConfirmDialog({
      message: `¿Estás seguro de que quieres eliminar la comunidad "${community.name}"?\n\n` +
        `ADVERTENCIA: Esto eliminará PERMANENTEMENTE:\n` +
        `- La comunidad\n` +
        `- Todas sus rondas\n` +
        `- Todas las apuestas de esas rondas\n\n` +
        `Esta acción NO se puede deshacer.`,
      onConfirm: async () => {
        setConfirmDialog(null);
        await executeCommunityDelete(community);
      }
    });
  };

  const executeCommunityDelete = async (community: Community) => {

    try {
      let totalBetsDeleted = 0;
      let totalUsersUpdated = 0;
      
      // 1. Buscar todas las rondas de esta comunidad
      const roundsQuery = query(collection(db, 'rounds'), where('communityId', '==', community.id));
      const roundsSnapshot = await getDocs(roundsQuery);
      
      // 2. Por cada ronda, eliminar sus apuestas
      for (const roundDoc of roundsSnapshot.docs) {
        const betsQuery = query(collection(db, 'bets'), where('roundId', '==', roundDoc.id));
        const betsSnapshot = await getDocs(betsQuery);
        
        // Eliminar apuestas en batches de 500
        const betsToDelete = betsSnapshot.docs;
        for (let i = 0; i < betsToDelete.length; i += 500) {
          const batch = writeBatch(db);
          const chunk = betsToDelete.slice(i, i + 500);
          
          chunk.forEach(betDoc => {
            batch.delete(doc(db, 'bets', betDoc.id));
          });
          
          await batch.commit();
          totalBetsDeleted += chunk.length;
        }
        
        // Eliminar la ronda
        await deleteDoc(doc(db, 'rounds', roundDoc.id));
      }
      
      // 3. Eliminar referencias de la comunidad en usuarios
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const usersToUpdate: string[] = [];

      // Identificar qué usuarios tienen esta comunidad
      usersSnapshot.docs.forEach(userDoc => {
        const userData = userDoc.data();
        if (userData.communities && userData.communities[community.id]) {
          usersToUpdate.push(userDoc.id);
        }
      });

      // Actualizar usuarios en batches de 500
      for (let i = 0; i < usersToUpdate.length; i += 500) {
        const batch = writeBatch(db);
        const chunk = usersToUpdate.slice(i, i + 500);

        chunk.forEach(userId => {
          const userRef = doc(db, 'users', userId);
          batch.update(userRef, {
            [`communities.${community.id}`]: deleteField()
          });
        });

        await batch.commit();
      }

      totalUsersUpdated = usersToUpdate.length;
      // 4. Finalmente, eliminar la comunidad
      await deleteDoc(doc(db, 'communities', community.id));
      
      setAlertMessage({ 
        message: `Comunidad eliminada correctamente.\n\nRondas eliminadas: ${roundsSnapshot.size}\nApuestas eliminadas: ${totalBetsDeleted}\nUsuarios actualizados: ${totalUsersUpdated}`,
        type: 'success' 
      });
      loadCommunities();
      if (selectedCommunity === community.id) {
        setSelectedCommunity(null);
        setRounds([]);
      }
    } catch (error: any) {
      console.error('Error al eliminar comunidad:', error);
      setAlertMessage({ 
        message: 'Error al eliminar la comunidad:\n\n' + (error.message || error.toString()),
        type: 'error' 
      });
    }
  };

  const handleDeleteRound = async (round: Round) => {
    setConfirmDialog({
      message: `¿Estás seguro de que quieres eliminar la ronda "${round.name}"?\n\n` +
        `ADVERTENCIA: Esto eliminará PERMANENTEMENTE:\n` +
        `- La ronda\n` +
        `- Todas las apuestas de esta ronda\n\n` +
        `Esta acción NO se puede deshacer.`,
      onConfirm: async () => {
        setConfirmDialog(null);
        await executeRoundDelete(round);
      }
    });
  };

  const executeRoundDelete = async (round: Round) => {

    try {
      // 1. Eliminar todas las apuestas de esta ronda
      const betsQuery = query(collection(db, 'bets'), where('roundId', '==', round.id));
      const betsSnapshot = await getDocs(betsQuery);
      
      // Eliminar apuestas en batches de 500
      const betsToDelete = betsSnapshot.docs;
      for (let i = 0; i < betsToDelete.length; i += 500) {
        const batch = writeBatch(db);
        const chunk = betsToDelete.slice(i, i + 500);
        
        chunk.forEach(betDoc => {
          batch.delete(doc(db, 'bets', betDoc.id));
        });
        
        await batch.commit();
      }
      
      // 2. Eliminar la ronda
      await deleteDoc(doc(db, 'rounds', round.id));
      
      setAlertMessage({ 
        message: `Ronda eliminada correctamente.\n\nApuestas eliminadas: ${betsSnapshot.size}`,
        type: 'success' 
      });
      if (selectedCommunity) {
        loadRoundsForCommunity(selectedCommunity);
      }
    } catch (error: any) {
      console.error('Error al eliminar ronda:', error);
      setAlertMessage({ 
        message: 'Error al eliminar la ronda:\n\n' + (error.message || error.toString()),
        type: 'error' 
      });
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    return timestamp.toDate().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatOptionalDate = (timestamp?: Timestamp) => {
    return timestamp ? formatDate(timestamp) : 'Sin fecha';
  };

  const notificationTypeLabel = (type: string) => {
    if (type === 'new_round_visible') return 'Nueva ronda';
    if (type === 'deadline_reminder') return 'Recordatorio';
    if (type === 'test_notification') return 'Prueba';
    return type;
  };

  const notificationStatusLabel = (status: NotificationLog['status']) => {
    if (status === 'success') return 'Éxito';
    if (status === 'partial') return 'Parcial';
    if (status === 'failure') return 'Fallo';
    return 'Omitido';
  };

  const notificationStatusColor = (status: NotificationLog['status']) => {
    if (status === 'success') return '#4CAF50';
    if (status === 'partial') return '#FF9800';
    if (status === 'failure') return '#f44336';
    return '#9E9E9E';
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div>
      <div className="header">
        <h1>🔧 Panel de Super Administrador</h1>
        <button onClick={() => navigate('/communities')}>
          Volver
        </button>
      </div>

      <div className="container">
        <div className="card" style={{ padding: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { key: 'users' as const, label: 'Usuarios' },
            { key: 'communities' as const, label: 'Comunidades' },
            { key: 'notifications' as const, label: 'Notificaciones' },
            { key: 'config' as const, label: 'Configuración' }
          ].map(section => (
            <button
              key={section.key}
              type="button"
              onClick={() => setActiveSection(section.key)}
              className={activeSection === section.key ? 'button' : 'button button-secondary'}
              style={{ flex: '1 1 130px', margin: 0, padding: '10px 12px' }}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Configuración Global */}
        {activeSection === 'config' && (
        <div className="card" style={{ marginBottom: '24px', backgroundColor: 'rgba(255, 152, 0, 0.1)', borderLeft: '4px solid #ff9800' }}>
          <h2 style={{ marginTop: 0, marginBottom: '20px', color: 'var(--text-primary)' }}>
            ⚙️ Configuración Global de Acceso
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Checkbox para registro de usuarios */}
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              cursor: 'pointer',
              padding: '12px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s ease'
            }}>
              <input
                type="checkbox"
                checked={allowUserRegistration}
                onChange={(e) => saveGlobalConfig('allowUserRegistration', e.target.checked)}
                disabled={savingConfig}
                style={{ 
                  width: '20px', 
                  height: '20px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  👤 Permitir registro de nuevos usuarios
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {allowUserRegistration 
                    ? '✅ Los usuarios pueden crear nuevas cuentas' 
                    : '🚫 Registro de usuarios deshabilitado'}
                </div>
              </div>
            </label>

            {/* Checkbox para creación de comunidades */}
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              cursor: 'pointer',
              padding: '12px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s ease'
            }}>
              <input
                type="checkbox"
                checked={allowCommunityCreation}
                onChange={(e) => saveGlobalConfig('allowCommunityCreation', e.target.checked)}
                disabled={savingConfig}
                style={{ 
                  width: '20px', 
                  height: '20px',
                  cursor: 'pointer'
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  🏘️ Permitir creación de nuevas comunidades
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {allowCommunityCreation 
                    ? '✅ Los usuarios pueden crear comunidades' 
                    : '🚫 Creación de comunidades deshabilitada'}
                </div>
              </div>
            </label>
          </div>

          <div style={{ 
            marginTop: '12px', 
            padding: '12px', 
            backgroundColor: 'rgba(255, 193, 7, 0.1)',
            borderRadius: '6px',
            fontSize: '13px',
            color: 'var(--text-secondary)'
          }}>
            💡 <strong>Nota:</strong> Estos ajustes controlan el acceso a nivel global de la aplicación. 
            Úsalos para mantener la app privada y controlar quién puede registrarse o crear comunidades.
          </div>
        </div>
        )}

      {/* Modal de edición */}
      {editingCommunity && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="modal">
            <h3>Editar Comunidad</h3>
            <div style={{ marginBottom: '15px' }}>
              <label className="label">Nombre:</label>
              <input
                type="text"
                className="input"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label className="label">Descripción:</label>
              <textarea
                className="input"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                rows={4}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button 
              onClick={() => setEditingCommunity(null)} 
              style={{ 
                padding: '10px 20px',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                cursor: 'pointer'
                }}>
                Cancelar
              </button>
              <button 
                onClick={handleSaveCommunity}
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#4CAF50', 
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de edición de ronda */}
      {editingRound && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          overflow: 'auto',
          padding: '20px'
        }}>
          <div className="modal" style={{ maxHeight: '90vh', overflow: 'auto' }}>
            <h3>Editar Ronda</h3>
            <div style={{ marginBottom: '15px' }}>
              <label className="label">Nombre:</label>
              <input
                type="text"
                className="input"
                value={editRoundName}
                onChange={(e) => setEditRoundName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label className="label">Fecha límite:</label>
              <input
                type="datetime-local"
                className="input"
                value={editRoundDeadline}
                onChange={(e) => setEditRoundDeadline(e.target.value)}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <h4>Partidos ({editRoundMatches.length})</h4>
              {editRoundMatches.map((match, index) => (
                <div key={index} style={{ 
                  marginBottom: '15px', 
                  padding: '15px', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '4px'
                }}>
                  <div style={{ marginBottom: '10px' }}>
                    <label className="label">Equipo Local:</label>
                    <input
                      type="text"
                      className="input"
                      value={match.homeTeam}
                      onChange={(e) => {
                        const newMatches = [...editRoundMatches];
                        newMatches[index].homeTeam = e.target.value;
                        setEditRoundMatches(newMatches);
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <label className="label">Equipo Visitante:</label>
                    <input
                      type="text"
                      className="input"
                      value={match.awayTeam}
                      onChange={(e) => {
                        const newMatches = [...editRoundMatches];
                        newMatches[index].awayTeam = e.target.value;
                        setEditRoundMatches(newMatches);
                      }}
                    />
                  </div>
                  <div>
                    <label className="label">Tipo de Apuesta:</label>
                    <select
                      className="input"
                      value={match.type}
                      onChange={(e) => {
                        const newMatches = [...editRoundMatches];
                        newMatches[index].type = e.target.value;
                        setEditRoundMatches(newMatches);
                      }}
                    >
                      <option value="exact">Resultado Exacto</option>
                      <option value="1X2">1 X 2</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setEditingRound(null)} 
                style={{ 
                  padding: '10px 20px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
              <button 
                onClick={handleSaveRound}
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#4CAF50', 
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
        )}

      {activeSection === 'users' && (
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Usuarios ({users.length})</h2>
          <label className="label">Seleccionar usuario</label>
          <select
            className="input"
            value={selectedUserId}
            onChange={(event) => handleSelectUser(event.target.value)}
          >
            <option value="">Elige un usuario</option>
            {users.map(user => (
              <option key={user.uid} value={user.uid}>
                {user.nick} · {user.email}
              </option>
            ))}
          </select>

          {selectedUser && (
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>
                <div><strong>Email:</strong> {selectedUser.email}</div>
                <div><strong>Creado:</strong> {formatOptionalDate(selectedUser.createdAt)}</div>
                <div><strong>Último acceso:</strong> {formatOptionalDate(selectedUser.lastSeen)}</div>
                <div>
                  <strong>Notificaciones:</strong>{' '}
                  {(selectedUser.fcmTokens || []).length > 0
                    ? `Activadas (${(selectedUser.fcmTokens || []).length} dispositivo${(selectedUser.fcmTokens || []).length === 1 ? '' : 's'})`
                    : 'No activadas'}
                </div>
                <div><strong>Superadmin:</strong> {selectedUser.isSuperAdmin ? 'Sí' : 'No'}</div>
                <div>
                  <strong>Comunidades:</strong>{' '}
                  {Object.keys(selectedUser.communities || {}).length === 0
                    ? 'Ninguna'
                    : Object.entries(selectedUser.communities || {})
                      .map(([communityId, role]) => {
                        const community = communities.find(item => item.id === communityId);
                        return `${community?.name || communityId} (${role === 'admin' ? 'admin' : 'miembro'})`;
                      })
                      .join(', ')}
                </div>
              </div>

              <div>
                <label className="label">Nick</label>
                <input
                  type="text"
                  className="input"
                  value={editUserNick}
                  onChange={(event) => setEditUserNick(event.target.value)}
                  disabled={savingUser}
                />
                <button
                  type="button"
                  className="button"
                  onClick={handleSaveUserNick}
                  disabled={savingUser || !editUserNick.trim() || editUserNick.trim() === selectedUser.nick}
                  style={{ marginTop: 0 }}
                >
                  {savingUser ? 'Guardando...' : 'Guardar nick'}
                </button>
              </div>

              <button
                type="button"
                className="button button-secondary"
                onClick={handleResetUserPassword}
                disabled={resettingPassword}
              >
                {resettingPassword ? 'Reseteando...' : 'Resetear contraseña'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Lista de comunidades */}
      {activeSection === 'communities' && (
      <>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Todas las Comunidades ({communities.length})</h2>
        <label className="label">Seleccionar comunidad</label>
        <select
          className="input"
          value={selectedCommunity || ''}
          onChange={(event) => {
            const communityId = event.target.value;
            if (!communityId) {
              setSelectedCommunity(null);
              setRounds([]);
              return;
            }
            loadRoundsForCommunity(communityId);
          }}
        >
          <option value="">Elige una comunidad</option>
          {communities.map(community => (
            <option key={community.id} value={community.id}>
              {community.name} · {community.isActive === false ? 'desactivada' : 'activa'}
            </option>
          ))}
        </select>

        {selectedCommunityData && (
          <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '12px', marginTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0 }}>{selectedCommunityData.name}</h3>
              <span className={selectedCommunityData.isActive === false ? 'badge badge-closed' : 'badge badge-open'}>
                {selectedCommunityData.isActive === false ? 'Desactivada' : 'Activa'}
              </span>
            </div>
            {selectedCommunityData.description && (
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                {selectedCommunityData.description}
              </p>
            )}
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Creada: {formatDate(selectedCommunityData.createdAt)}
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Miembros: {selectedCommunityData.membersCount}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button className="button button-secondary" onClick={() => handleEditCommunity(selectedCommunityData)} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                Editar
              </button>
              <button className="button button-secondary" onClick={() => handleToggleCommunityActive(selectedCommunityData)} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                {selectedCommunityData.isActive === false ? 'Activar' : 'Desactivar'}
              </button>
              <button className="button button-danger" onClick={() => handleDeleteCommunity(selectedCommunityData)} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                Eliminar
              </button>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--border-color)' }}>
              <button
                type="button"
                onClick={() => setShowCommunityMembers(!showCommunityMembers)}
                style={{ width: '100%', border: 0, background: 'transparent', color: 'var(--text-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0, cursor: 'pointer', textAlign: 'left' }}
              >
                <h4 style={{ margin: 0 }}>Miembros ({selectedCommunityMembers.length})</h4>
                <span aria-hidden="true">{showCommunityMembers ? '▲' : '▼'}</span>
              </button>

              {showCommunityMembers && (
                <div style={{ marginTop: '12px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    <select className="input" value={newMemberUserId} onChange={(event) => setNewMemberUserId(event.target.value)} disabled={savingMember} style={{ flex: '1 1 220px', margin: 0 }}>
                      <option value="">Añadir usuario</option>
                      {selectableNewMembers.map(user => (
                        <option key={user.uid} value={user.uid}>{user.nick} · {user.email}</option>
                      ))}
                    </select>
                    <select className="input" value={newMemberRole} onChange={(event) => setNewMemberRole(event.target.value as 'member' | 'admin')} disabled={savingMember} style={{ width: '120px', margin: 0 }}>
                      <option value="member">Miembro</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button className="button" onClick={handleAddMemberToCommunity} disabled={savingMember || !newMemberUserId} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                      Añadir
                    </button>
                  </div>

                  {selectedCommunityMembers.length === 0 ? (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0 }}>No hay miembros en esta comunidad.</p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {selectedCommunityMembers
                        .slice()
                        .sort((a, b) => a.nick.localeCompare(b.nick))
                        .map(user => (
                          <div key={user.uid} style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', padding: '8px', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
                            <span style={{ flex: '1 1 160px', fontWeight: 600 }}>{user.nick}</span>
                            <span style={{ flex: '1 1 180px', color: 'var(--text-secondary)', fontSize: '13px' }}>Último acceso: {formatOptionalDate(user.lastSeen)}</span>
                            <select
                              className="input"
                              value={user.communities[selectedCommunityData.id]}
                              onChange={(event) => handleChangeMemberRole(user.uid, event.target.value as 'member' | 'admin')}
                              disabled={savingMember}
                              style={{ width: '120px', margin: 0, padding: '6px 8px' }}
                            >
                              <option value="member">Miembro</option>
                              <option value="admin">Admin</option>
                            </select>
                            <button className="button button-danger" onClick={() => handleRemoveMemberFromCommunity(user)} disabled={savingMember} style={{ width: 'auto', padding: '6px 10px', margin: 0 }}>
                              Quitar
                            </button>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Lista de rondas de la comunidad seleccionada */}
      {selectedCommunity && (
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Rondas de la Comunidad ({rounds.length})</h2>
          {rounds.length === 0 ? (
            <p style={{ color: '#999' }}>No hay rondas en esta comunidad</p>
          ) : (
            <>
              <label className="label">Seleccionar ronda</label>
              <select className="input" value={selectedRoundId} onChange={(event) => handleSelectRound(event.target.value)}>
                <option value="">Elige una ronda</option>
                {rounds.map(round => (
                  <option key={round.id} value={round.id}>
                    {round.name} · {round.status === 'results_posted' ? 'resultados' : round.status === 'closed' ? 'cerrada' : 'abierta'}
                  </option>
                ))}
              </select>

              {selectedRound && (
                <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '12px', marginTop: '12px' }}>
                  <h3 style={{ marginTop: 0, marginBottom: '10px' }}>{selectedRound.name}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '5px' }}>
                    <strong>Estado:</strong> {selectedRound.status === 'open' ? 'Abierta' : selectedRound.status === 'closed' ? 'Cerrada' : 'Resultados publicados'}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '5px' }}>
                    <strong>Fecha límite:</strong> {formatDate(selectedRound.deadline)}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '5px' }}>
                    <strong>Creada:</strong> {formatDate(selectedRound.createdAt)}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                    <strong>Partidos:</strong> {selectedRound.matches.length}
                  </p>
                  {selectedRound.status === 'results_posted' && selectedRound.winnerNick && (
                    <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#4CAF50' }}>
                      Ganador: {selectedRound.winnerNick}
                    </p>
                  )}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <button className="button" onClick={() => navigate(`/community/${selectedRound.communityId}/round/${selectedRound.id}/results`)} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                      Editar resultados
                    </button>
                    <button className="button button-secondary" onClick={() => handleEditRound(selectedRound)} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                      Editar ronda
                    </button>
                    <button className="button button-danger" onClick={() => handleDeleteRound(selectedRound)} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                      Eliminar ronda
                    </button>
                  </div>

                  <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <h4 style={{ margin: 0 }}>Apuestas</h4>
                      <button className="button button-secondary" onClick={loadBetsForSelectedRound} disabled={loadingBets} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                        {loadingBets ? 'Cargando...' : 'Cargar apuestas'}
                      </button>
                    </div>

                    {roundBets.length > 0 && (
                      <>
                        <select className="input" value={selectedBetId} onChange={(event) => handleSelectBet(event.target.value)}>
                          <option value="">Elige una apuesta</option>
                          {roundBets.map(bet => (
                            <option key={bet.id} value={bet.id}>{bet.userNick} · {bet.id}</option>
                          ))}
                        </select>

                        {selectedBet && (
                          <div style={{ border: '1px solid var(--border-color)', borderRadius: '8px', padding: '12px' }}>
                            <p style={{ marginTop: 0, color: 'var(--text-secondary)', fontSize: '13px' }}>
                              Usuario: <strong>{selectedBet.userNick}</strong>. Editar esto no recalcula ganadores ni resultados.
                            </p>
                            {selectedRound.matches.map((match, index) => {
                              const prediction = editBetPredictions[index];
                              return (
                                <div key={index} style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: index < selectedRound.matches.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                                  <strong style={{ display: 'block', marginBottom: '6px' }}>{match.homeTeam} vs {match.awayTeam}</strong>
                                  {match.type === 'exact' ? (
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                      <input
                                        type="number"
                                        min="0"
                                        className="input"
                                        value={prediction?.type === 'exact' && prediction.homeGoals !== undefined ? prediction.homeGoals : ''}
                                        onChange={(event) => {
                                          const next = [...editBetPredictions];
                                          next[index] = { type: 'exact', homeGoals: event.target.value === '' ? undefined : Number(event.target.value), awayGoals: prediction?.type === 'exact' ? prediction.awayGoals : undefined };
                                          setEditBetPredictions(next);
                                        }}
                                        disabled={savingBet}
                                        style={{ margin: 0 }}
                                      />
                                      <input
                                        type="number"
                                        min="0"
                                        className="input"
                                        value={prediction?.type === 'exact' && prediction.awayGoals !== undefined ? prediction.awayGoals : ''}
                                        onChange={(event) => {
                                          const next = [...editBetPredictions];
                                          next[index] = { type: 'exact', homeGoals: prediction?.type === 'exact' ? prediction.homeGoals : undefined, awayGoals: event.target.value === '' ? undefined : Number(event.target.value) };
                                          setEditBetPredictions(next);
                                        }}
                                        disabled={savingBet}
                                        style={{ margin: 0 }}
                                      />
                                    </div>
                                  ) : (
                                    <select
                                      className="input"
                                      value={prediction?.type === '1X2' ? prediction.pick || '1' : '1'}
                                      onChange={(event) => {
                                        const next = [...editBetPredictions];
                                        next[index] = { type: '1X2', pick: event.target.value as '1' | 'X' | '2' };
                                        setEditBetPredictions(next);
                                      }}
                                      disabled={savingBet}
                                      style={{ margin: 0 }}
                                    >
                                      <option value="1">Local</option>
                                      <option value="X">Empate</option>
                                      <option value="2">Visitante</option>
                                    </select>
                                  )}
                                </div>
                              );
                            })}
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                              <button className="button" onClick={handleSaveBet} disabled={savingBet} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                                {savingBet ? 'Guardando...' : 'Guardar apuesta'}
                              </button>
                              <button className="button button-danger" onClick={handleDeleteBet} disabled={savingBet} style={{ width: 'auto', padding: '8px 12px', margin: 0 }}>
                                Eliminar apuesta
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
      </>
      )}

      {/* Logs de notificaciones */}
      {activeSection === 'notifications' && (
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ marginTop: 0, marginBottom: '6px' }}>Logs de Notificaciones</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0 }}>
              Últimos 50 intentos de envío. No se cargan hasta que pulses el botón.
            </p>
          </div>
          <select
            className="input"
            value={selectedNotificationUserId}
            onChange={(event) => {
              setSelectedNotificationUserId(event.target.value);
              setNotificationLogsLoaded(false);
              setNotificationLogs([]);
            }}
            style={{ width: 'auto', minWidth: '220px', margin: 0 }}
          >
            <option value="">Todos los usuarios</option>
            {users.map(user => (
              <option key={user.uid} value={user.uid}>
                {user.nick} · {user.email}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="button button-secondary"
            onClick={loadNotificationLogs}
            disabled={loadingNotificationLogs}
            style={{ width: 'auto', padding: '8px 12px', margin: 0 }}
          >
            {loadingNotificationLogs ? 'Cargando...' : notificationLogsLoaded ? 'Actualizar' : 'Cargar logs'}
          </button>
        </div>

        {!notificationLogsLoaded ? (
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            Pulsa Cargar logs cuando quieras revisar notificaciones. Así el panel de comunidades abre más rápido.
          </p>
        ) : notificationLogs.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            {loadingNotificationLogs ? 'Cargando logs...' : 'Todavía no hay logs de notificaciones.'}
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
            {notificationLogs.map(log => (
              <div
                key={log.id}
                style={{
                  padding: '12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-secondary)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <strong>{notificationTypeLabel(log.type)}</strong>
                  <span style={{ color: notificationStatusColor(log.status), fontWeight: 600 }}>
                    {notificationStatusLabel(log.status)}
                  </span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>
                  <div><strong>Fecha:</strong> {formatOptionalDate(log.createdAt)}</div>
                  <div><strong>Usuario:</strong> {log.userNick || log.userId || 'Desconocido'}</div>
                  {(log.communityName || log.roundName) && (
                    <div><strong>Contexto:</strong> {[log.communityName, log.roundName].filter(Boolean).join(' / ')}</div>
                  )}
                  <div><strong>Mensaje:</strong> {log.title} - {log.body}</div>
                  <div><strong>Tokens:</strong> {log.tokenCount} · <strong>OK:</strong> {log.successCount} · <strong>Fallos:</strong> {log.failureCount}</div>
                  {log.error && <div><strong>Error:</strong> {log.error}</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      )}

      {/* Alerta personalizada */}
      {alertMessage && (
        <CustomAlert
          message={alertMessage.message}
          type={alertMessage.type}
          onClose={() => setAlertMessage(null)}
        />
      )}

      {/* Confirmación personalizada */}
      {confirmDialog && (
        <CustomConfirm
          message={confirmDialog.message}
          confirmText={confirmDialog.confirmText || 'Eliminar'}
          cancelText="Cancelar"
          onConfirm={confirmDialog.onConfirm}
          onCancel={() => setConfirmDialog(null)}
        />
      )}

      {/* Alerta personalizada */}
      {alertMessage && (
        <CustomAlert
          message={alertMessage.message}
          type={alertMessage.type}
          onClose={() => setAlertMessage(null)}
        />
      )}
      </div>
    </div>
  );
};

export default SuperAdminPanel;
