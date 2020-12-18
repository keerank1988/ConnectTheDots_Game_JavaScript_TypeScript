import { Players, ResponseMessages } from "../config/constants";
import { Player } from "../interfaces";
import { sendResponse } from "./messageController";

export const player2: Player = { name: Players.PLAYER_2 };
export const player1: Player = { name: Players.PLAYER_1 };

const PLAYER_TIMEOUT_DURATION = 6000; // 6 seconds

let activePlayer: Player = player1;
let playerTimeout: number | null = null;

export const setActivePlayer = (player: Player): void => {
  activePlayer = player;
};

export const getActivePlayer = (): Player => {
  return activePlayer;
};

export const togglePlayer = (): void => {
  setActivePlayer(activePlayer === player2 ? player1 : player2);
};

export const startPlayerTimer = (): number | null => {
  if (playerTimeout) {
    clearTimeout(playerTimeout);
  }
  playerTimeout = window.setTimeout(() => {
    sendResponse({
      msg: ResponseMessages.UPDATE_TEXT,
      body: {
        newLine: null,
        heading: getActivePlayer().name,
        message: "Are you asleep?"
      }
    });
  }, PLAYER_TIMEOUT_DURATION);
  return playerTimeout
}