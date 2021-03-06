export declare const getEnvKey: (value: string, defaultValue?: string) => string | null
export declare const hashString: (value: string) => string
export declare const isEmptyString: (value: string) => boolean
export declare const randNum: (min: number, max: number) => number
export declare const strToArray: (str: string, divider?: string) => Array<string>
export declare const isEmptyArray: <T>(data: T[]) => boolean
export declare const isArray: (data: any) => boolean
export declare const isNumber: (value: any) => boolean
export declare const isString: (value: any) => boolean
export declare const isBoolean: (value: any) => boolean
export declare const isUndefined: (value: any) => boolean
export declare const isNull: (value: any) => boolean
export declare const isPrimitive: (value: any) => boolean
export declare const isObject: (value: any) => boolean
export declare const arePrimitives: <T>(...values: T[]) => boolean
export declare const areEqualPrimitives: <T>(...values: T[]) => boolean
export declare const areEqualObjects: <T>(...values: T[]) => boolean
export declare const areObjects: <T>(...values: T[]) => boolean
export declare const areArrays: <T>(...values: T[]) => boolean
export declare const areEqualArrays: <T>(...values: T[]) => boolean
export declare const isFunction: (value: any) => boolean
export declare const areFunctions: <T>(...values: T[]) => boolean
export declare const areEqualFunctions: <T>(...values: T[]) => boolean
export declare const areEqual: <T>(...values: T[]) => boolean
