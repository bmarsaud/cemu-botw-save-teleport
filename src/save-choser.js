const path = require('path');
const fs = require('fs');

const SAVE_FILENAME = 'game_data.sav';
const SAVE_CAPTION = 'caption.jpg';

function getMostRecentSave(saveDir) {
    let mostRecentPath = '';
    let mostRecentDate = 0;

    for(let i = 0; i <= 5; i++) {
        let filePath = path.join(saveDir, i.toString(), SAVE_FILENAME);
        let fileStats = fs.statSync(filePath);
        let editionTime = fileStats.mtime;

        if(editionTime > mostRecentDate) {
            mostRecentDate = editionTime;
            mostRecentPath = filePath;
        }
    }

    return mostRecentPath;
}

function getSavesInfo(saveDir) {
    let saves = [];

    for(let i = 0; i <= 5; i++) {
        let filePath = path.join(saveDir, i.toString(), SAVE_CAPTION);
        let fileStats = fs.statSync(filePath);
        let editionTime = fileStats.mtime;

        saves.push({
            id: i,
            date: editionTime,
            path: path.join(saveDir, i.toString(),SAVE_FILENAME)
        })
    }

    return saves;
}

module.exports = {
    getMostRecentSave: getMostRecentSave,
    getSavesInfo: getSavesInfo
}