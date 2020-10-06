import { Arguments, Argv } from "yargs";

export function calcHouseMaterials( yargs:Argv ):void {

    yargs.command(
        // Creates a new yargs command
        "calc-house-materials",

        //Describes the new yargs command
        "Calculate the materials needed for a specific house",

        //Defines the parameters we need for the command
        {
            width: {
                type: "number",
                alias: "w",
                description: "The width of the house"
            },
            length: {
                type: "number",
                alias: "l",
                description: "The length of the house"
            },
            //note: isFeet has no alias and we must use "isFeet"
            isFeet: {
                type: "boolean",
                description: "The width of the house"
            },
            name: {
                type: "string",
                alias: "n",
                description: "The name given to the house. Used to save and lookup houses"
            }
        },

        function (
            args: Arguments<{
                width: number;
                length: number;
                w: number;
                l: number;
                isFeet: boolean;
                name: string;
                n: string;
            }>
        ) {
        //Here we can insert our code for the command function   
        
            console.log("The parameters passed in are as follows");
            console.log("Length: " + args.length + ", Width: " + args.width + ", IsFeet: " + args.isFeet + ", Name: " + args.name);
        }

    );

}