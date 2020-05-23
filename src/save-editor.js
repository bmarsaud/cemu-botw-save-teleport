var fs = require('fs');

const HASHES =[
    0x0bee9e46, 'MAP',
    0x0cbf052a, 'FLAGS_BOW',
    0x1e3fd294, 'FLAGSV_BOW',
    0x23149bf8, 'RUPEES',
    0x2906f327, 'MAX_HEARTS',
    0x333aa6e5, 'HORSE_SADDLES',
    0x3adff047, 'MAX_STAMINA',
    0x441b7231, 'DEFEATED_MOLDUGA_COUNTER',
    0x54679940, 'DEFEATED_HINOX_COUNTER',
    0x57ee221d, 'FLAGS_WEAPON',
    0x5f283289, 'ITEMS',
    0x6150c6be, 'HORSE_REINS',
    0x698266be, 'DEFEATED_TALUS_COUNTER',
    0x69f17e8a, 'FLAGSV_SHIELD',
    0x6a09fc59, 'ITEMS_QUANTITY',
    0x73c29681, 'PLAYTIME',
    0x7b74e117, 'HORSE_NAMES',
    0x8a94e07a, 'KOROK_SEED_COUNTER',
    0x9383490e, 'MapApp_MapIconNo',
    0x97f925c3, 'RELIC_GERUDO',
    0x982ba201, 'HORSE_POSITION',
    0x9c6cfd3f, 'HORSE_MANES',
    0xa40ba103, 'PLAYER_POSITION',
    0xa6d926bc, 'FLAGSV_WEAPON',
    0xc247b696, 'HORSE_TYPES',
    0xc5238d2b, 'FLAGS_SHIELD',
    0xc9328299, 'MOTORCYCLE', /* IsGet_Obj_Motorcycle */
    0xce7afed3, 'MONS',
    0xd913b769, 'MAPTYPE',
    0xe1a0ca54, 'HORSE_BONDS', /* max=0x3f80 */
    0xea9def3f, 'MapApp_MapIconPos',
    0xf1cf4807, 'RELIC_GORON',
    0xfda0cde4, 'RELIC_RITO'
];

class SaveEditor {
    filePath = {};
    fileBuffer = {};
    
    offsets = {};
    headers = {};

    constructor(filePath) {
        this.filePath = filePath;
        this.loadSave();
    }

    loadSave() {
        this.fileBuffer = fs.readFileSync(this.filePath);
        this.loadOffsets();
    }

    loadOffsets() {
		var startSearchOffset = 0x0c;
		for(let i = 0; i < HASHES.length; i += 2){
			for(let j = startSearchOffset; j < this.fileBuffer.length; j += 8){
				if(HASHES[i] === this.fileBuffer.readUInt32BE(j)){
					this.offsets[HASHES[i + 1]] = j + 4;
					this.headers[HASHES[i + 1]] = HASHES[i];
					startSearchOffset = j + 8;
					break;
				}
			}
		}
    }

    /**
     * Get the user position
     */
    getPosition() {
        let x = this.fileBuffer.readFloatBE(this.offsets.PLAYER_POSITION);
        let y = this.fileBuffer.readFloatBE(this.offsets.PLAYER_POSITION + 8);
        let z = this.fileBuffer.readFloatBE(this.offsets.PLAYER_POSITION + 16);

        return [x, y, z];
    }

    /**
     * Set the player position
     * @param {number} x The X user position
     * @param {number} y The Y user position
     * @param {number} z The Z user position
     */
    setPosition(x, y, z) {
        this.fileBuffer.writeFloatBE(x, this.offsets.PLAYER_POSITION);
        this.fileBuffer.writeFloatBE(y, this.offsets.PLAYER_POSITION + 8);
        this.fileBuffer.writeFloatBE(z, this.offsets.PLAYER_POSITION + 16);
    }
}

module.exports = SaveEditor;