import { Payload } from './Payload';

type SubscribeCallback = (message: string) => void;

export interface App {
  ports: {
    request: {
      subscribe: (callback: SubscribeCallback) => void
    },
    response: {
      send: (payload: Payload) => void
    }
  }
}
