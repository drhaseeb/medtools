const AD_CLIENT = "ca-pub-6579850399965802";

// Google's requirement for the registered privacy-policy page is explicit:
// "The pages don't host scripts that require user consent, including ad
// tags. The pages don't contain the Funding Choices consent message tag."
// This is the one route these must never load on.
const EXCLUDED_PATHS = ["/privacy"];

function appendScript(src: string, extraAttrs?: Record<string, string>) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  if (extraAttrs) {
    for (const [key, value] of Object.entries(extraAttrs)) script.setAttribute(key, value);
  }
  document.head.appendChild(script);
}

function signalGooglefcPresent() {
  if ((window.frames as unknown as Record<string, Window>).googlefcPresent) return;
  if (!document.body) {
    setTimeout(signalGooglefcPresent, 0);
    return;
  }
  const iframe = document.createElement("iframe");
  iframe.style.cssText = "width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px; display: none;";
  iframe.name = "googlefcPresent";
  document.body.appendChild(iframe);
}

/** Loads AdSense + the Funding Choices consent tag, except on the registered privacy-policy route. */
export function bootstrapAds() {
  if (EXCLUDED_PATHS.includes(window.location.pathname)) return;

  appendScript(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`, {
    crossorigin: "anonymous",
  });
  appendScript(`https://fundingchoicesmessages.google.com/i/${AD_CLIENT.replace("ca-", "")}?ers=1`);
  signalGooglefcPresent();
}
