import { ethers } from "ethers";
import type { InputCriteria, Item } from "../types";
export declare const balanceOf: (owner: string, item: Item, provider: ethers.Provider, criteria?: InputCriteria) => Promise<bigint>;
