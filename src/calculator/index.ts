import IHouseOutput from "../calculator/interfaces";

//constants declaired
const BEAM_WIDTH = 3.5;
const BOARD_LENGTH = 8 * 12;
const STUDS_OFFSET = 16;
const BEAMS_REQUIRED_EVERY_INCHES = 20 * 12;

const drywall = { width: 48, length: 96, area: 4608 };
const plywood = { width: 48, length: 96 };

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

export function calcWallLumber(inches: number) {
    const plates = getPlates(inches);
    const studs = getStuds(inches);
    //getRequiredBeams only checks to see if we need EXTRA posts so under 20' we will expect a 0;
    const posts = getRequiredBeams(inches);

    return {
        plates: plates,
        studs: studs,
        posts: posts,
    };
}

export function calcDrywall(width: number, length: number): number {
    //Drywall is 4*8ft... Walls are 8' high, we can place drywall vertically.
    const ceilingArea: number = width * length;
    //Use Math.ceil because we cant buy partial drywall sheets
    //We are rounding at the end to minimize waste
    const drywallSheetsInWidth: number = Math.ceil((width / drywall.width) * 2);
    const drywallSheetsInLength: number = Math.ceil(
        (length / drywall.width) * 2
    );
    const drywallSheetsInCeiling: number = Math.ceil(
        ceilingArea / drywall.area
    );

    const drywallSheets =
        drywallSheetsInWidth + drywallSheetsInLength + drywallSheetsInCeiling;

    return drywallSheets;
}

export function calcPlywood(width: number, length: number): number {
    //Plywood is 4*8ft... Walls are 8' high, we can place plywood vertically.
    const plywoodSheetsInWidth: number = Math.ceil((width / plywood.width) * 2);
    const plywoodSheetsInLength: number = Math.ceil(
        (length / plywood.width) * 2
    );
    const plywoodSheetsTotal = plywoodSheetsInWidth + plywoodSheetsInLength;

    return plywoodSheetsTotal;
}

export function calcMaterials(
    width: number,
    length: number,
    calcWallLumber: any,
    calcDrywall: any,
    calcPlywood: any
): IHouseOutput {
    const lumberInWidth = calcWallLumber(width);
    const lumberInLength = calcWallLumber(length);

    const totalBoards = lumberInLength.studs * 2 + lumberInWidth.studs * 2;
    let totalPosts = lumberInLength.posts + lumberInWidth.posts;
    const drywall = calcDrywall(width, length);
    const plywood = calcPlywood(width, length);

    //Checks to see if there are EXTRA posts needed, if not, then it adds the 4 corner posts
    if (totalPosts === 0) {
        totalPosts = 4;
    }

    return {
        name: "placeholder",
        house: {
            width: width,
            length: length,
            outsideWallArea: length * width * 4,
            insideWallArea: length * width * 4 - totalPosts * 7,
            ceilingArea: length * width,
        },

        materials: {
            lumber: {
                boards: totalBoards,
                posts: totalPosts,
            },

            plywood: plywood,

            drywall: drywall,
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

//This function will check to see if we need to add an extra beam(a wall over 20ft needs an extra beam)
function getWallLengthOverMinimumRequiredBeforeBeam(inches: number): number {
    return Math.max(inches - BEAMS_REQUIRED_EVERY_INCHES, 0);
}

//This function will get the plates in any given one wall
function getPlates(inches: number) {
    // devide the length by 96 inches (8 feet) and round up
    // multiply by THREE because we're doing the 2 rows of top plates,
    //   and 1 row of bottom plates
    return Math.ceil(inches / BOARD_LENGTH) * 3;
}

//This function will get the studs in any given one wall
function getStuds(inches: number) {
    // calculate the studs across
    // round up to account for the last one
    const studs = Math.ceil(inches / STUDS_OFFSET);

    // make sure we add an end piece if we have a perfect multiple of 16
    const isNotPerfectWidth = Math.min(inches % STUDS_OFFSET, 1);
    const perfectWidthExtension = isNotPerfectWidth * -1 + 1;
    return studs + perfectWidthExtension;
}

//This function will get the EXTRA posts in any given one wall.
//Does not include the 4 that we will deffinatly need.
function getRequiredBeams(inches: number) {
    // for every 20 feet, we need one beam
    // we know our wall is at least 20 feet, so calculate the required beams for the REST of the wall
    // if our wall is under 20 feet, this will return zero
    const wallLengthOverMinRequired = getWallLengthOverMinimumRequiredBeforeBeam(
        inches
    );
    const wallLengthPlusBeam = BEAMS_REQUIRED_EVERY_INCHES + BEAM_WIDTH;
    const requiredBeams = Math.ceil(
        wallLengthOverMinRequired / wallLengthPlusBeam
    );

    return requiredBeams;
}
