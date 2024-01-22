import MerkleTreeJS from "merkletreejs";
/**
 * Simple wrapper over the MerkleTree in merkletreejs.
 * Handles hashing identifiers to be compatible with Seaport.
 */
export declare class MerkleTree {
    tree: MerkleTreeJS;
    constructor(identifiers: string[]);
    getProof(identifier: string): string[];
    getRoot(): string;
}
