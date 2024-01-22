"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerkleTree = void 0;
const ethers_1 = require("ethers");
const merkletreejs_1 = require("merkletreejs");
const hashIdentifier = (identifier) => (0, ethers_1.keccak256)(Buffer.from((0, ethers_1.toBeHex)(identifier).slice(2).padStart(64, "0"), "hex"));
/**
 * Simple wrapper over the MerkleTree in merkletreejs.
 * Handles hashing identifiers to be compatible with Seaport.
 */
class MerkleTree {
    constructor(identifiers) {
        this.tree = new merkletreejs_1.default(identifiers.map(hashIdentifier), ethers_1.keccak256, {
            sort: true,
        });
    }
    getProof(identifier) {
        return this.tree.getHexProof(hashIdentifier(identifier));
    }
    getRoot() {
        return this.tree.getRoot().toString("hex") ? this.tree.getHexRoot() : "0";
    }
}
exports.MerkleTree = MerkleTree;
//# sourceMappingURL=merkletree.js.map