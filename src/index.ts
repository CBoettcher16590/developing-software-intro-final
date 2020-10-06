import yargs = require('yargs');
import { calcHouseMaterialsCommand } from './commands/calcHouseMaterials';
import { getHouseMaterialsCommand } from './commands/getHouseMaterials';

calcHouseMaterialsCommand( yargs );

getHouseMaterialsCommand( yargs );

//tells yargs to include the --help flag
yargs.help();

//tells yargs to parse the parameters
yargs.parse();