import { expect } from "chai";
import "mocha";

import  greeting  from '../src/index'

describe("Greeting Message Function", () => {
    it("should return Hello Terminal!", () => {
        const result = greeting();
        expect(result).to.equal(greeting());
    });
});