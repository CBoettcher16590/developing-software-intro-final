import { Arguments, argv, Argv } from "yargs";
import IHouseOutput from "../calculator/interfaces";

export function calcHouseMaterials(
    name: string,
    width: number,
    length: number,
    units: boolean
): IHouseOutput {
    //Output as outlined by Gerald in instructions
    return {
        name: name,
        house: {
            width: width,
            length: length,
            outsideWallArea: 0,
            insideWallArea: 0,
            ceilingArea: 0,
        },

        materials: {
            lumber: {
                boards: 0,
                posts: 0,
            },

            plywood: 0,

            drywall: 0,
        },

        waste: {
            lumber: {
                boards: 0,
                posts: 0,
            },

            plywood: 0,

            drywall: 0,
        },

        purchase: {
            lumber: {
                boards: 0,
                posts: 0,
            },

            plywood: 0,

            drywall: 0,
        },
    };
}

export function getHouseMaterials(name: string): IHouseOutput {
    //Output as outlined by Gerald in instructions
    return {
        name: name,
        house: {
            width: 0,
            length: 0,
            outsideWallArea: 0,
            insideWallArea: 0,
            ceilingArea: 0,
        },

        materials: {
            lumber: {
                boards: 0,
                posts: 0,
            },

            plywood: 0,

            drywall: 0,
        },

        waste: {
            lumber: {
                boards: 0,
                posts: 0,
            },

            plywood: 0,

            drywall: 0,
        },

        purchase: {
            lumber: {
                boards: 0,
                posts: 0,
            },

            plywood: 0,

            drywall: 0,
        },
    };
}
