//
// Written by J10a1n15.
// See LICENSE for copyright and license notices.
//


import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import ExtendedClient from "../types/ExtendedClient";

export default {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Shows the bot's ping."),
    async run(client: ExtendedClient, interaction: ChatInputCommandInteraction) {
        await interaction.reply(`Pong! ${client.ws.ping}ms.`);
    }
}
