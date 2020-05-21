import { acceptWebSocket, acceptable } from "https://deno.land/std/ws/mod.ts";
import { chat } from "./chat.ts";

export async function handler(req: any) {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    return {
      statusCode: 200,
      headers: new Headers({
        "content-type": "text/html",
      }),
      body: await Deno.open("./index.html"),
    };
  }

  // WebSockets Chat
  if (method === "GET" && url === "/ws") {
    if (acceptable(req)) {
      return acceptWebSocket({
        conn: req.conn,
        bufReader: req.r,
        bufWriter: req.w,
        headers: req.headers,
      }).then(chat);
    }
  }
}
