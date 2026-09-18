/**
 * Google Analytics (GA4) — initialized once in the browser.
 * The measurement ID is a publishable value, exposed by the Google Analytics
 * connector as VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY.
 */

const MEASUREMENT_ID = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;

/** Load gtag.js and configure GA4. Safe to call multiple times. */
export function initAnalytics() {
  if (initialized || typeof window === "undefined" || !MEASUREMENT_ID) return;
  initialized = true;

  // load the gtag script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // init dataLayer + gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };

  // disable auto page_view — we send them manually on route change
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
}

/** Fire a page_view event for the given path. Called on every route change. */
export function trackPageView(path: string) {
  if (typeof window === "undefined" || !MEASUREMENT_ID || !window.gtag) return;
  window.gtag("event", "page_view", { page_path: path });
}
