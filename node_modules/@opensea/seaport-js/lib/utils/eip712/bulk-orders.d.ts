import { Eip712MerkleTree } from "./Eip712MerkleTree";
import type { OrderComponents } from "../../types";
export declare function getBulkOrderTreeHeight(length: number): number;
export declare function getBulkOrderTree(orderComponents: OrderComponents[], startIndex?: number, height?: number): Eip712MerkleTree<OrderComponents>;
export declare function getBulkOrderTypeHash(height: number): string;
export declare function getBulkOrderTypeHashes(maxHeight: number): string[];
