import { Arguments, Argv } from "yargs";
import { getHouseMaterials } from "../calculator/index";

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
            //Here we can insert our code for the command function

            getHouseMaterials(args.name);
        }
    );
}
