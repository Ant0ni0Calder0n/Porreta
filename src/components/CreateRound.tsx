import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { collection, addDoc, doc, getDoc, increment, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseDb';
import { Community, Match, MatchType } from '../types';
import { fetchSportsDb } from '../utils/sportsDb';

type LeagueOption = {
  id: string;
  name: string;
  defaultSeason: string;
  regularRoundCount?: number;
};

type SportsDbEvent = {
  idEvent: string;
  strHomeTeam: string | null;
  strAwayTeam: string | null;
  intRound: string | null;
  dateEvent: string | null;
  strTime: string | null;
  strTimestamp: string | null;
};

const LEAGUES: LeagueOption[] = [
  { id: '4335', name: 'La Liga', defaultSeason: '2025-2026', regularRoundCount: 38 }
];

const getCurrentSeason = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const startYear = month >= 8 ? year : year - 1;
  return `${startYear}-${startYear + 1}`;
};

const getDefaultSeason = (league: LeagueOption) => {
  if (league.defaultSeason.includes('-')) {
    return getCurrentSeason();
  }

  return league.defaultSeason;
};

const getDefaultRound = (league: LeagueOption) => {
  if (!league.regularRoundCount) return '';

  const now = new Date();
  const seasonStartYear = Number(getDefaultSeason(league).slice(0, 4));
  const seasonStart = new Date(seasonStartYear, 7, 15);
  const seasonEnd = new Date(seasonStartYear + 1, 4, 25);

  if (now <= seasonStart) return '1';
  if (now >= seasonEnd) return String(league.regularRoundCount);

  const progress = (now.getTime() - seasonStart.getTime()) / (seasonEnd.getTime() - seasonStart.getTime());
  const round = Math.round(progress * (league.regularRoundCount - 1)) + 1;
  return String(Math.min(Math.max(round, 1), league.regularRoundCount));
};

const formatDateTimeLocal = (date: Date) => {
  const pad = (value: number) => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const formatMatchDate = (date: Date) => date.toLocaleString('es-ES', {
  day: '2-digit',
  month: '2-digit',
  year: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
});

const getEventDate = (event: SportsDbEvent) => {
  if (event.strTimestamp) {
    return new Date(event.strTimestamp);
  }

  if (event.dateEvent) {
    return new Date(`${event.dateEvent}T${event.strTime || '00:00:00'}`);
  }

  return null;
};

const getRoundKey = (event: SportsDbEvent) => event.intRound || event.dateEvent || 'Sin jornada';

const getRoundLabel = (roundKey: string) => {
  if (roundKey === 'Sin jornada') return roundKey;
  if (/^\d+$/.test(roundKey)) return `Jornada ${roundKey}`;
  return roundKey;
};

const getLeague = (leagueId: string) => LEAGUES.find(item => item.id === leagueId) || LEAGUES[0];

const CreateRound: React.FC = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [matches, setMatches] = useState<Match[]>([]);
  const [community, setCommunity] = useState<Community | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [importLeagueId, setImportLeagueId] = useState(LEAGUES[0].id);
  const [importSeason, setImportSeason] = useState(getDefaultSeason(LEAGUES[0]));
  const [importEvents, setImportEvents] = useState<SportsDbEvent[]>([]);
  const [importRound, setImportRound] = useState(getDefaultRound(LEAGUES[0]));
  const [selectedEventIds, setSelectedEventIds] = useState<Record<string, boolean>>({});
  const [selectedEventTypes, setSelectedEventTypes] = useState<Record<string, MatchType | ''>>({});
  const [importLoading, setImportLoading] = useState(false);
  const [importError, setImportError] = useState('');

  useEffect(() => {
    const loadCommunity = async () => {
      if (!communityId) return;
      const communityDoc = await getDoc(doc(db, 'communities', communityId));
      if (communityDoc.exists()) {
        setCommunity({ id: communityDoc.id, ...communityDoc.data() } as Community);
      }
    };

    loadCommunity().catch(() => undefined);
  }, [communityId]);

  const importLeague = getLeague(importLeagueId);
  const importRoundOptions = importLeague.regularRoundCount
    ? Array.from({ length: importLeague.regularRoundCount }, (_, index) => String(index + 1))
    : Array.from(new Set(importEvents.map(getRoundKey)));
  const visibleImportEvents = importLeague.regularRoundCount
    ? importEvents
    : importEvents.filter(event => getRoundKey(event) === importRound);
  const selectedImportEvents = visibleImportEvents.filter(event => selectedEventIds[event.idEvent]);

  const handleMatchChange = (index: number, field: 'homeTeam' | 'awayTeam' | 'type', value: string) => {
    const newMatches = [...matches];
    if (field === 'type') {
      newMatches[index].type = value as MatchType;
    } else {
      newMatches[index][field] = value;
    }
    setMatches(newMatches);
  };

  const addMatch = () => {
    setMatches([...matches, { homeTeam: '', awayTeam: '', type: 'exact' }]);
  };

  const removeMatch = (index: number) => {
    setMatches(matches.filter((_, idx) => idx !== index));
  };

  const normalizeEvents = (events: SportsDbEvent[]) => events
    .filter(event => event.idEvent && event.strHomeTeam && event.strAwayTeam)
    .sort((a, b) => {
      const aDate = getEventDate(a)?.getTime() || 0;
      const bDate = getEventDate(b)?.getTime() || 0;
      return aDate - bDate;
    });

  const fetchRoundEvents = async (round: string) => {
    const data = await fetchSportsDb<{ events?: SportsDbEvent[] }>({
      endpoint: 'eventsround',
      id: importLeagueId,
      round,
      season: importSeason
    });
    return normalizeEvents((data.events || []) as SportsDbEvent[]);
  };

  const loadClosestRegularRound = async () => {
    const rounds = Array.from({ length: importLeague.regularRoundCount || 0 }, (_, index) => String(index + 1));
    const now = Date.now();
    const results = await Promise.all(rounds.map(async round => ({
      round,
      events: await fetchRoundEvents(round).catch(() => [])
    })));

    const roundsWithEvents = results.filter(result => result.events.length > 0);
    if (roundsWithEvents.length === 0) {
      return { round: importRound, events: [] };
    }

    return roundsWithEvents.reduce((best, current) => {
      const bestDistance = Math.min(...best.events.map(event => Math.abs((getEventDate(event)?.getTime() || 0) - now)));
      const currentDistance = Math.min(...current.events.map(event => Math.abs((getEventDate(event)?.getTime() || 0) - now)));
      return currentDistance < bestDistance ? current : best;
    });
  };

  const loadImportEvents = async (autoSelectClosestRound = false) => {
    setImportError('');
    setImportLoading(true);

    try {
      if (!/^\d+$/.test(importLeagueId)) {
        throw new Error('TheSportsDB no ofrece la Eurocopa con la API pública actual');
      }

      let events: SportsDbEvent[] = [];
      let loadedRound = importRound;
      if (importLeague.regularRoundCount && importRound) {
        if (autoSelectClosestRound) {
          const closestRound = await loadClosestRegularRound();
          setImportRound(closestRound.round);
          loadedRound = closestRound.round;
          events = closestRound.events;
        } else {
          events = await fetchRoundEvents(importRound);
        }
      } else {
        const data = await fetchSportsDb<{ events?: SportsDbEvent[] }>({
          endpoint: 'eventsseason',
          id: importLeagueId,
          season: importSeason
        });
        events = normalizeEvents((data.events || []) as SportsDbEvent[]);
      }

      setImportEvents(events);
      setSelectedEventIds({});
      setSelectedEventTypes({});

      if (events.length === 0) {
        if (!importLeague.regularRoundCount) {
          setImportRound('');
        }
        setImportError('No se encontraron partidos para esa liga y temporada');
        return;
      }

      if (!importLeague.regularRoundCount) {
        const now = new Date();
        const closestEvent = events.reduce((closest, event) => {
          const closestDate = getEventDate(closest)?.getTime() || 0;
          const eventDate = getEventDate(event)?.getTime() || 0;
          return Math.abs(eventDate - now.getTime()) < Math.abs(closestDate - now.getTime()) ? event : closest;
        }, events[0]);

        setImportRound(getRoundKey(closestEvent));
        loadedRound = getRoundKey(closestEvent);
      }

      if (/^\d+$/.test(loadedRound) && (!name.trim() || /^Jornada \d+$/.test(name.trim()))) {
        setName(`Jornada ${loadedRound}`);
      }
    } catch (err: any) {
      setImportEvents([]);
      setImportRound('');
      setImportError(err.message || 'Error cargando partidos');
    } finally {
      setImportLoading(false);
    }
  };

  const openImportModal = () => {
    setShowImportModal(true);
    loadImportEvents(true).catch(() => undefined);
  };

  const handleLeagueChange = (leagueId: string) => {
    const league = getLeague(leagueId);
    setImportLeagueId(league.id);
    setImportSeason(getDefaultSeason(league));
    setImportEvents([]);
    setImportRound(getDefaultRound(league));
    setSelectedEventIds({});
    setSelectedEventTypes({});
  };

  const addSelectedImportEvents = () => {
    if (selectedImportEvents.length === 0) {
      setImportError('Selecciona al menos un partido');
      return;
    }

    for (const event of selectedImportEvents) {
      if (!selectedEventTypes[event.idEvent]) {
        setImportError('Elige el tipo de apuesta de todos los partidos seleccionados');
        return;
      }
    }

    const importedMatches: Match[] = selectedImportEvents.map(event => ({
      homeTeam: event.strHomeTeam || '',
      awayTeam: event.strAwayTeam || '',
      type: selectedEventTypes[event.idEvent] as MatchType,
      apiSource: 'thesportsdb',
      apiEventId: event.idEvent,
      apiLeagueId: importLeagueId,
      apiSeason: importSeason,
      apiRound: getRoundKey(event),
      apiTimestamp: event.strTimestamp || undefined
    }));

    setMatches([...matches, ...importedMatches]);

    const earliestDate = selectedImportEvents.reduce<Date | null>((earliest, event) => {
      const eventDate = getEventDate(event);
      if (!eventDate) return earliest;
      if (!earliest) return eventDate;
      return eventDate < earliest ? eventDate : earliest;
    }, null);

    if (earliestDate) {
      setDeadline(formatDateTimeLocal(new Date(earliestDate.getTime() - 5 * 60 * 1000)));
    }

    setShowImportModal(false);
    setImportError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Debes poner un nombre a la ronda');
      return;
    }

    if (!deadline) {
      setError('Debes establecer una hora límite');
      return;
    }

    const deadlineDate = new Date(deadline);
    if (deadlineDate <= new Date()) {
      setError('La hora límite debe ser en el futuro');
      return;
    }

    if (matches.length === 0) {
      setError('Añade al menos un partido');
      return;
    }

    for (const match of matches) {
      if (!match.homeTeam.trim() || !match.awayTeam.trim()) {
        setError('Completa todos los equipos');
        return;
      }

      if (!match.type) {
        setError('Elige el tipo de apuesta de todos los partidos');
        return;
      }
    }

    if (!currentUser || !communityId) return;

    setError('');
    setLoading(true);

    try {
      await addDoc(collection(db, 'rounds'), {
        communityId,
        createdBy: currentUser.uid,
        createdAt: new Date(),
        name: name.trim(),
        deadline: deadlineDate,
        matches: matches.map(match => ({
          ...match,
          homeTeam: match.homeTeam.trim(),
          awayTeam: match.awayTeam.trim()
        })),
        status: 'open',
        isVisible: isVisible
      });

      const botePerRound = community?.botePerRound || 0;
      if (isVisible && botePerRound > 0) {
        await updateDoc(doc(db, 'communities', communityId), {
          boteAmount: increment(botePerRound)
        });
      }

      // Navegar de vuelta sin replace
      navigate(`/community/${communityId}`, { replace: true });
    } catch (err: any) {
      setError('Error creando ronda: ' + (err.message || 'Error desconocido'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Crear Ronda</h1>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Información de la Ronda</h2>
            
            <div>
              <label className="label">Nombre de la Ronda</label>
              <input
                type="text"
                className="input"
                placeholder="Ej: Jornada 10, Ronda Navidad, etc."
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <label className="label">Hora Límite</label>
              <input
                type="datetime-local"
                className="input"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                disabled={loading}
              />
            </div>
            <div style={{ marginTop: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                <input
                  type="checkbox"
                  checked={isVisible}
                  onChange={(e) => setIsVisible(e.target.checked)}
                  disabled={loading}
                  style={{ marginRight: '8px', width: '18px', height: '18px' }}
                />
                <span style={{ fontSize: '14px' }}>
                  {isVisible ? '👁️ Ronda visible para todos los usuarios' : '🔒 Ronda oculta (solo admins)'}
                </span>
              </label>
              <p style={{ margin: '8px 0 0 26px', fontSize: '13px', color: '#666'}}>
                {isVisible
                ? 'Los usuarios podrán ver y apostar en esta ronda inmediatamente.'
                : 'La ronda estará oculta para los usuarios. Solo tú (admin) podrás verla y hacerla visible más tarde.'}
              </p>
            </div>
          </div>

          <div className="card">
            <div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'nowrap', justifyContent: 'center', marginBottom: '12px' }}>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={addMatch}
                  disabled={loading}
                  style={{ width: 'auto', flex: '1 1 0', padding: '8px 12px', fontSize: '14px', whiteSpace: 'nowrap' }}
                >
                  Añadir manual
                </button>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={openImportModal}
                  disabled={loading}
                  style={{ width: 'auto', flex: '1 1 0', padding: '8px 12px', fontSize: '14px', whiteSpace: 'nowrap' }}
                >
                  Añadir desde API
                </button>
              </div>
              <h2 style={{ marginTop: 0, marginBottom: 0 }}>Partidos ({matches.length})</h2>
            </div>

            <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
              Puedes crear jornadas con cualquier número de partidos y elegir el tipo de apuesta de cada uno.
            </p>

            {matches.length === 0 && (
              <p style={{ fontSize: '14px', color: '#666', margin: '16px 0' }}>
                Todavía no hay partidos. Añade uno manualmente o importa partidos desde la API.
              </p>
            )}

            {matches.map((match, index) => (
              <div key={index} style={{ marginBottom: '18px', paddingBottom: '18px', borderBottom: index < matches.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>Partido {index + 1}</h3>
                  <button
                    type="button"
                    className="button button-secondary"
                    onClick={() => removeMatch(index)}
                    disabled={loading}
                    style={{ width: 'auto', padding: '8px 12px' }}
                  >
                    Quitar
                  </button>
                </div>

                <label className="label">Tipo de apuesta</label>
                <select
                  className="input"
                  value={match.type}
                  onChange={(e) => handleMatchChange(index, 'type', e.target.value)}
                  disabled={loading}
                >
                  <option value="exact">Resultado Exacto</option>
                  <option value="1X2">1 X 2</option>
                </select>

                <input
                  type="text"
                  className="input"
                  placeholder="Equipo Local"
                  value={match.homeTeam}
                  onChange={(e) => handleMatchChange(index, 'homeTeam', e.target.value)}
                  disabled={loading}
                />
                <input
                  type="text"
                  className="input"
                  placeholder="Equipo Visitante"
                  value={match.awayTeam}
                  onChange={(e) => handleMatchChange(index, 'awayTeam', e.target.value)}
                  disabled={loading}
                />
              </div>
            ))}

            {error && <div className="error">{error}</div>}

            <button type="submit" className="button" disabled={loading}>
              {loading ? 'Creando...' : 'Crear Ronda'}
            </button>
          </div>
        </form>
      </div>

      {showImportModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.45)', zIndex: 1000, padding: '16px', overflowY: 'auto' }}>
          <div className="card" style={{ maxWidth: '760px', margin: '30px auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
              <h2 style={{ margin: 0 }}>Importar partidos</h2>
              <button type="button" className="button button-secondary" onClick={() => setShowImportModal(false)} style={{ width: 'auto', padding: '8px 12px' }}>
                Cerrar
              </button>
            </div>

            <p style={{ fontSize: '14px', color: '#666' }}>
              Busca una jornada en TheSportsDB, marca los partidos y elige el tipo de apuesta antes de añadirlos.
            </p>

            <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
              <div>
                <label className="label">Liga</label>
                <select className="input" value={importLeagueId} onChange={(e) => handleLeagueChange(e.target.value)} disabled={importLoading}>
                  {LEAGUES.map(league => (
                    <option key={league.id} value={league.id}>{league.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Temporada</label>
                <input className="input" value={importSeason} onChange={(e) => setImportSeason(e.target.value)} disabled={importLoading} placeholder="2025-2026" />
              </div>

              <div>
                <label className="label">Jornada</label>
                <select className="input" value={importRound} onChange={(e) => setImportRound(e.target.value)} disabled={importLoading || importRoundOptions.length === 0}>
                  {importRoundOptions.map(round => (
                    <option key={round} value={round}>{getRoundLabel(round)}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="button" className="button button-secondary" onClick={() => loadImportEvents()} disabled={importLoading} style={{ marginTop: '12px' }}>
              {importLoading ? 'Buscando...' : 'Buscar'}
            </button>

            {importError && <div className="error" style={{ marginTop: '12px' }}>{importError}</div>}

            <div style={{ marginTop: '16px' }}>
              {visibleImportEvents.map(event => {
                const eventDate = getEventDate(event);
                return (
                  <div key={event.idEvent} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '28px minmax(0, 1fr) 28px', alignItems: 'center', gap: '8px', paddingBottom: '8px' }}>
                      <input
                        type="checkbox"
                        checked={Boolean(selectedEventIds[event.idEvent])}
                        onChange={(e) => setSelectedEventIds({ ...selectedEventIds, [event.idEvent]: e.target.checked })}
                        style={{ width: '18px', height: '18px', justifySelf: 'start' }}
                      />
                      <div style={{ overflowX: 'auto', textAlign: 'center' }}>
                        <strong style={{ whiteSpace: 'nowrap' }}>{event.strHomeTeam} vs {event.strAwayTeam}</strong>
                      </div>
                      <span aria-hidden="true" />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '13px', color: '#666', textAlign: 'center' }}>
                        {eventDate ? formatMatchDate(eventDate) : 'Fecha no disponible'}
                      </span>
                      <select
                        className="input"
                        value={selectedEventTypes[event.idEvent] || ''}
                        onChange={(e) => setSelectedEventTypes({ ...selectedEventTypes, [event.idEvent]: e.target.value as MatchType | '' })}
                        disabled={!selectedEventIds[event.idEvent]}
                        style={{ width: '100%', maxWidth: '190px', justifySelf: 'center', marginBottom: 0 }}
                      >
                        <option value="">Tipo</option>
                        <option value="1X2">1 X 2</option>
                        <option value="exact">Resultado exacto</option>
                      </select>
                    </div>
                  </div>
                );
              })}

              {!importLoading && importEvents.length > 0 && visibleImportEvents.length === 0 && (
                <p style={{ fontSize: '14px', color: '#666' }}>No hay partidos en esta jornada.</p>
              )}
            </div>

            <button type="button" className="button" onClick={addSelectedImportEvents} disabled={importLoading || selectedImportEvents.length === 0} style={{ marginTop: '16px' }}>
              Añadir seleccionados
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateRound;
