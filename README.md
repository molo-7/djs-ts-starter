# Djs Typescript Starter Code

latest version 14.0.3

## Prerequisites

Node.js: Node.js 16.6.x or newer is required.

## Events

Creating new event

create `/events/ready.ts`

```ts
// imports
import Client from "../libs/client";
import Event from "../structures/Event";

export default class Ready implements Event {
  client: Client;
  name = Events.ClientReady; // event name
  once = true; // true if you want to handle this event once

  constructor(client: Client) {
    this.client = client;
  }

  // execution funtion
  execute = (...args: any[]) => {
    console.log(`🚀 ${this.client.user.tag} is online`);
  };
}
```

> you can create event listeners as many as you want for a single event

And if you need you can define and use your [custom events](./src/structures/Event.ts)

example

```ts
import Client from "../libs/client";
import Event, { CustomEvents } from "../structures/Event";
import { TextChannel } from "discord.js";
import { CustomEvents } from "../typings";

export default class SongRequest implements Event {
  client: Client;
  name = CustomEvents.SongRequest;

  constructor(client: Client) {
    this.client = client;
  }

  execute = (songname: string, channel: TextChannel) => {
        channel.send(`new requested song: \`${songname}\` `)
    }
  };
}
```

```ts
export enum CustomEvents {
  SongRequest = "songRequest",
}
```

## Slash Commands

Creating new command

create `/commands/ping.ts`

```ts
import Client from "../libs/client";
import Command from "../structures/Command";
import { CommandInteraction } from "discord.js";

export default class Ping extends Command {
  constructor(client: Client) {
    super();
    this.client = client;

    // command builder
    this.setName("ping").setDescription("tests bot's ping");
  }

  // execution funtion
  execute = (interaction: CommandInteraction) => interaction.reply("Pong");
}
```

use djs [SlashCommandBuilder](https://discord.js.org/#/docs/builders/main/class/SlashCommandBuilder) inside the constructor or just set properties directly to the class

example

```ts
export default class Ping extends Command {
  name = "ping";
  description = "tests bot's ping";

  constructor(client: Client) {
    super();
    this.client = client;
  }

  // execution funtion
  execute = (interaction: CommandInteraction) => interaction.reply("Pong");
}
```

> create events and commands on any nesting level

## .env

```
TOKEN=YOUR-DISCORD-BOT-TOKEN
```
