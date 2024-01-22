"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eip712MerkleTree = void 0;
const ethers_1 = require("ethers");
const merkletreejs_1 = require("merkletreejs");
const defaults_1 = require("./defaults");
const utils_1 = require("./utils");
const getTree = (leaves, defaultLeafHash) => new merkletreejs_1.MerkleTree(leaves.map(utils_1.hexToBuffer), utils_1.bufferKeccak, {
    complete: true,
    sort: false,
    hashLeaves: false,
    fillDefaultHash: (0, utils_1.hexToBuffer)(defaultLeafHash),
});
const encodeProof = (key, proof, signature = `0x${"ff".repeat(64)}`) => {
    return (0, ethers_1.concat)([
        signature,
        `0x${key.toString(16).padStart(6, "0")}`,
        ethers_1.AbiCoder.defaultAbiCoder().encode([`uint256[${proof.length}]`], [proof]),
    ]);
};
class Eip712MerkleTree {
    get completedSize() {
        return Math.pow(2, this.depth);
    }
    /** Returns the array of elements in the tree, padded to the complete size with empty items. */
    getCompleteElements() {
        const elements = this.elements;
        return (0, utils_1.fillArray)([...elements], this.completedSize, this.defaultNode);
    }
    /** Returns the array of leaf nodes in the tree, padded to the complete size with default hashes. */
    getCompleteLeaves() {
        const leaves = this.elements.map(this.leafHasher);
        return (0, utils_1.fillArray)([...leaves], this.completedSize, this.defaultLeaf);
    }
    get root() {
        return this.tree.getHexRoot();
    }
    getProof(i) {
        const leaves = this.getCompleteLeaves();
        const leaf = leaves[i];
        const proof = this.tree.getHexProof(leaf, i);
        const root = this.tree.getHexRoot();
        return { leaf, proof, root };
    }
    getEncodedProofAndSignature(i, signature) {
        const { proof } = this.getProof(i);
        return encodeProof(i, proof, signature);
    }
    getDataToSign() {
        let layer = this.getCompleteElements();
        while (layer.length > 2) {
            layer = (0, utils_1.chunk)(layer, 2);
        }
        return layer;
    }
    add(element) {
        this.elements.push(element);
    }
    getBulkOrderHash() {
        const structHash = this.encoder.hashStruct("BulkOrder", {
            tree: this.getDataToSign(),
        });
        const leaves = this.getCompleteLeaves().map(utils_1.hexToBuffer);
        const rootHash = (0, utils_1.bufferToHex)((0, utils_1.getRoot)(leaves, false));
        const typeHash = (0, ethers_1.keccak256)((0, ethers_1.toUtf8Bytes)(this.encoder.types.BulkOrder[0].type));
        const bulkOrderHash = (0, ethers_1.keccak256)((0, ethers_1.concat)([typeHash, rootHash]));
        if (bulkOrderHash !== structHash) {
            throw new Error("expected derived bulk order hash to match");
        }
        return structHash;
    }
    constructor(types, rootType, leafType, elements, depth) {
        this.types = types;
        this.rootType = rootType;
        this.leafType = leafType;
        this.elements = elements;
        this.depth = depth;
        const encoder = ethers_1.TypedDataEncoder.from(types);
        this.encoder = encoder;
        this.leafHasher = (leaf) => encoder.hashStruct(leafType, leaf);
        this.defaultNode = defaults_1.DefaultGetter.from(types, leafType);
        this.defaultLeaf = this.leafHasher(this.defaultNode);
        this.tree = getTree(this.getCompleteLeaves(), this.defaultLeaf);
    }
}
exports.Eip712MerkleTree = Eip712MerkleTree;
//# sourceMappingURL=Eip712MerkleTree.js.map