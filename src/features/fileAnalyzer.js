//
// Written by J10a1n15.
// See LICENSE for copyright and license notices.
//

const SystemUtils = require("../utils/SystemUtils");
const ModsData = require("../data/mods");

exports.analyzeFile = async function analyzeFile(message) {
    const mods = await ModsData.getModsJson()

    const url = message.attachments.values().next().value?.attachment?.split("?")[0];
    if (url && !url?.endsWith(".txt")) return;

    const codeBlock = message.content.match(/```json[\s\S]*```/)?.[0];

    let content;

    if (url){
        const contentRaw = new TextDecoder("utf-8").decode(await SystemUtils.downloadFileInMemory(url)).replace("```json", "").replace("```", "");

        content = JSON.parse("{" + contentRaw.trim().slice(0, -1) + "}");
    }
    else if (codeBlock) {
        const contentRaw = codeBlock.replace("```json", "").replace("```", "");

        content = JSON.parse("{" + contentRaw.trim().slice(0, -1) + "}");
    }
    else {
        return;
    }

    if (!content) return;

    if (!"name" in content && !"download" in content) return;

    let desc;

    for (const key in content) {
        const mod = content[key];
        if (!mod) continue;
        // find mod in mods.json
        const modFromRepo = mods.find(m => m.name.includes(mod.name));

        //check mods[key].version is the same or older than mod.version
        console.log(SystemUtils.compareVersions(modFromRepo.versions[modFromRepo.versions.length - 1], mod.version[0]) <= 0);
    }
}