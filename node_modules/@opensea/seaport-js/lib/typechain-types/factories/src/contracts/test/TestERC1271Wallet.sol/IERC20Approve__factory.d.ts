import { type ContractRunner } from "ethers";
import type { IERC20Approve, IERC20ApproveInterface } from "../../../../../src/contracts/test/TestERC1271Wallet.sol/IERC20Approve";
export declare class IERC20Approve__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IERC20ApproveInterface;
    static connect(address: string, runner?: ContractRunner | null): IERC20Approve;
}
