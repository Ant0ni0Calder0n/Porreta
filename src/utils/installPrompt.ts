export type DevicePlatform = 'android' | 'ios' | 'other';

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function getDevicePlatform(): DevicePlatform {
  const userAgent = navigator.userAgent || '';
  const platform = navigator.platform || '';
  const isIpadOS = platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  if (/Android/i.test(userAgent)) return 'android';
  if (/iPhone|iPad|iPod/i.test(userAgent) || isIpadOS) return 'ios';
  return 'other';
}

export function isInstalledApp(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches || Boolean((navigator as any).standalone);
}

export function isAndroidChrome(): boolean {
  const userAgent = navigator.userAgent || '';
  return /Android/i.test(userAgent)
    && /Chrome\//i.test(userAgent)
    && !/MiuiBrowser|SamsungBrowser|EdgA|OPR|Firefox/i.test(userAgent);
}
