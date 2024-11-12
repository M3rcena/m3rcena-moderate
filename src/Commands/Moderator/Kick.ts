import chalk from "chalk";
import Discord, { EmbedBuilder } from "discord.js";

import { checkPackageUpdates } from "../../libs/functions";
import { OptionsChecking } from "../../libs/OptionChecking";

import type { ChatInputCommandInteraction, Client, Message } from "discord.js";
import type { KickTypes } from '../../Types';
const Kick = async (options: KickTypes) => {
    // Check type
    OptionsChecking(options, "Kick");

    let interaction = options.interaction;

    if (!interaction) throw new Error(chalk.red("[@m3rcena/moderate] Kick Error:") + " No interaction provided.");

    let client: Client = options.client;

    if (!interaction.channel) throw new Error(chalk.red("[@m3rcena/weky] Kick Error:") + " No channel found on Interaction.");

    if (!interaction.channel.isSendable()) throw new Error(chalk.red("[@m3rcena/weky] Kick Error:") + " Channel is not sendable.");

    if (!interaction.guild) throw new Error(chalk.red("[@m3rcena/weky] Kick Error:") + " No guild found on Interaction.");

    try {
        let member = interaction.guild.members.cache.get(options.user.id);

        if (!member) {
            let embed = new EmbedBuilder()
                .setTitle("Kick Error")
                .setDescription("\`\`\`diff\n- User not found.\`\`\`")
                .setColor("Red");

            return interaction.reply({ embeds: [embed], ephemeral: true });
        };

        if (!member.kickable) {
            let embed = new EmbedBuilder()
                .setTitle("Kick Error")
                .setDescription("\`\`\`diff\n- I can't kick this user.\`\`\`")
                .setColor("Red");

            return interaction.reply({ embeds: [embed], ephemeral: true });
        };

        let reason = options.reason || "No reason provided.";

        let staff = interaction.guild.members.cache.get(options.staff.id);

        if (!staff) {
            let embed = new EmbedBuilder()
                .setTitle("Kick Error")
                .setDescription("\`\`\`diff\n- Staff not found.\`\`\`")
                .setColor("Red");

            return interaction.reply({ embeds: [embed], ephemeral: true });
        };

        let embed = new EmbedBuilder()
            .setTitle(options.embed?.title || "User Kicked")
            .setColor(options.embed?.color || "Red")
            .setFields([
                {
                    name: "User",
                    value: `${member.toString()} (${member.id})`,
                    inline: true
                },
                {
                    name: "Staff",
                    value: `${staff.toString()} (${staff.id})`,
                    inline: true
                },
                {
                    name: "Reason",
                    value: `\`\`\`${reason}\`\`\``
                },
                {
                    name: "Server",
                    value: `${interaction.guild.name} (${interaction.guild.id})`,
                }
            ])
            .setTimestamp(options.embed.timestamp || null)
            .setThumbnail(options.embed.thumbnail || null)
            .setImage(options.embed.image || null)
            .setFooter({
                text: "©️ M3rcena Development",
                iconURL: `https://raw.githubusercontent.com/M3rcena/m3rcena-weky/refs/heads/main/assets/logo.png`
            });

        if (options.embed.footer) {
            embed.setFooter({
                text: options.embed.footer.text,
                iconURL: options.embed.footer.icon_url || undefined
            });
        };

        if (options.embed.author) {
            embed.setAuthor({
                name: options.embed.author.name,
                iconURL: options.embed.author.icon_url || undefined,
                url: options.embed.author.url || undefined
            });
        };

        if (options.embed.fields) {
            embed.addFields(options.embed.fields);
        };

        let dmed = true;
        await member.send({
            embeds: [embed],
        }).catch(() => { 
            dmed = false;
        });

        await member.kick(reason).catch(async (error) => {
            let embed = new EmbedBuilder()
                .setTitle("Kick Error")
                .setDescription(`\`\`\`diff\n- ${error}\`\`\``)
                .setColor("Red");

            await interaction.reply({ embeds: [embed], ephemeral: true });
            return;
        });

        await interaction.reply({
            embeds: [embed],
            content: dmed ? `` : `User has been kicked. Couldn't DM the user.`
        }).catch(() => {});
    } catch (error) {
        throw new Error(chalk.red("[@m3rcena/weky] Kick Error:") + " " + error);
        return;
    }

    checkPackageUpdates("Kick", options.notifyUpdate);
};

export default Kick;