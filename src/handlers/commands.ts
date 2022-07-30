import Client from "../libs/client";
import Command from "../structures/Command";
import { Collection } from "discord.js";
import { join } from "path";
import getFiles from "../utils/getFiles";

export default (client: Client): Collection<string, Command> => {
  const collection: Collection<string, Command> = new Collection();
  const files = getFiles(join(__dirname, "..", "commands"));

  files.forEach((commandFilePath) => {
    const CommandClass = require(commandFilePath).default;
    const command: Command = new CommandClass(client);

    collection.set(command.name, command);
  });

  return collection;
};
