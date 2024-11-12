<p align="center">
    <img width="100px" style="margin-bottom:-6px" src="./assets//logo.png" />
</p>
<h1 align="center">Moderate</h1>
<p style="font-size:16px"><b>The best way to moderate your Discord Server easily!</b></p>
<br>
<p align="center">
    <img src="https://madewithlove.now.sh/gr?heart=true&template=for-the-badge" alt="Made with love in Greece">
    <img alt="Made with TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    <br>
    <a href="https://www.npmjs.com/package/@m3rcena/moderate">
      <img src="https://img.shields.io/npm/v/%40m3rcena%2Fmoderate?maxAge=3600&style=for-the-badge&logo=npm&logoColor=red" alt="NPM version" />
    </a>
    <a href="https://www.npmjs.com/package/@m3rcena/moderate">
      <img src="https://img.shields.io/npm/d18m/%40m3rcena%2Fmoderate?maxAge=3600&style=for-the-badge&logo=npm&logoColor=red" alt="NPM downloads" />
    </a>
    <a href="">
      <img src="https://img.shields.io/badge/Documation-%230288D1.svg?style=for-the-badge&logo=gitbook&logoColor=white" alt="Get Started Now">
    </a>
    <br>
    <a href="https://www.npmjs.com/package/@m3rcena/moderate"><img src="https://nodei.co/npm/@m3rcena/moderate.png?downloads=true&stars=true" alt="npm install lavalink-client" /></a>
</p>
<br><br>

# Install

Latest stable Version: **`v1.0.0`**

<details><summary>👉 via NPM</summary>

```bash
npm install --save @m3rcena/moderate
```

</details>

# Documentation
Check out the [Documentation](https://m3rcena.gitbook.io/docs)

# Features
- 🧑 Beginner friendly

- 🎉 Easy to use

- 🔘 Multiple Actions

- 🤖 Supports Discord.js v14

- ✂ Fully Customizable

- and much more!

# Usage 📚

<details><summary>👉 CommonJS</summary>

```js
const { Client, GatewayIntentBits } = require("discord.js");

const { ModerateManager }= require("@m3rcena/moderate");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on("ready", async (cl) => {
    console.log("Bot is ready");
    client.moderateManager = new ModerateManager(cl); // Initialize Moderate Manager
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.content === "w!kick") {
        client.moderateManager.kick({
            interaction: interaction || message,
            client: client,
            user: // The user to kick (GuildMember | User),
            staff: // The staff member who kicked the user (GuildMember | User),
            reason: // The reason for the kick (string),

            // Optional
            embed: {
                color: // The color of the embed (ColorResolvable),
                title: // The title of the embed (string),
                url: // The URL of the embed (string),
                author: {
                    name: // The name of the author (string),
                    icon_url: // The icon URL of the author (string),
                    url: // The URL of the author (string)
                },
                footer: {
                    text: // The text of the footer (string),
                    icon_url: // The icon URL of the footer (string)
                },
                description: // The description of the embed (string),
                fields: [
                   {
                       name: // The name of the field (string),
                       value: // The value of the field (string),
                       inline: // Whether the field is inline (boolean)
                   }
                   // You can add more fields
                 ],
                image: // The image of the embed (string),
                timestamp: // The timestamp of the embed (Date),
                thumbnail: // The thumbnail of the embed (string)
            },
            notifyUpdate: // Whether to notify the user that they were kicked (boolean)
        })
    };
});

client.login('Your bot Token');
```

</details>

<details><summary>👉 ESM (Module)</summary>

```ts
import { Client, GatewayIntentBits } from "discord.js";

import { ModerateManager } from "@m3rcena/weky";

export interface ExtendedClient extends Client {
    moderateManager: ModerateManager;
};

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
}) as ExtendedClient;

client.on("ready", async (cl) => {
    console.log("Bot is ready");
    client.moderateManager = new ModerateManager(cl); // Initialize Weky Manager
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.content === "w!kick") {
        client.moderateManager.kick({
            interaction: interaction || message,
            client: client,
            user: // The user to kick (GuildMember | User),
            staff: // The staff member who kicked the user (GuildMember | User),
            reason: // The reason for the kick (string),

            // Optional
            embed: {
                color: // The color of the embed (ColorResolvable),
                title: // The title of the embed (string),
                url: // The URL of the embed (string),
                author: {
                    name: // The name of the author (string),
                    icon_url: // The icon URL of the author (string),
                    url: // The URL of the author (string)
                },
                footer: {
                    text: // The text of the footer (string),
                    icon_url: // The icon URL of the footer (string)
                },
                description: // The description of the embed (string),
                fields: [
                   {
                       name: // The name of the field (string),
                       value: // The value of the field (string),
                       inline: // Whether the field is inline (boolean)
                   }
                   // You can add more fields
                 ],
                image: // The image of the embed (string),
                timestamp: // The timestamp of the embed (Date),
                thumbnail: // The thumbnail of the embed (string)
            },
            notifyUpdate: // Whether to notify the user that they were kicked (boolean)
        })
    };
});

client.login("Your bot token");
```

</details>

# Result 📤
<img src="./assets//kick.png">

# Contributing 🤝
- Contributions, issues and feature requests are welcome!
- Feel free to check [issues page](https://github.com/M3rcena/m3rcena-moderate/issues)

# Support ❔
<iframe src="https://discord.com/widget?id=1224358764463783987&theme=dark" width="350" height="350" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

# Developers 👨‍💻
<a href="https://discord.com/users/682983233851228161/"><img src="https://discord.c99.nl/widget/theme-3/682983233851228161.png" /></a>

# Contributors
