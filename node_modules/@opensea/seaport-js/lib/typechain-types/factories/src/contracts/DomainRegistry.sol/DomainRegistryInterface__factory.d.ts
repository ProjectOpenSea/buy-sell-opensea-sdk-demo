import { type ContractRunner } from "ethers";
import type { DomainRegistryInterface, DomainRegistryInterfaceInterface } from "../../../../src/contracts/DomainRegistry.sol/DomainRegistryInterface";
export declare class DomainRegistryInterface__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "domain";
            readonly type: "string";
        }];
        readonly name: "DomainAlreadyRegistered";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "suppliedIndex";
            readonly type: "uint256";
        }];
        readonly name: "DomainIndexOutOfRange";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "domain";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "DomainRegistered";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getDomain";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "domain";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }];
        readonly name: "getDomains";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "domains";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }];
        readonly name: "getNumberOfDomains";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalDomains";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "domain";
            readonly type: "string";
        }];
        readonly name: "setDomain";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "tag";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DomainRegistryInterfaceInterface;
    static connect(address: string, runner?: ContractRunner | null): DomainRegistryInterface;
}
