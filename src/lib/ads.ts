declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function pushAd() {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch {
    // AdSense script not loaded yet (e.g. blocked by an ad blocker) — ignore.
  }
}
