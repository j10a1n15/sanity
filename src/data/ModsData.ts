//
// Written by Su386.
// See LICENSE for copyright and license notices.
//

import * as SystemUtils from '../utils/SystemUtils';

const owner = process.env.OWNER || "PartlySaneStudios";
const repo = process.env.REPO || "partly-sane-skies-public-data";
const path = 'data/mods.json';

// Returns an object with json and sha keys
export async function getModsData(): Promise<{ json: any, sha: string }> {
    const data = await SystemUtils.getData(path, owner, repo);

    const sha = data.sha;

    // Decode the content from Base64 to UTF-8
    const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8');

    // Parse the JSON string to a JavaScript object
    const jsonData = JSON.parse(decodedContent);

    return { json: jsonData, sha: sha };
}

export async function getData(): Promise<any> {
    const data = await SystemUtils.getData(path, owner, repo);

    // Decode the content from Base64 to UTF-8
    const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8');

    // Parse the JSON string to a JavaScript object
    const jsonData = JSON.parse(decodedContent);

    return jsonData;
};


export async function getSHA(): Promise<string> {
    const data = await SystemUtils.getData(path, owner, repo);

    // Extract the SHA value from the response
    return data.sha;
}
