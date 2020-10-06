import yargs = require('yargs');
import { calcHouseMaterials } from './commands/calcHouseMaterials';

calcHouseMaterials( yargs );



//tells yargs to include the --help flag
yargs.help();

//tells yargs to parse the parameters
yargs.parse();