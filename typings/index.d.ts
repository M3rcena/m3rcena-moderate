import { Guild, GuildMember, Message, User } from 'discord.js';

interface Kick {
    message: Message;
    embed?: {
        title?: string;
        description?: string;
        footer?: string;
        color?: string;
        url?: string;
        author?: {
            name?: string;
            url?: string;
            icon_url?: string;
        };
        thumbnail?: string;
        fields?: {
            name: string;
            value: string;
        };
        image?: string;
        timestamp?: boolean;
    };
    user: GuildMember;
    staff: User;
    guild: Guild;
}