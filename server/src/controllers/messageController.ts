import { RequestMessages } from '../config/constants';
import { Payload, Point } from '../interfaces';
import { initGame, logMessage } from './gameController';
import { onNodeClicked } from './nodeController';
import { startPlayerTimer } from './playerController';

export const handleRequest = (payload: Payload): void => {
  let response = null;
  logMessage('REQUEST', payload);
  switch (payload.msg) {
    case RequestMessages.INITIALIZE:
      response = initGame();
      break;
    case RequestMessages.NODE_CLICKED:
      response = onNodeClicked(payload.body as Point);
      break;
    case RequestMessages.ERROR:
      logMessage('ERROR', payload);
      break;
  }
  if (response) {
    sendResponse(response);
  }
  startPlayerTimer();
};

export const sendResponse = (payload: Payload): void => {
  logMessage('REQUEST', payload);
  app.ports.response.send(payload);
};
