import yargs = require('yargs');
import { calcHouseMaterials } from './commands/calcHouseMaterials';
import { getHouseMaterials } from './commands/getHouseMaterials';

calcHouseMaterials( yargs );

getHouseMaterials( yargs );

//tells yargs to include the --help flag
yargs.help();

//tells yargs to parse the parameters
yargs.parse();