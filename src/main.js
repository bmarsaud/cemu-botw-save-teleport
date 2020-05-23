const SaveEditor = require('./save-editor');
const saveChoser = require('./save-choser');

function cemuBotwSaveTeleport(options) {
    if(options.saveDir) {
        options.savePath = saveChoser.getMostRecentSave(options.saveDir);
    }

    let saveEditor = new SaveEditor(options.savePath);

    let pos = saveEditor.getPosition();
    console.log('Previous position :');
    console.log('\tX:', pos[0]);
    console.log('\tY:', pos[1]);
    console.log('\tZ:', pos[2], '\n');

    saveEditor.setPosition(options.posX, options.posY, options.posZ);

    console.log('New position written :');
    console.log('\tX:', options.posX);
    console.log('\tY:', options.posY);
    console.log('\tZ:', options.posZ, '\n');

    saveEditor.save();
}

module.exports = cemuBotwSaveTeleport;