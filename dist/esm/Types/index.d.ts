import { ChatInputCommandInteraction, Client, ColorResolvable, Guild, GuildMember, Message, User } from "discord.js";
export interface KickTypes {
    interaction: ChatInputCommandInteraction | Message;
    client: Client;
    embed?: {
        color?: ColorResolvable;
        title?: string;
        url?: string;
        author?: {
            name: string;
            icon_url?: string;
            url?: string;
        };
        footer?: {
            text: string;
            icon_url?: string;
        };
        description?: string;
        fields?: Fields[];
        image?: string;
        timestamp?: Date;
        thumbnail?: string;
    };
    user: GuildMember | User;
    staff: GuildMember | User;
    guild: Guild;
    reason: string;
    notifyUpdate?: boolean;
}
export interface Fields {
    name: string;
    value: string;
    inline?: boolean;
}
