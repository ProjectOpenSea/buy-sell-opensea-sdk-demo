import { TypedDataField } from "ethers";
export type EIP712TypeDefinitions = Record<string, TypedDataField[]>;
type DefaultMap<T extends EIP712TypeDefinitions> = {
    [K in keyof T]: any;
};
export declare class DefaultGetter<Types extends EIP712TypeDefinitions> {
    protected types: Types;
    defaultValues: DefaultMap<Types>;
    constructor(types: Types);
    static from<Types extends EIP712TypeDefinitions>(types: Types): DefaultMap<Types>;
    static from<Types extends EIP712TypeDefinitions>(types: Types, type: keyof Types): any;
    getDefaultValue(type: string): any;
}
export {};
