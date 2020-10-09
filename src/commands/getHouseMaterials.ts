import { Arguments, Argv } from "yargs";
const fs = require('fs');

export function getHouseMaterialsCommand(yargs: Argv): void {
    yargs.command(
        // Creates a new yargs command
        "get-house-materials",

        //Describes the new yargs command
        "Gets the materials needed for a specific house that has been saved",

        //Defines the parameters we need for the command
        {
            name: {
                type: "string",
                alias: "n",
                description: "The name of the saved house",
            },
        },

        function (
            args: Arguments<{
                name: string;
                n: string;
            }>
        ) {
            //Here we are able to look up the house, and we use the args name to make sure we are getting the correct house. 
            let jsonData = require(`../../dist/data/${args.name}.json`);
            console.log(jsonData);
           
        }
    );
}
