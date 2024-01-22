"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextLayer = exports.getRoot = exports.fillArray = exports.hashConcat = exports.bufferKeccak = exports.hexToBuffer = exports.bufferToHex = exports.chunk = exports.makeArray = void 0;
const ethers_1 = require("ethers");
const makeArray = (len, getValue) => Array(len)
    .fill(0)
    .map((_, i) => getValue(i));
exports.makeArray = makeArray;
const chunk = (array, size) => {
    return (0, exports.makeArray)(Math.ceil(array.length / size), (i) => array.slice(i * size, (i + 1) * size));
};
exports.chunk = chunk;
const bufferToHex = (buf) => (0, ethers_1.toBeHex)(buf.toString("hex"));
exports.bufferToHex = bufferToHex;
const hexToBuffer = (value) => Buffer.from(value.slice(2), "hex");
exports.hexToBuffer = hexToBuffer;
const bufferKeccak = (value) => (0, exports.hexToBuffer)((0, ethers_1.keccak256)(value));
exports.bufferKeccak = bufferKeccak;
const hashConcat = (arr) => (0, exports.bufferKeccak)((0, ethers_1.concat)(arr));
exports.hashConcat = hashConcat;
const fillArray = (arr, length, value) => {
    if (length > arr.length)
        arr.push(...Array(length - arr.length).fill(value));
    return arr;
};
exports.fillArray = fillArray;
const getRoot = (elements, hashLeaves = true) => {
    if (elements.length === 0)
        throw new Error("empty tree");
    const leaves = elements.map((e) => {
        const leaf = Buffer.isBuffer(e) ? e : (0, exports.hexToBuffer)(e);
        return hashLeaves ? (0, exports.bufferKeccak)(leaf) : leaf;
    });
    const layers = [leaves];
    // Get next layer until we reach the root
    while (layers[layers.length - 1].length > 1) {
        layers.push((0, exports.getNextLayer)(layers[layers.length - 1]));
    }
    return layers[layers.length - 1][0];
};
exports.getRoot = getRoot;
const getNextLayer = (elements) => {
    return (0, exports.chunk)(elements, 2).map(exports.hashConcat);
};
exports.getNextLayer = getNextLayer;
//# sourceMappingURL=utils.js.map