import Client from "../libs/client";
import { SlashCommandBuilder } from "@discordjs/builders";

export default class Command extends SlashCommandBuilder {
  client: Client;
  execute: (...args) => void;

  constructor() {
    super();
  }
}
