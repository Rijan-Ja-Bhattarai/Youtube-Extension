(function (root) {
  "use strict";

  const YOUTUBE_HOST = /^(?:(?:www|m)\.)?youtube\.com$/i;

  function kindForPath(pathname) {
    if (/^\/(?:feed\/)?shorts(?:\/|$)/i.test(pathname)) return "shorts";
    if (/^\/(?:feed\/)?playables(?:\/|$)/i.test(pathname)) return "playables";
    if (/^\/(?:feed\/)?gaming(?:\/|$)/i.test(pathname)) return "gaming";
    return null;
  }

  function kindForUrl(href, baseUrl) {
    try {
      const url = new URL(href, baseUrl);
      return YOUTUBE_HOST.test(url.hostname) ? kindForPath(url.pathname) : null;
    } catch {
      return null;
    }
  }

  const rules = { kindForPath, kindForUrl };
  root.YouTubeContentFilterRules = rules;
  if (typeof module !== "undefined" && module.exports) module.exports = rules;
})(globalThis);
