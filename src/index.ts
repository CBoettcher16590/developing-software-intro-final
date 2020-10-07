import yargs = require('yargs');
import { calcHouseMaterialsCommand } from './commands/calcHouseMaterials';
import { getHouseMaterialsCommand } from './commands/getHouseMaterials';
import { calcWallLumber, calcDrywall } from './calculator/index';

calcHouseMaterialsCommand( yargs );

getHouseMaterialsCommand( yargs );

//used to check outputs to make sure everything was working proper
// console.log(calcWallLumber(96));
// console.log(calcDrywall(96, 96));


//tells yargs to include the --help flag
yargs.help();

//tells yargs to parse the parameters
yargs.parse();