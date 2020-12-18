import { Line } from "./Line";

export interface StateUpdate {
  newLine: Line | null,
  heading: string | null,
  message: string | null
}