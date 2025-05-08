function blockTrackers() {
  const blockedDomains = [
    "doubleclick.net",
    "googletagmanager.com",
    "facebook.net",
    "ads.twitter.com",
    "analytics.google.com"
  ];

  chrome.webRequest.onBeforeRequest.addListener(
    (details) => ({ cancel: true }),
    { urls: blockedDomains.map(domain => `*://${domain}/*`) },
    ["blocking"]
  );
}
