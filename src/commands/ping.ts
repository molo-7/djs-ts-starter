import Client from "../libs/client";
import Command from "../structures/Command";
import { CommandInteraction } from "discord.js";

export default class Ping extends Command {
  constructor(client: Client) {
    super();
    this.client = client;

    this.setName("ping").setDescription("tests bot's ping");
  }

  execute = (interaction: CommandInteraction) => {
    const responseTime = Math.abs(Date.now() - interaction.createdTimestamp);
    interaction.reply({
      content: `\`\`\`js\n⌛ Response Time: ${responseTime} ms\n⏱️ Web Socket: ${this.client.ws.ping} ms\`\`\``,
      ephemeral: true,
    });
  };
}
