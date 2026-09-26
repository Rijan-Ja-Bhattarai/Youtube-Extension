# Remove YouTube Shorts, Gaming & Playables

A Firefox extension that hides YouTube Shorts, YouTube Gaming destinations and game cards, YouTube Playables, and the entire “More from YouTube” sidebar section. It also sends direct or in-app visits to Shorts, Gaming, and Playables pages back to YouTube Home. Ordinary videos and live streams are not filtered by topic.

## Install temporarily in Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on** and select this folder's `manifest.json`.
3. Reload any YouTube tabs that were already open.

After updating the extension files, click **Reload** for this add-on on the same Firefox debugging page, then reload YouTube.

Firefox removes temporary add-ons when the browser closes. For regular installation, package and sign the extension through Mozilla Add-ons.

The extension runs only on `youtube.com`, `www.youtube.com`, and `m.youtube.com`. It does not request storage, browsing history, or network permissions. YouTube changes its page markup often; the filters use both known component names and destination links so dynamically added cards are covered.
