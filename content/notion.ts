import { NotionAPI } from "notion-client";

// Notion's private API rejects Node's default user agent with a 403, which
// fails the build the moment a note is prerendered. Ask as a browser instead.
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

export const notion = new NotionAPI({
  ofetchOptions: { headers: { "user-agent": USER_AGENT } },
});
