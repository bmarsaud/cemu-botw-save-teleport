const arg = require('arg');
const inquirer = require('inquirer');
const cemuBotwSaveTeleport = require('./main');

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--savePath': String,
            '--posX': Number,
            '--posY': Number,
            '--posZ': Number,
        },
        {
            argv: rawArgs.slice(2),
        }
    );

    return {
        savePath: args['--savePath'],
        posX: args['--posX'],
        posY: args['--posY'],
        posZ: args['--posZ'],
    };
}

async function promptMissingOptions(options) {
    let questions = [];

    if(!options.savePath) {
        questions.push({
            name: 'savePath',
            message: 'BOTW save file path to edit:'
        });
    }

    if(!options.posX) {
        questions.push({
            name: 'posX',
            message: 'Player X position:',
            type: 'number'
        });
    }

    if(!options.posX) {
        questions.push({
            name: 'posY',
            message: 'Player Y position:',
            type: 'number'
        });
    }

    if(!options.posZ) {
        questions.push({
            name: 'posZ',
            message: 'Player Z position:',
            type: 'number'
        });
    }

    let answers = await inquirer.prompt(questions);
    return {...options, ...answers};
}

async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    options = await promptMissingOptions(options);

    cemuBotwSaveTeleport(options);
}

module.exports = {
    cli: cli
}