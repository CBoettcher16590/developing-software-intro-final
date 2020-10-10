import fs = require("fs");
import IHouseOutput from "../calculator/interfaces";


export class Houses extends Map<string, IHouseOutput> {
    private static data = {
        path: `${__dirname}/../data`,
    };


    private static getSaveLocation(): string {
        if (!fs.existsSync(Houses.data.path)) {
            fs.mkdirSync(Houses.data.path);
        }

        return Houses.data.path;
    }

    public static getAll(): Houses {
        const dataFolder = this.getSaveLocation();
        const contents: fs.Dirent[] = fs.readdirSync(dataFolder, {
            withFileTypes: true,
        });

        const houseData: IHouseOutput[] = contents.map(
            (file: fs.Dirent): IHouseOutput => {
                const json = fs.readFileSync(`${dataFolder}/${file.name}`, {
                    encoding: "utf-8",
                });
                return JSON.parse(json);
            }
        );

        const houses = new Houses();

        return houses;
    }

    public static save(house: IHouseOutput): void {
        const data = {
                name: house.name,
                house: {
                    width: house.house.width,
                    length: house.house.length,
                    outsideWallArea: house.house.outsideWallArea,
                    insideWallArea: house.house.insideWallArea,
                    ceilingArea: house.house.ceilingArea,
                },
        
                materials: {
                    lumber: {
                        boards: house.materials.lumber.boards,
                        posts: house.materials.lumber.posts,
                    },
        
                    plywood: house.materials.plywood,
        
                    drywall: house.materials.drywall,
                },
        
                waste: {
                    lumber: {
                        boards: house.waste.lumber.boards,
                        posts: house.waste.lumber.posts,
                    },
        
                    plywood: house.waste.plywood,
        
                    drywall: house.waste.drywall,
                },
        
                purchase: {
                    lumber: {
                        boards: house.purchase.lumber.boards,
                        posts: house.purchase.lumber.posts,
                    },
        
                    plywood: house.purchase.plywood,
        
                    drywall: house.purchase.drywall,
                },
        };

        fs.writeFileSync(
            `${Houses.getSaveLocation()}/${house.name}.json`,
            JSON.stringify(data, null, 4),
            { encoding: "utf-8" }
        );
    }
}
