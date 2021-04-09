import { handlePost } from "./handlers/post";
import { handleSchedule } from "./handlers/schedule";

declare global {
  const KV: KVNamespace;
}

addEventListener("fetch", (event: FetchEvent) => {
  if (event.request.method === "POST") {
    event.respondWith(handlePost(event.request));
  }
});

addEventListener("scheduled", (event) => {
  event.waitUntil(handleSchedule(event));
});
