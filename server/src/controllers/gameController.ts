import { setActiveNode } from './stateController';
import { getActivePlayer, player1, setActivePlayer } from './playerController';
import { ResponseMessages } from '../config/constants';
import { EMPTY_NODE } from './nodeController';
import { Payload } from '../interfaces';

export const initGame = (): Payload => {
  setActivePlayer(player1);
  setActiveNode(EMPTY_NODE);
  return {
    msg: ResponseMessages.INITIALIZE,
    body: {
      newLine: null,
      heading: getActivePlayer().name,
      message: `Awaiting ${getActivePlayer().name}'s Move`
    }
  };
};

export const logMessage = (...message: any[]): void => {
  // tslint:disable-next-line:no-console
  console.log(...message);
}
