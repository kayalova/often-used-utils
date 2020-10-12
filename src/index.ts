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

export const isEmptyArray = <T>(data: Array<T>): boolean => data.length === 0

export const isArray = (data: any): boolean => Array.isArray(data)

export const isNumber = (value: any): boolean => typeof value === "number"

export const isString = (value: any): boolean => typeof value === "string"

export const isBoolean = (value: any): boolean => typeof value === "boolean"

export const isUndefined = (value: any): boolean => typeof value === "undefined"

export const isNull = (value: any): boolean => value === null

export const isPrimitive = (value: any): boolean =>
    isNumber(value) || isString(value) || isBoolean(value) || isUndefined(value) || isNull(value)

export const isObject = (value: any): boolean =>
    value.__proto__.isPrototypeOf(Object)

export const arePrimitives = <T>(...values: Array<T>): boolean => {
    return values.reduce((result: boolean, val: T) => {
        if (!isPrimitive(val)) result = false
        return result
    }, true)
}

export const areEqualPrimitives = <T>(...values: Array<T>): boolean => {
    if (isEmptyArray(values)) return true
    const first: T = values[0]

    return values.reduce((result: boolean, val: T) => {
        if (first !== val) result = false
        return result
    }, true)
}

export const areEqualObjects = <T>(values: Array<T>): boolean => {
    if (isEmptyArray(values)) return true
    if (!areObjects(values)) return false
    const first: T = values[0]

    return values.reduce((result: boolean, val) => {
        if (JSON.stringify(first) !== JSON.stringify(val)) { result = false }
        return result
    }, true)
}

export const areObjects = <T>(values: Array<T>): boolean => {
    if (isEmptyArray(values)) return false
    return values.reduce((result: boolean, val: T) => {
        if (!isObject(val)) result = false
        return result
    }, true)
}

export const areArrays = <T>(values: Array<T>): boolean => {
    if (isEmptyArray(values)) return false
    return values.reduce((result: boolean, val) => {
        if (!isArray(val)) result = false
        return result
    }, true)
}

export const areEqualArrays = <T>(values: Array<T>): boolean => {
    if (isEmptyArray(values) || !areArrays(values)) return false

    const first: T = values[0]
    return values.reduce((result: boolean, val) => {
        if (JSON.stringify(first) !== JSON.stringify(val)) result = false
        return result
    }, true)
}

export const areEqual = <T>(...values: Array<T>): boolean => {
    if (arePrimitives(values)) return areEqualPrimitives(values)
    if (areObjects(values)) return areEqualObjects(values)
    if (areArrays(values)) return areEqualArrays(values)
    // TODO: if (areFunctions(values)) return areEqualFunctions(values)
    return false
}
