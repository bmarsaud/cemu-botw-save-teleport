# cemu-botw-save-teleport

An utility modifying a [Cemu](https://cemu.info/) save file of the game "The Legend of Zelda: Breath of the Wild" by changing the player position to a user defined one.

This script uses the logic of [savegame-editors](https://github.com/marcrobledo/savegame-editors) project to load and edit the game save.

## Why ?
It can be used as a workaround if your game is stuck on the loading screen at a certain location.

Changing the player location of the game save will let the game load. Once loaded you can go back to your previous location.

## Download

### Simple download
If you are not familiar with "dev things" you can download the (heavy) executable in the [release](https://github.com/bmarsaud/cemu-botw-save-teleport/releases) section.

Once downloaded you can either double click on it if you don't want to use any options or launch it from a terminal.

### Familiar with "dev things"
This utility is a CLI Node.js script, you can launch it using the following commands :

```
git clone https://github.com/bmarsaud/cemu-botw-save-teleport
cd cemu-botw-save-teleport
npm install
npm link
./cemu-botw-save-teleport
```

## Usage
cemu-botw-save-teleport is available with the following options :

|Option|Description|
|---|---|
|`--posX`|Player X position|
|`--posY`|Player Y position|
|`--posZ`|Player Z position|
|`--savePath`|To edit a particular save file. The path to the save file.|
|`--dirPath`|To edit the most recent save. The path to the directory containing the `0, 1, 2, 3, 4, 5` save folders|
|`--promptSaves`|When used with `--dirPath`, ask the user which save to edit among the save list|

If needed options are missing, it will be asked in the command line.

## Useful coordinates
You can find a list of useful coordinates in this [reddit topic](https://www.reddit.com/r/breathofthewow/comments/7ru6u9/heres_a_useful_teleport_list/).