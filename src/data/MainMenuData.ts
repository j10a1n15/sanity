//
// Written by Su386 & J10a1n15.
// See LICENSE for copyright and license notices.
//


import * as SystemUtils from '../utils/SystemUtils';

const owner = process.env.OWNER || "PartlySaneStudios";
const repo = process.env.REPO || "partly-sane-skies-public-data";
const path = 'data/main_menu.json';

/**
 * Get the main menu data from the repository
 */
export async function getMainMenuData(): Promise<{ json: any, sha: string }> {
    const data = await SystemUtils.getData(path, owner, repo);

    // Decode the content from Base64 to UTF-8
    const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8');

    // Parse the JSON string to a JavaScript object
    const jsonData = JSON.parse(decodedContent);

    return { json: jsonData, sha: data.sha }
}

export async function getAnnouncements(): Promise<any> {
    const response = await this.getMainMenuJson()

    return response.announcements
}

export async function getVersion(): Promise<any> {
    const response = await this.getMainMenuJson()

    return response.mod_info;
}

export async function getBetaVersion(): Promise<any> {
    const response = await this.getMainMenuJson()

    return response.prerelease_channel;
}

export async function getData(): Promise<any> {
    const data = await SystemUtils.getData(path, owner, repo);

    // Decode the content from Base64 to UTF-8
    const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8');

    // Parse the JSON string to a JavaScript object
    return JSON.parse(decodedContent);
};


export async function getSHA(): Promise<string> {
    const data = await SystemUtils.getData(path, owner, repo);

    // Extract the SHA value from the response
    return data.sha;
}
