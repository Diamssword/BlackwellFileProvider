import { hideBin } from 'yargs/helpers'
import yargs from 'yargs/yargs'
import {initCommand,generateCommand,validateCommand,latestForgeCommand,recommendedForgeCommand,testCommand} from './helios.js'
yargs(hideBin(process.argv))
    .version(false)
    .scriptName('')
    .command(initCommand)
    .command(generateCommand)
    .command(validateCommand)
    .command(latestForgeCommand)
    .command(recommendedForgeCommand)
    .command(testCommand)
    .demandCommand()
    .help()
    .argv
