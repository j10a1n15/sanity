//
// Written by Su386 and J10a1n15.
// See LICENSE for copyright and license notices.
//


import fs from "fs";
import ExtendedClient from "../types/ExtendedClient";
import { pluralize } from "../utils/StringUtils";

export default async (client: ExtendedClient): Promise<void> => {
    fs.readdir("src/events", (err, files) => {
        if (err || files.length <= 0) return console.error(err || "No events found.");

        files.forEach((file) => (file.endsWith(".js") && file !== "loader.js") && require(`./${file}`)(client));
    });


    const path = "src/commands";

    fs.readdir(path, (err, files) => {
        let commandsAdded = 0
        if (err) return console.error(err);
        if (files.length <= 0) return console.log(`No slash commands found in ${path}.`);

        for (let fileName of files) {
            const fullFilePath = `${path}/${fileName}`

            // If the file is not a .js file, pass
            // if yes, smash
            if (fileName.split(".").pop() != "js") {
                continue
            }

            let command = require(`../../${fullFilePath}`);
            // Set a new command in the Collection
            client.commands.set(command.data.name, command);

            for (let id of require("../config/config.json").guilds) {
                /*
                 * Creating them globally is not best, as it takes a really long time for them to update
                */
                client.guilds.cache.get(id)?.commands.create(command.data.toJSON());

            }

            commandsAdded++
        }

        const guildSize = require("../config/config.json").guilds.length

        console.log(`Added ${pluralize(commandsAdded, "command")} total to ${pluralize(guildSize, "server")}.`)

        console.log("\x1b[42m%s\x1b[0m", "Ready.");
    })
}