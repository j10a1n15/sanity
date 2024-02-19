//
// Written by J10a1n15.
// See LICENSE for copyright and license notices.
//


import { Client } from 'discord.js';

interface ExtendedClient extends Client {
    commands?: any;
}

export default ExtendedClient;
