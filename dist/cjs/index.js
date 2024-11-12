"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerateManager = void 0;
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const discord_js_1 = tslib_1.__importDefault(require("discord.js"));
const Kick_1 = tslib_1.__importDefault(require("./Commands/Moderator/Kick.js"));
class ModerateManager {
    client;
    constructor(client) {
        if (!(client instanceof discord_js_1.default.Client))
            throw new SyntaxError(`${chalk_1.default.red("[ModerateManager]")} Invalid DiscordJS Client.`);
        this.client = client;
    }
    /**
     *
     * Kicks a user from the guild.
     *
     * @param options The options for the kick command.
     * @returns
     *
     * @returns
     *
     * @example
     * ```js
     * import { ModerateManager } from "weky";
     * import DiscordJS from "discord.js";
     *
     * const client = new DiscordJS.Client();
     *
     * const moderate = new ModerateManager(client);
     *
     * moderate.kick({
     *  interaction: interaction || message,
     *  client: client,
     *  user: // The user to kick (GuildMember | User),
     *  staff: // The staff member who kicked the user (GuildMember | User),
     *  reason: // The reason for the kick (string),
     *
     *  // Optional
     *  embed: {
     *      color: // The color of the embed (ColorResolvable),
     *      title: // The title of the embed (string),
     *      url: // The URL of the embed (string),
     *      author: {
     *          name: // The name of the author (string),
     *          icon_url: // The icon URL of the author (string),
     *          url: // The URL of the author (string)
     *      },
     *      footer: {
     *          text: // The text of the footer (string),
     *          icon_url: // The icon URL of the footer (string)
     *      },
     *      description: // The description of the embed (string),
     *      fields: [
     *         {
     *             name: // The name of the field (string),
     *             value: // The value of the field (string),
     *             inline: // Whether the field is inline (boolean)
     *         }
     *         // You can add more fields
     *       ],
     *      image: // The image of the embed (string),
     *      timestamp: // The timestamp of the embed (Date),
     *      thumbnail: // The thumbnail of the embed (string)
     *  },
     *  notifyUpdate: // Whether to notify the user that they were kicked (boolean)
     * );
     * ```
     *
     * @copyright All rights reserved. M3rcena Development
     */
    async kick(options) {
        return await (0, Kick_1.default)(options);
    }
    ;
}
exports.ModerateManager = ModerateManager;
;
