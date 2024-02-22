//
// Written by J10a1n15.
// See LICENSE for copyright and license notices.
//


import { ActivityType, PresenceStatusData } from "discord.js";
import ExtendedClient from "../types/ExtendedClient";
import config from "../config/config.json";

export default async (client: ExtendedClient): Promise<void> => {
    setInterval(() => {
        const text = config.status.text;
        const type = translateActivityType(config.status.type);
        const status = translateStatus(config.status.status);
        if (client.user === null) return;

        if (config.status.active == true) {
            client.user.setActivity(text, { type: type });
        } else {
            client.user.setActivity();
        }
        client.user.setStatus(status);
    }, 3 * 1000)
};

function translateStatus(status: string): PresenceStatusData {
    switch (status) {
        case "online":
            return "online";
        case "idle":
            return "idle";
        case "dnd":
            return "dnd";
        case "invisible":
            return "invisible";
        default:
            return "online";
    }
}

function translateActivityType(type: string): ActivityType {
    switch (type) {
        case "PLAYING":
            return ActivityType.Playing;
        case "STREAMING":
            return ActivityType.Streaming;
        case "LISTENING":
            return ActivityType.Listening;
        case "WATCHING":
            return ActivityType.Watching;
        case "COMPETING":
            return ActivityType.Competing;
        default:
            return ActivityType.Playing;
    }
}