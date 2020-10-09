import { Arguments, Argv } from "yargs";
import { calcHouseMaterials } from "../calculator/index";
import IHouseOutput from "../calculator/interfaces";
import { Houses } from "../house/houses";
const fs = require('fs');

export function calcHouseMaterialsCommand(yargs: Argv): void {
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
                description: "The width of the house",
            },
            length: {
                type: "number",
                alias: "l",
                description: "The length of the house",
            },
            //note: isFeet has no alias and we must use "--isFeet"
            isFeet: {
                type: "boolean",
                description: "The width of the house",
            },
            name: {
                type: "string",
                alias: "n",
                description:
                    "The name given to the house. Used to save and lookup houses",
            },
        },
        //Arguments passed into the function
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
            
            const house:IHouseOutput = calcHouseMaterials(
                    args.name,
                    args.width,
                    args.length,
                    args.isFeet
                )

        
                //Here we are able to save the house that we have entered
                Houses.save(house);
                //Then we print a log that confirms the save;
                console.log("Saved: " + house.name)
                //console.log the house
                console.log(house);
            
                    

        }
    );
}
