import { handleRequest } from "./controllers/messageController";
import { App, Payload } from "./interfaces";

export const start = (app: App): void => {
  app.ports.request.subscribe((message: string) => {
    const payload: Payload = JSON.parse(message);
    handleRequest(payload);
  });
}