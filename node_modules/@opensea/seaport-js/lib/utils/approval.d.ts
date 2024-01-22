import { Signer, ethers } from "ethers";
import type { ApprovalAction, Item } from "../types";
import type { InsufficientApprovals } from "./balanceAndApprovalCheck";
export declare const approvedItemAmount: (owner: string, item: Item, operator: string, provider: ethers.Provider) => Promise<bigint>;
/**
 * Get approval actions given a list of insufficient approvals.
 */
export declare function getApprovalActions(insufficientApprovals: InsufficientApprovals, exactApproval: boolean, signer: Signer): ApprovalAction[];
