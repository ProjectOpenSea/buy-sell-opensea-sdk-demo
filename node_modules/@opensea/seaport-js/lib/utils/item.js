"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaximumSizeForOrder = exports.getSummedTokenAndIdentifierAmounts = exports.getPresentItemAmount = exports.isCriteriaItem = exports.isErc1155Item = exports.isErc721Item = exports.isErc20Item = exports.isNativeCurrencyItem = exports.isCurrencyItem = void 0;
const constants_1 = require("../constants");
const criteria_1 = require("./criteria");
const gcd_1 = require("./gcd");
const isCurrencyItem = ({ itemType }) => [constants_1.ItemType.NATIVE, constants_1.ItemType.ERC20].includes(itemType);
exports.isCurrencyItem = isCurrencyItem;
const isNativeCurrencyItem = ({ itemType }) => itemType === constants_1.ItemType.NATIVE;
exports.isNativeCurrencyItem = isNativeCurrencyItem;
const isErc20Item = (itemType) => itemType === constants_1.ItemType.ERC20;
exports.isErc20Item = isErc20Item;
const isErc721Item = (itemType) => [constants_1.ItemType.ERC721, constants_1.ItemType.ERC721_WITH_CRITERIA].includes(itemType);
exports.isErc721Item = isErc721Item;
const isErc1155Item = (itemType) => [constants_1.ItemType.ERC1155, constants_1.ItemType.ERC1155_WITH_CRITERIA].includes(itemType);
exports.isErc1155Item = isErc1155Item;
const isCriteriaItem = (itemType) => [constants_1.ItemType.ERC721_WITH_CRITERIA, constants_1.ItemType.ERC1155_WITH_CRITERIA].includes(itemType);
exports.isCriteriaItem = isCriteriaItem;
const getPresentItemAmount = ({ startAmount, endAmount, timeBasedItemParams, }) => {
    const startAmountBn = BigInt(startAmount);
    const endAmountBn = BigInt(endAmount);
    if (!timeBasedItemParams) {
        return startAmountBn > endAmountBn ? startAmountBn : endAmountBn;
    }
    const { isConsiderationItem, currentBlockTimestamp, ascendingAmountTimestampBuffer, startTime, endTime, } = timeBasedItemParams;
    const startTimeBn = BigInt(startTime);
    const endTimeBn = BigInt(endTime);
    const duration = endTimeBn - startTimeBn;
    const isAscending = endAmountBn > startAmountBn;
    const adjustedBlockTimestamp = BigInt(isAscending
        ? currentBlockTimestamp + ascendingAmountTimestampBuffer
        : currentBlockTimestamp);
    if (adjustedBlockTimestamp < startTimeBn) {
        return startAmountBn;
    }
    const elapsed = (adjustedBlockTimestamp > endTimeBn ? endTimeBn : adjustedBlockTimestamp) -
        startTimeBn;
    const remaining = duration - elapsed;
    // Adjust amounts based on current time
    // For offer items, we round down
    // For consideration items, we round up
    return ((startAmountBn * remaining +
        endAmountBn * elapsed +
        (isConsiderationItem ? duration - 1n : 0n)) /
        duration);
};
exports.getPresentItemAmount = getPresentItemAmount;
const getSummedTokenAndIdentifierAmounts = ({ items, criterias, timeBasedItemParams, }) => {
    const itemToCriteria = (0, criteria_1.getItemToCriteriaMap)(items, criterias);
    const tokenAndIdentifierToSummedAmount = items.reduce((map, item) => {
        const identifierOrCriteria = itemToCriteria.get(item)?.identifier ?? item.identifierOrCriteria;
        return {
            ...map,
            [item.token]: {
                ...map[item.token],
                // Being explicit about the undefined type as it's possible for it to be undefined at first iteration
                [identifierOrCriteria]: (map[item.token]?.[identifierOrCriteria] ??
                    0n) +
                    (0, exports.getPresentItemAmount)({
                        startAmount: item.startAmount,
                        endAmount: item.endAmount,
                        timeBasedItemParams,
                    }),
            },
        };
    }, {});
    return tokenAndIdentifierToSummedAmount;
};
exports.getSummedTokenAndIdentifierAmounts = getSummedTokenAndIdentifierAmounts;
/**
 * Returns the maximum size of units possible for the order
 * If any of the items on a partially fillable order specify a different "startAmount" and "endAmount
 * (e.g. they are ascending-amount or descending-amount items), the fraction will be applied to both amounts
 * prior to determining the current price. This ensures that cleanly divisible amounts can be chosen when
 * constructing the order without a dependency on the time when the order is ultimately fulfilled.
 */
const getMaximumSizeForOrder = ({ parameters: { offer, consideration }, }) => {
    const allItems = [...offer, ...consideration];
    const amounts = allItems.flatMap(({ startAmount, endAmount }) => [
        startAmount,
        endAmount,
    ]);
    return (0, gcd_1.findGcd)(amounts);
};
exports.getMaximumSizeForOrder = getMaximumSizeForOrder;
//# sourceMappingURL=item.js.map