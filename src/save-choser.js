const path = require('path');
const fs = require('fs');

const SAVE_FILENAME = 'game_data.sav'

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

module.exports = {
    getMostRecentSave: getMostRecentSave
}