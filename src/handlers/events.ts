import Client from "../libs/client";
import Event from "../structures/Event";
import { join } from "path";
import getFiles from "../utils/getFiles";

export default (client: Client) => {
  const files = getFiles(join(__dirname, "..", "events"));

  files.forEach((eventFilePath) => {
    const EventClass = require(eventFilePath).default;
    const event: Event = new EventClass(client);

    // @ts-ignore
    client[event.once ? "once" : "on"](event.name, event.execute);
  });
};
