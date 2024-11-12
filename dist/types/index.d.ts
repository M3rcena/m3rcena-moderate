import DiscordJS from "discord.js";
import type { KickTypes } from "./Types";
export declare class ModerateManager {
    private client;
    constructor(client: DiscordJS.Client);
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
    kick(options: KickTypes): Promise<DiscordJS.InteractionResponse<boolean> | DiscordJS.OmitPartialGroupDMChannel<DiscordJS.Message<boolean>>>;
}
