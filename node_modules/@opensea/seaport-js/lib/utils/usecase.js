"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagFromDomain = exports.getTransactionMethods = exports.executeAllActions = void 0;
const ethers_1 = require("ethers");
const executeAllActions = async (actions) => {
    for (let i = 0; i < actions.length - 1; i++) {
        const action = actions[i];
        if (action.type === "approval") {
            const tx = await action.transactionMethods.transact();
            await tx.wait();
        }
    }
    const finalAction = actions[actions.length - 1];
    switch (finalAction.type) {
        case "create":
            return finalAction.createOrder();
        case "createBulk":
            return finalAction.createBulkOrders();
        default:
            return finalAction.transactionMethods.transact();
    }
};
exports.executeAllActions = executeAllActions;
const instanceOfOverrides = (obj) => {
    const validKeys = [
        "gasLimit",
        "gasPrice",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "type",
        "accessList",
        "customData",
        "ccipReadEnabled",
        "value",
        "blockTag",
        "overrides",
    ];
    return (obj === undefined ||
        (Object.keys(obj).length > 0 &&
            Object.keys(obj).every((key) => validKeys.includes(key))));
};
const getTransactionMethods = (signer, contract, method, args, domain) => {
    let initialOverrides;
    if (args?.length > 0) {
        const lastArg = args[args.length - 1];
        if (instanceOfOverrides(lastArg)) {
            initialOverrides = lastArg;
            args.pop();
        }
    }
    const contractMethod = async (signer) => contract.connect(await signer)[method];
    const buildTransaction = async (overrides) => {
        const mergedOverrides = { ...initialOverrides, ...overrides };
        const method = await contractMethod(signer);
        const populatedTransaction = await method.populateTransaction(...[...args, mergedOverrides]);
        if (domain) {
            const tag = (0, exports.getTagFromDomain)(domain);
            populatedTransaction.data = populatedTransaction.data + tag;
        }
        return populatedTransaction;
    };
    return {
        staticCall: async (overrides) => {
            const mergedOverrides = { ...initialOverrides, ...overrides };
            const mergedArgs = [...args, mergedOverrides];
            const method = await contractMethod(signer);
            return method.staticCall(...mergedArgs);
        },
        estimateGas: async (overrides) => {
            const mergedOverrides = { ...initialOverrides, ...overrides };
            const mergedArgs = [...args, mergedOverrides];
            const method = await contractMethod(signer);
            return method.estimateGas(...mergedArgs);
        },
        transact: async (overrides) => {
            const mergedOverrides = { ...initialOverrides, ...overrides };
            const data = await buildTransaction(mergedOverrides);
            return (await signer).sendTransaction(data);
        },
        buildTransaction,
    };
};
exports.getTransactionMethods = getTransactionMethods;
const getTagFromDomain = (domain) => {
    return (0, ethers_1.keccak256)((0, ethers_1.toUtf8Bytes)(domain)).slice(2, 10);
};
exports.getTagFromDomain = getTagFromDomain;
//# sourceMappingURL=usecase.js.map