import { StateUpdate } from './StateUpdate';
import { Point } from './Point';
import { RequestMessages, ResponseMessages } from '../config/constants';

export interface Payload {
  msg: RequestMessages | ResponseMessages,
  body: StateUpdate | Point | string | null
}
