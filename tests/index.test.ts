import * as utils from "../src"
import { expect } from "chai"

describe("utils", () => {
    it("should return environment variable or null", () => {
        const envPath = utils.getEnvKey("test", "defaultValue")
        expect(envPath).to.equal("defaultValue")
    })

    it("should return hashed string", () => {
        const hashed = utils.hashString("qwe123zxc")
        expect(hashed).to.equal("df8c6f3ccf2fce80a9a854ee138584b4")
    })

    it("should retun whether string is empty", () => {
        const isEmpty = utils.isEmptyString("")
        expect(isEmpty).to.equal(true)
    })

    it("should return  number between given nums", () => {
        const rand = utils.randNum(-5, -1)
        expect(rand).to.be.within(-5, -1)
    })

    it("should return the array", () => {
        const array = utils.strToArray("hello")
        expect(array).to.have.members(["h", "e", "l", "l", "o"])
    })

    it("should return whether the data is array type", () => {
        const isArray = utils.isArray("string")
        expect(isArray).to.equal(false)
    })
})
