import { expect } from "chai";
import "mocha";
import IHouseOutput from '../src/calculator/interfaces';
import { calcDrywall, calcHouseMaterials, calcWallLumber, getHouseMaterials, calcPlywood, calcMaterials } from '../src/calculator/index';
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

//Testing to make sure calcWallLumber is returning what I want
describe("calcWallLumber Function", () => {
    it("should return number of plates, studs, and posts", () => {
        const result = calcWallLumber(96);
        expect(result.plates).to.equal(3);
        expect(result.studs).to.equal(7);
        expect(result.posts).to.equal(0);
    });
});

//Testing to make sure calcDrywall is returning what I want
describe("calcDrywall Function", () => {
    it("should return number drywall sheets needed for the whole house", () => {
        const result = calcDrywall(96,96);
        expect(result).to.equal(10);
    });
});

//Testing to make sure calcPlywood is returning what I want
describe("calcPlywood Function", () => {
    it("should return number plywood sheets needed for the exterior walls", () => {
        const result = calcPlywood(96,96);
        expect(result).to.equal(8);
    });
});

//Testing to make sure calcPlywood is returning what I want
describe("calcMateruals Function", () => {
    it("should return the materials from calcMaterials function", () => {
        const result = calcMaterials(96, 96, calcWallLumber, calcDrywall, calcPlywood);
        expect(result.materials.drywall).to.equal(10);
        expect(result.materials.lumber.boards).to.equal(28);
        expect(result.materials.lumber.posts).to.equal(4);
        expect(result.materials.plywood).to.equal(8);
    });
    it("should return the House properties from calcMaterials function", () => {
        const result = calcMaterials(96, 96, calcWallLumber, calcDrywall, calcPlywood);
        expect(result.house.width).to.equal(96);
        expect(result.house.length).to.equal(96);
        expect(result.house.outsideWallArea).to.equal(36864);
        expect(result.house.insideWallArea).to.equal(36836);
        expect(result.house.ceilingArea).to.equal(9216);
    });
});
