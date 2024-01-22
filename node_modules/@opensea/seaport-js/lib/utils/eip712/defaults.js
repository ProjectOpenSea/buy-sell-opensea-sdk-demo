"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultGetter = void 0;
const ethers_1 = require("ethers");
const baseDefaults = {
    integer: 0,
    address: ethers_1.ethers.zeroPadValue("0x", 20),
    bool: false,
    bytes: "0x",
    string: "",
};
const isNullish = (value) => {
    if (value === undefined)
        return false;
    return (value !== undefined &&
        value !== null &&
        ((["string", "number"].includes(typeof value) && BigInt(value) === 0n) ||
            (Array.isArray(value) && value.every(isNullish)) ||
            (typeof value === "object" && Object.values(value).every(isNullish)) ||
            (typeof value === "boolean" && value === false)));
};
function getDefaultForBaseType(type) {
    // bytesXX
    const [, width] = type.match(/^bytes(\d+)$/) ?? [];
    if (width)
        return (0, ethers_1.zeroPadValue)("0x", parseInt(width));
    if (type.match(/^(u?)int(\d*)$/))
        type = "integer";
    return baseDefaults[type];
}
class DefaultGetter {
    constructor(types) {
        this.types = types;
        this.defaultValues = {};
        for (const name in types) {
            const defaultValue = this.getDefaultValue(name);
            this.defaultValues[name] = defaultValue;
            if (!isNullish(defaultValue)) {
                throw new Error(`Got non-empty value for type ${name} in default generator: ${defaultValue}`);
            }
        }
    }
    static from(types, type) {
        const { defaultValues } = new DefaultGetter(types);
        if (type)
            return defaultValues[type];
        return defaultValues;
    }
    /* eslint-enable no-dupe-class-members */
    getDefaultValue(type) {
        if (this.defaultValues[type])
            return this.defaultValues[type];
        // Basic type (address, bool, uint256, etc)
        const basic = getDefaultForBaseType(type);
        if (basic !== undefined)
            return basic;
        // Array
        const match = type.match(/^(.*)(\x5b(\d*)\x5d)$/);
        if (match) {
            const subtype = match[1];
            const length = parseInt(match[3]);
            if (length > 0) {
                const baseValue = this.getDefaultValue(subtype);
                return Array(length).fill(baseValue);
            }
            return [];
        }
        // Struct
        const fields = this.types[type];
        if (fields) {
            return fields.reduce((obj, { name, type }) => ({
                ...obj,
                [name]: this.getDefaultValue(type),
            }), {});
        }
        throw new Error(`unknown type: ${type}`);
    }
}
exports.DefaultGetter = DefaultGetter;
//# sourceMappingURL=defaults.js.map