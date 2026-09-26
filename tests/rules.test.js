const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const rules = require("../rules.js");

const base = "https://www.youtube.com/watch?v=normal";

test("blocked destinations cover direct pages and in-app links", () => {
  for (const [url, kind] of [
    ["/shorts/abc", "shorts"],
    ["https://m.youtube.com/shorts/abc?feature=share", "shorts"],
    ["/feed/shorts", "shorts"],
    ["/gaming", "gaming"],
    ["/gaming/game/abc", "gaming"],
    ["/feed/gaming", "gaming"],
    ["/playables", "playables"],
    ["/playables/abc", "playables"],
    ["/feed/playables", "playables"]
  ]) {
    assert.equal(rules.kindForUrl(url, base), kind, url);
  }
});

test("normal videos, live streams, and unrelated domains remain allowed", () => {
  for (const url of [
    "/watch?v=abc", "/live/abc", "/results?search_query=games",
    "/channel/abc", "/playlist?list=abc", "/gaming-news",
    "https://example.com/shorts/abc", "https://youtube.com.evil.test/playables"
  ]) {
    assert.equal(rules.kindForUrl(url, base), null, url);
  }
});

test("extension manifest is valid and loads the rules before the content script", () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "manifest.json"), "utf8"));
  assert.equal(manifest.manifest_version, 3);
  assert.deepEqual(manifest.content_scripts[0].js, ["rules.js", "content.js"]);
  assert.equal(manifest.content_scripts[0].run_at, "document_start");
});
