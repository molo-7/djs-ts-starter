import Client from "../libs/client";
import Event from "../structures/Event";
import { Events, Interaction, CommandInteraction } from "discord.js";

export default class CommandCreate implements Event {
  client: Client;
  name = Events.InteractionCreate;

  constructor(client: Client) {
    this.client = client;
  }

  execute = (interaction: Interaction) => {
    if (interaction.isChatInputCommand()) {
      const command = this.client.commands.get(interaction.commandName);

      command.execute(interaction as CommandInteraction);
    }
  };
}
