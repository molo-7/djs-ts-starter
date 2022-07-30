import Client from "../libs/client";
import Event from "../structures/Event";
import { REST } from "@discordjs/rest";
import { Routes, Events } from "discord.js";

export default class Ready implements Event {
  client: Client;
  name = Events.ClientReady;
  once = true;

  constructor(client: Client) {
    this.client = client;
  }

  execute = async () => {
    console.log("----------------------------");
    console.log(`Logged In As \x1b[36m︎${this.client.user.tag}\x1b[0m︎`);

    if (this.client.commands.size > 0) {
      const rest = new REST({ version: "10" }).setToken(this.client.token);

      const commands = Array.from(
        this.client.commands.map(({ execute, client, ...cmd }) => cmd).values()
      );

      console.log("\x1b[33m︎{/} Reloading Commands ...\x1b[0m︎");
      rest
        .put(Routes.applicationCommands(this.client.user.id), {
          body: commands,
        })
        .then(() => {
          console.log("\x1b[32m︎{/} Reloaded Commands ✅\x1b[0m︎");
          console.log("----------------------------");
        })
        .catch(console.error);
    } else console.log("----------------------------");
  };
}
