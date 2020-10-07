import { expect } from "chai";
import "mocha";

import { calcHouseMaterials, getHouseMaterials } from '../src/calculator/index';
// import { Arguments, Argv } from "yargs";

// These are the argments that I will need to pass in to my tests
//   IDEA (can we access these values?)
// var args: Arguments<{
//     name: string;
//     n: string;
//     length:number;
//     l: number;
//     width: number;
//     w: number;
//     isFeet: boolean;
// }>

//Test to make sure calcHouseMaterials is returning what I want
describe("calcHouseMaterials Function", () => {
    it("should return House Materials", () => {
        const result = calcHouseMaterials("test", 10, 10, true);
        expect(result.name).to.equal("test");
        expect(result.house.length).to.equal(10);
        expect(result.house.width).to.equal(10);
    });
});

//Test to make sure getHouseMaterials is returning what I want
//getHouseMaterials only returns a name in this version. 
describe("getHouseMaterials Function", () => {
    it("should return House Name", () => {
        const result = getHouseMaterials("test");
        expect(result.name).to.equal("test");
    });
});