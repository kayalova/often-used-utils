"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.areEqual = exports.areEqualFunctions = exports.areFunctions = exports.isFunction = exports.areEqualArrays = exports.areArrays = exports.areObjects = exports.areEqualObjects = exports.areEqualPrimitives = exports.arePrimitives = exports.isObject = exports.isPrimitive = exports.isNull = exports.isUndefined = exports.isBoolean = exports.isString = exports.isNumber = exports.isArray = exports.isEmptyArray = exports.strToArray = exports.randNum = exports.isEmptyString = exports.hashString = exports.getEnvKey = void 0;
var crypto = __importStar(require("crypto"));
exports.getEnvKey = function (value, defaultValue) {
    return process.env[value] || defaultValue || null;
};
exports.hashString = function (value) {
    return crypto.createHash("md5").update(value).digest("hex");
};
exports.isEmptyString = function (value) { return value === ""; };
exports.randNum = function (min, max) {
    return Math.random() * (max - min) + min;
};
exports.strToArray = function (str, divider) {
    if (divider === void 0) { divider = ""; }
    return str.split(divider);
};
exports.isEmptyArray = function (data) { return data.length === 0; };
exports.isArray = function (data) { return Array.isArray(data); };
exports.isNumber = function (value) { return typeof value === "number"; };
exports.isString = function (value) { return typeof value === "string"; };
exports.isBoolean = function (value) { return typeof value === "boolean"; };
exports.isUndefined = function (value) { return typeof value === "undefined"; };
exports.isNull = function (value) { return value === null; };
exports.isPrimitive = function (value) {
    return exports.isNumber(value) || exports.isString(value) || exports.isBoolean(value) || exports.isUndefined(value) || exports.isNull(value);
};
exports.isObject = function (value) {
    return value.__proto__ === Object.prototype;
};
exports.arePrimitives = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.reduce(function (result, val) {
        if (!exports.isPrimitive(val))
            result = false;
        return result;
    }, true);
};
exports.areEqualPrimitives = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    if (exports.isEmptyArray(values))
        return false;
    var first = values[0];
    return values.reduce(function (result, val) {
        if (first !== val)
            result = false;
        return result;
    }, true);
};
exports.areEqualObjects = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    if (exports.isEmptyArray(values) || !exports.areObjects(values))
        return false;
    var first = values[0];
    return values.reduce(function (result, val) {
        if (JSON.stringify(first) !== JSON.stringify(val)) {
            result = false;
        }
        return result;
    }, true);
};
exports.areObjects = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    if (exports.isEmptyArray(values))
        return false;
    return values.reduce(function (result, val) {
        if (!exports.isObject(val))
            result = false;
        return result;
    }, true);
};
exports.areArrays = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    if (exports.isEmptyArray(values))
        return false;
    return values.reduce(function (result, val) {
        if (!exports.isArray(val))
            result = false;
        return result;
    }, true);
};
exports.areEqualArrays = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    if (exports.isEmptyArray(values) || !exports.areArrays(values))
        return false;
    var first = values[0];
    return values.reduce(function (result, val) {
        if (JSON.stringify(first) !== JSON.stringify(val))
            result = false;
        return result;
    }, true);
};
exports.isFunction = function (value) { return typeof value === "function"; };
exports.areFunctions = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    if (exports.isEmptyArray(values))
        return false;
    return values.reduce(function (result, val) {
        if (!exports.isFunction(val))
            result = false;
        return result;
    }, true);
};
exports.areEqualFunctions = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    if (exports.isEmptyArray(values) || !exports.areFunctions(values))
        return false;
    var first = values[0];
    return values.reduce(function (result, val) {
        if (JSON.stringify(first) !== JSON.stringify(val))
            result = false;
        return result;
    }, true);
};
exports.areEqual = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    if (exports.arePrimitives.apply(void 0, values))
        return exports.areEqualPrimitives.apply(void 0, values);
    if (exports.areObjects.apply(void 0, values))
        return exports.areEqualObjects.apply(void 0, values);
    if (exports.areArrays.apply(void 0, values))
        return exports.areEqualArrays.apply(void 0, values);
    if (exports.areFunctions.apply(void 0, values))
        return exports.areEqualFunctions.apply(void 0, values);
    return false;
};
console.log(exports.areEqual({ a: 1 }, { a: 1 }));
//# sourceMappingURL=index.js.map