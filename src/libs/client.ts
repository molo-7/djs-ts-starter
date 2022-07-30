import { Client as DiscordClient, GatewayIntentBits } from "discord.js";
import handleEvents from "../handlers/events";
import handleCommands from "../handlers/commands";

export default class Client extends DiscordClient {
  commands = handleCommands(this);

  constructor(token: string) {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
      ],
    });

    handleEvents(this);
    this.login(token);
  }
}
