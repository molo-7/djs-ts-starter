import Client from "../libs/client";
import { Events } from "discord.js";

export default interface Event {
  client: Client;
  name: Events | CustomEvents;
  once?: boolean;
  execute: (...args) => void;
}

export enum CustomEvents {
  SongRequest = "songRequest",
}
