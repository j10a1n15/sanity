//
// Written by J10a1n15.
// See LICENSE for copyright and license notices.
//


const { Events } = require('discord.js');
const fileAnalyzer = require('../features/fileAnalyzer');

module.exports = async (client) => {
    client.on(Events.MessageCreate, async (message) => {
        if (message.author.bot) return;
        if (message.channel.type === 'DM') return;


        fileAnalyzer.analyzeFile(message);
    });
}