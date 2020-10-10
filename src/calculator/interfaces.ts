// // option 1
// export interface IHouseMaterials {
//     lumber: {
//         boards:number;
//         posts:number;
//     };

//     plywood: number;

//     drywall: number;
// }

// export interface IHouseOutput extends IHouseMaterials {
//     name: string;
//     house: {
//         width: number;
//         length: number;
//         outsideWallArea: number;
//         insideWallArea: number;
//         ceilingArea: number
//     };

//     materials:IHouseMaterials;

//     waste:IHouseMaterials;

//     purchase:IHouseMaterials;
// }

//Decided to go with option two as instructions seemed to indicated one interface.
//Ex:  Create AN interface -- have a return type of THE specified interface

//Option 2
export default interface IHouseOutput {
    name: string;
    house: {
        width: number;
        length: number;
        outsideWallArea: number;
        insideWallArea: number;
        ceilingArea: number;
    };

    materials: {
        lumber: {
            boards: number;
            posts: number;
        };

        plywood: number;

        drywall: number;
    };

    waste: {
        lumber: {
            boards: number;
            posts: number;
        };

        plywood: number;

        drywall: number;
    };

    purchase: {
        lumber: {
            boards: number;
            posts: number;
        };

        plywood: number;

        drywall: number;
    };
}
