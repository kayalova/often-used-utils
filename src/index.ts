import * as crypto from "crypto"

export const getEnvKey = (value: string, defaultValue?: string): string | null =>
    process.env[value] || defaultValue || null

export const hashString = (value: string): string =>
    crypto.createHash("md5").update(value).digest("hex")

export const isEmptyString = (value: string): boolean => value === ""

export const randNum = (min: number, max: number): number =>
    Math.random() * (max - min) + min

export const strToArray = (str: string, divider: string = ""): Array<string> =>
    str.split(divider)
