import { Timestamp } from 'firebase/firestore';

export type UserRole = 'member' | 'admin';

export interface User {
  uid: string;
  email: string;
  nick: string;
  createdAt: Timestamp;
  communities: Record<string, UserRole>;
  fcmTokens: string[];
}

export interface Community {
  id: string;
  name: string;
  passwordHash: string;
  createdBy: string;
  createdAt: Timestamp;
  membersCount: number;
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
  deadline: Timestamp;
  matches: Match[];
  status: RoundStatus;
  results?: MatchResult[];
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

export interface NotificationLog {
  id: string;
  targetUserId: string;
  roundId: string;
  type: string;
  sentAt: Timestamp;
}
