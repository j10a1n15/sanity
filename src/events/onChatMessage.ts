//
// Written by J10a1n15.
// See LICENSE for copyright and license notices.
//


import { ChannelType, Events } from "discord.js";
import ExtendedClient from "../types/ExtendedClient";

export default async (client: ExtendedClient): Promise<void> => {
    client.on(Events.MessageCreate, async (message) => {
        if (message.author.bot) return;
        if (message.channel.type === ChannelType.DM) return;


    });
};