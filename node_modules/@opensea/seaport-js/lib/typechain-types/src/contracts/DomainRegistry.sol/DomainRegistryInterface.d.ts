import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export interface DomainRegistryInterfaceInterface extends Interface {
    getFunction(nameOrSignature: "getDomain" | "getDomains" | "getNumberOfDomains" | "setDomain"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "DomainRegistered"): EventFragment;
    encodeFunctionData(functionFragment: "getDomain", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDomains", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getNumberOfDomains", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setDomain", values: [string]): string;
    decodeFunctionResult(functionFragment: "getDomain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDomains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumberOfDomains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDomain", data: BytesLike): Result;
}
export declare namespace DomainRegisteredEvent {
    type InputTuple = [
        domain: string,
        tag: BytesLike,
        index: BigNumberish
    ];
    type OutputTuple = [domain: string, tag: string, index: bigint];
    interface OutputObject {
        domain: string;
        tag: string;
        index: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface DomainRegistryInterface extends BaseContract {
    connect(runner?: ContractRunner | null): DomainRegistryInterface;
    waitForDeployment(): Promise<this>;
    interface: DomainRegistryInterfaceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getDomain: TypedContractMethod<[
        tag: BytesLike,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getDomains: TypedContractMethod<[tag: BytesLike], [string[]], "view">;
    getNumberOfDomains: TypedContractMethod<[tag: BytesLike], [bigint], "view">;
    setDomain: TypedContractMethod<[domain: string], [string], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getDomain"): TypedContractMethod<[
        tag: BytesLike,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getDomains"): TypedContractMethod<[tag: BytesLike], [string[]], "view">;
    getFunction(nameOrSignature: "getNumberOfDomains"): TypedContractMethod<[tag: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "setDomain"): TypedContractMethod<[domain: string], [string], "nonpayable">;
    getEvent(key: "DomainRegistered"): TypedContractEvent<DomainRegisteredEvent.InputTuple, DomainRegisteredEvent.OutputTuple, DomainRegisteredEvent.OutputObject>;
    filters: {
        "DomainRegistered(string,bytes4,uint256)": TypedContractEvent<DomainRegisteredEvent.InputTuple, DomainRegisteredEvent.OutputTuple, DomainRegisteredEvent.OutputObject>;
        DomainRegistered: TypedContractEvent<DomainRegisteredEvent.InputTuple, DomainRegisteredEvent.OutputTuple, DomainRegisteredEvent.OutputObject>;
    };
}
