import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export interface TestERC1155Interface extends Interface {
    getFunction(nameOrSignature: "balanceOf" | "balanceOfBatch" | "isApprovedForAll" | "mint" | "safeBatchTransferFrom" | "safeTransferFrom" | "setApprovalForAll" | "supportsInterface" | "uri"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll" | "TransferBatch" | "TransferSingle" | "URI"): EventFragment;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [AddressLike[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [
        AddressLike,
        AddressLike,
        BigNumberish[],
        BigNumberish[],
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
}
export declare namespace ApprovalForAllEvent {
    type InputTuple = [
        owner: AddressLike,
        operator: AddressLike,
        approved: boolean
    ];
    type OutputTuple = [
        owner: string,
        operator: string,
        approved: boolean
    ];
    interface OutputObject {
        owner: string;
        operator: string;
        approved: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferBatchEvent {
    type InputTuple = [
        operator: AddressLike,
        from: AddressLike,
        to: AddressLike,
        ids: BigNumberish[],
        amounts: BigNumberish[]
    ];
    type OutputTuple = [
        operator: string,
        from: string,
        to: string,
        ids: bigint[],
        amounts: bigint[]
    ];
    interface OutputObject {
        operator: string;
        from: string;
        to: string;
        ids: bigint[];
        amounts: bigint[];
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferSingleEvent {
    type InputTuple = [
        operator: AddressLike,
        from: AddressLike,
        to: AddressLike,
        id: BigNumberish,
        amount: BigNumberish
    ];
    type OutputTuple = [
        operator: string,
        from: string,
        to: string,
        id: bigint,
        amount: bigint
    ];
    interface OutputObject {
        operator: string;
        from: string;
        to: string;
        id: bigint;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace URIEvent {
    type InputTuple = [value: string, id: BigNumberish];
    type OutputTuple = [value: string, id: bigint];
    interface OutputObject {
        value: string;
        id: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface TestERC1155 extends BaseContract {
    connect(runner?: ContractRunner | null): TestERC1155;
    waitForDeployment(): Promise<this>;
    interface: TestERC1155Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    balanceOf: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    balanceOfBatch: TypedContractMethod<[
        owners: AddressLike[],
        ids: BigNumberish[]
    ], [
        bigint[]
    ], "view">;
    isApprovedForAll: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        boolean
    ], "view">;
    mint: TypedContractMethod<[
        to: AddressLike,
        tokenId: BigNumberish,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    safeBatchTransferFrom: TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        ids: BigNumberish[],
        amounts: BigNumberish[],
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    safeTransferFrom: TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        id: BigNumberish,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    setApprovalForAll: TypedContractMethod<[
        operator: AddressLike,
        approved: boolean
    ], [
        void
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    uri: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "balanceOfBatch"): TypedContractMethod<[
        owners: AddressLike[],
        ids: BigNumberish[]
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "isApprovedForAll"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        to: AddressLike,
        tokenId: BigNumberish,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "safeBatchTransferFrom"): TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        ids: BigNumberish[],
        amounts: BigNumberish[],
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "safeTransferFrom"): TypedContractMethod<[
        from: AddressLike,
        to: AddressLike,
        id: BigNumberish,
        amount: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setApprovalForAll"): TypedContractMethod<[
        operator: AddressLike,
        approved: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "uri"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getEvent(key: "ApprovalForAll"): TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
    getEvent(key: "TransferBatch"): TypedContractEvent<TransferBatchEvent.InputTuple, TransferBatchEvent.OutputTuple, TransferBatchEvent.OutputObject>;
    getEvent(key: "TransferSingle"): TypedContractEvent<TransferSingleEvent.InputTuple, TransferSingleEvent.OutputTuple, TransferSingleEvent.OutputObject>;
    getEvent(key: "URI"): TypedContractEvent<URIEvent.InputTuple, URIEvent.OutputTuple, URIEvent.OutputObject>;
    filters: {
        "ApprovalForAll(address,address,bool)": TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
        ApprovalForAll: TypedContractEvent<ApprovalForAllEvent.InputTuple, ApprovalForAllEvent.OutputTuple, ApprovalForAllEvent.OutputObject>;
        "TransferBatch(address,address,address,uint256[],uint256[])": TypedContractEvent<TransferBatchEvent.InputTuple, TransferBatchEvent.OutputTuple, TransferBatchEvent.OutputObject>;
        TransferBatch: TypedContractEvent<TransferBatchEvent.InputTuple, TransferBatchEvent.OutputTuple, TransferBatchEvent.OutputObject>;
        "TransferSingle(address,address,address,uint256,uint256)": TypedContractEvent<TransferSingleEvent.InputTuple, TransferSingleEvent.OutputTuple, TransferSingleEvent.OutputObject>;
        TransferSingle: TypedContractEvent<TransferSingleEvent.InputTuple, TransferSingleEvent.OutputTuple, TransferSingleEvent.OutputObject>;
        "URI(string,uint256)": TypedContractEvent<URIEvent.InputTuple, URIEvent.OutputTuple, URIEvent.OutputObject>;
        URI: TypedContractEvent<URIEvent.InputTuple, URIEvent.OutputTuple, URIEvent.OutputObject>;
    };
}
