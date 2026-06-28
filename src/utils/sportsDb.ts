import { app } from '../firebase';

type SportsDbRequest = {
  endpoint: 'eventsround' | 'eventsseason' | 'lookupevent';
  id: string;
  round?: string;
  season?: string;
};

export async function fetchSportsDb<T>(request: SportsDbRequest): Promise<T> {
  const { getFunctions, httpsCallable } = await import('firebase/functions');
  const functions = getFunctions(app);
  const callable = httpsCallable<SportsDbRequest, T>(functions, 'fetchSportsDb');
  const result = await callable(request);
  return result.data;
}
