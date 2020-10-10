import { getEnvKey } from "../src"
import { expect } from "chai"

describe("utils", () => {
    it("should return environment variable or null", () => {
        let envPath = getEnvKey("test", "defaultValue")
        expect(envPath).to.equal("defaultValue")
    })
})