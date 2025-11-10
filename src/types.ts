import { Timestamp } from 'firebase/firestore';

export type UserRole = 'member' | 'admin';

export interface User {
  uid: string;
  email: string;
  nick: string;
  createdAt: Timestamp;
  communities: Record<string, UserRole>;
  isSuperAdmin?: boolean; // Campo que se establece manualmente en Firebase Console
}

export interface Community {
  id: string;
  name: string;
  passwordHash: string;
  createdBy: string;
  createdAt: Timestamp;
  membersCount: number;
  description?: string;
}

export type MatchType = 'exact' | '1X2';

export interface Match {
  matchId?: string;
  homeTeam: string;
  awayTeam: string;
  type: MatchType;
}

export type RoundStatus = 'open' | 'closed' | 'results_posted';

export interface Round {
  id: string;
  communityId: string;
  createdBy: string;
  createdAt: Timestamp;
  name: string;
  deadline: Timestamp;
  matches: Match[];
  status: RoundStatus;
  results?: MatchResult[];
  winnerId?: string | null; // ID del ganador o null si es bote
  winnerNick?: string | null; // Nick del ganador o "BOTE"
}

export interface MatchResult {
  type: MatchType;
  homeGoals?: number;
  awayGoals?: number;
  result?: '1' | 'X' | '2';
}

export interface Prediction {
  type: MatchType;
  homeGoals?: number;
  awayGoals?: number;
  pick?: '1' | 'X' | '2';
}

export interface Bet {
  id: string;
  roundId: string;
  communityId: string;
  userId: string;
  userNick: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  predictions: Prediction[];
  duplicateWarningShown: boolean;
}
