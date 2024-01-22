import { type ContractRunner } from "ethers";
import type { ERC721TokenReceiver, ERC721TokenReceiverInterface } from "../../../../../../@rari-capital/solmate/src/tokens/ERC721.sol/ERC721TokenReceiver";
export declare class ERC721TokenReceiver__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC721TokenReceiverInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC721TokenReceiver;
}
