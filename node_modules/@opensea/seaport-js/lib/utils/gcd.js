"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findGcd = exports.gcd = void 0;
const gcd = (a, b) => {
    const bnA = BigInt(a);
    const bnB = BigInt(b);
    if (bnA === 0n) {
        return bnB;
    }
    return (0, exports.gcd)(bnB % bnA, bnA);
};
exports.gcd = gcd;
const findGcd = (elements) => {
    let result = BigInt(elements[0]);
    for (let i = 1; i < elements.length; i++) {
        result = (0, exports.gcd)(elements[i], result);
        if (result === 1n) {
            return result;
        }
    }
    return result;
};
exports.findGcd = findGcd;
//# sourceMappingURL=gcd.js.map