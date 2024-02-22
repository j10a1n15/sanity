//
// Written by J10a1n15.
// See LICENSE for copyright and license notices.
//


import { Events } from "discord.js";
import ExtendedClient from "../types/ExtendedClient";

export default async (client: ExtendedClient): Promise<void> => {
    client.on(Events.InteractionCreate, async (interaction) => {
        if (!interaction.isAutocomplete()) return;

        const cmd = client.commands.get(interaction.commandName) ?? null;

        if (!cmd) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {
            // Execute the command
            cmd.autocomplete(client, interaction);
        } catch (error) {
            console.error(error);
        }
    });
}