import Discord from 'discord.js';
import { Chalk } from 'chalk';

export default async (options) => {

    /**
     * @param {options.message} - Discord Message
     * @param {options.interaction} - Discord Interaction
     * 
     * @param {options.guildUser} - Discord Guild Member
     * 
     * @param {options.embed} - Discord Embed
     * @param {options.embed.title} - Embed Title
     * @param {options.embed.color} - Embed Color
     * @param {options.embed.description} - Embed Description
     * @param {options.embed.footer} - Embed Footer
     * @param {options.embed.timestamp} - Embed Timestamp
     * @param {options.embed.url} - Embed URL
     * @param {options.embed.author} - Embed Author
     * @param {options.embed.author.name} - Embed Author Name
     * @param {options.embed.author.icon} - Embed Author Icon
     * @param {options.embed.author.url} - Embed Author URL
     * @param {options.embed.thumbnail} - Embed Thumbnail
     * @param {options.embed.fields} - Embed Fields
     * @param {options.embed.image} - Embed Image
     */
    if (!options.message && !options.interaction) {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} Please specify atleast one of the following arguments: message, interaction.`)
    };

    let interaction;
    if (!options.message) {
        if (typeof options.interaction !== 'object') {
            throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} interaction argument must be an object.`)
        }
        interaction = options.interaction;
    } else if (!options.interaction) {
        if (typeof options.message !== 'object') {
            throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} message argument must be an object.`)
        }
        interaction = options.message;
    }

    if (!options.embed) options.embed = {};
    if (typeof options.embed !== 'object') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed argument must be an object.`)
    }

    // Embed Title
    if (!options.embed.title) {
        options.embed.title = 'User Ban';
    }
    if (typeof options.embed.title !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed title must be a string.`)
    }

    // Embed Color
    if (!options.embed.color) {
        options.embed.color = "FF0000"
    }
    if (typeof options.embed.color !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed color must be a string.`)
    }

    // Embed Description
    if (!options.embed.description) {
        options.embed.description = 'User has been kicked from the server.';
    }
    if (typeof options.embed.description !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed description must be a string.`)
    }

    // Embed Footer
    if (!options.embed.footer) options.embed.footer = {};
    if (typeof options.embed.footer !== 'object') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed footer must be an object.`)
    }

    if (!options.embed.footer.text) {
        options.embed.footer.text = '©️ M3rcena Development';
    }

    if (typeof options.embed.footer.text !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed footer text must be a string.`)
    }

    if (!options.embed.footer.icon) {
        options.embed.footer.icon = 'https://cdn.discordapp.com/avatars/1068868597398650971/8a357794253da9e32704b4711a0b366b.png';
    }

    if (typeof options.embed.footer.icon !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed footer icon must be a string.`)
    }

    // Embed Timestamp
    if (!options.embed.timestamp) {
        options.embed.timestamp = true;
    }
    if (typeof options.embed.timestamp !== 'boolean') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed timestamp must be a boolean.`)
    }

    // Embed URL
    if (!options.embed.url) {
        options.embed.timestamp = 'https://discord.gg/Wp54QUTgBV';
    }
    if (typeof options.embed.url !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed url must be a string.`)
    }

    // Embed Author
    if (!options.embed.author) options.embed.author = {};
    if (typeof options.embed.author !== 'object') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed author must be an object.`)
    }

    // Embed Author Name
    if (!options.embed.author.name) {
        options.embed.author.name = options.message.author.username;
    }
    if (typeof options.embed.author.name !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed author name must be a string.`)
    }

    // Embed Author Icon
    if (!options.embed.author.icon) {
        options.embed.author.icon = options.message.author.displayAvatarURL();
    }
    if (typeof options.embed.author.icon !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed author icon must be a string.`)
    }

    // Embed Author URL
    if (!options.embed.author.url) {
        options.embed.author.url = options.embed.url ? options.embed.url : 'https://discord.gg/Wp54QUTgBV';
    }
    if (typeof options.embed.author.url !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed author url must be a string.`)
    }

    // Embed Thumbnail
    if (!options.embed.thumbnail) {
        options.embed.thumbnail = 'https://cdn.discordapp.com/avatars/1068868597398650971/8a357794253da9e32704b4711a0b366b.png'
    }
    if (typeof options.embed.thumbnail !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed thumbnail must be a string.`)
    }

    // Embed Fields
    if (!options.embed.fields) options.embed.fields = [];
    if (!Array.isArray(options.embed.fields)) {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed fields must be an array.`)
    }

    // Embed Image
    if (!options.embed.image) {
        options.embed.image = 'https://cdn.discordapp.com/avatars/1068868597398650971/8a357794253da9e32704b4711a0b366b.png'
    }
    if (typeof options.embed.image !== 'string') {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} embed image must be a string.`)
    }

    // Function
    try {
        const guild = interaction.client.guilds.fetch(interaction.guild.id);
        const user = guild.members.cache.get(options.guildUser);

        if (!user) {
            throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} User not found in the server.`);
        }

        const embed = new Discord.EmbedBuilder()
            .setColor(options.embed.color)
            .setTitle(options.embed.title)
            .setURL(options.embed.url)
            .setAuthor({
                name: options.embed.author.name, 
                iconURL: options.embed.author.icon, 
                url: options.embed.author.url
            })
            .setDescription(options.embed.description)
            .setThumbnail(options.embed.thumbnail)
            .setFooter({
                text: options.embed.footer.text,
                iconURL: options.embed.footer.icon
            })
            .setTimestamp(options.embed.timestamp)
            .setImage(options.embed.image);

        for (const field of options.embed.fields) {
            const embedField = {
                name: field.name || "No Name Provided",
                value: field.value || "No Value Provided",
                inline: field.inline || false
            };
            embed.addFields(embedField);
        };

        user.send({ embeds: [embed] }).catch(() => {
            interaction.reply({ content: `I was unable to send a message to <@${user.id}>.`, ephemeral: true });
        })
        user.kick().catch(() => {
            interaction.reply({ content: `I was unable to kick <@${user.id}>. Please notify the Developer.`, ephemeral: true });
        });
    } catch (error) {
        throw new Error(`${Chalk.red('[@M3rcena/Moderate]:')} ${error}`)
    }
}