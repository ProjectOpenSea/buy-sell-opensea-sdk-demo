import { TypedDataEncoder } from "ethers";
import { MerkleTree } from "merkletreejs";
import type { EIP712TypeDefinitions } from "./defaults";
type BulkOrderElements<T> = [T, T] | [BulkOrderElements<T>, BulkOrderElements<T>];
export declare class Eip712MerkleTree<BaseType extends Record<string, any> = any> {
    types: EIP712TypeDefinitions;
    rootType: string;
    leafType: string;
    elements: BaseType[];
    depth: number;
    tree: MerkleTree;
    private leafHasher;
    defaultNode: BaseType;
    defaultLeaf: string;
    encoder: TypedDataEncoder;
    get completedSize(): number;
    /** Returns the array of elements in the tree, padded to the complete size with empty items. */
    getCompleteElements(): BaseType[];
    /** Returns the array of leaf nodes in the tree, padded to the complete size with default hashes. */
    getCompleteLeaves(): string[];
    get root(): string;
    getProof(i: number): {
        leaf: string;
        proof: string[];
        root: string;
    };
    getEncodedProofAndSignature(i: number, signature: string): string;
    getDataToSign(): BulkOrderElements<BaseType>;
    add(element: BaseType): void;
    getBulkOrderHash(): string;
    constructor(types: EIP712TypeDefinitions, rootType: string, leafType: string, elements: BaseType[], depth: number);
}
export {};
