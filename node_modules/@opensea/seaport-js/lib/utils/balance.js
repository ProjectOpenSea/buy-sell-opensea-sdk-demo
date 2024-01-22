"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceOf = void 0;
const constants_1 = require("../constants");
const typechain_types_1 = require("../typechain-types");
const item_1 = require("./item");
const balanceOf = async (owner, item, provider, criteria) => {
    if ((0, item_1.isErc721Item)(item.itemType)) {
        const contract = typechain_types_1.TestERC721__factory.connect(item.token, provider);
        if (item.itemType === constants_1.ItemType.ERC721_WITH_CRITERIA) {
            return criteria
                ? contract
                    .ownerOf(criteria.identifier)
                    .then((ownerOf) => BigInt(ownerOf.toLowerCase() === owner.toLowerCase()))
                : contract.balanceOf(owner);
        }
        return contract
            .ownerOf(item.identifierOrCriteria)
            .then((ownerOf) => BigInt(ownerOf.toLowerCase() === owner.toLowerCase()));
    }
    else if ((0, item_1.isErc1155Item)(item.itemType)) {
        const contract = typechain_types_1.TestERC1155__factory.connect(item.token, provider);
        if (item.itemType === constants_1.ItemType.ERC1155_WITH_CRITERIA) {
            if (!criteria) {
                // We don't have a good way to determine the balance of an erc1155 criteria item unless explicit
                // identifiers are provided, so just assume the offerer has sufficient balance
                const startAmount = BigInt(item.startAmount);
                const endAmount = BigInt(item.endAmount);
                return startAmount > endAmount ? startAmount : endAmount;
            }
            return contract.balanceOf(owner, criteria.identifier);
        }
        return contract.balanceOf(owner, item.identifierOrCriteria);
    }
    if ((0, item_1.isErc20Item)(item.itemType)) {
        const contract = typechain_types_1.TestERC20__factory.connect(item.token, provider);
        return contract.balanceOf(owner);
    }
    return provider.getBalance(owner);
};
exports.balanceOf = balanceOf;
//# sourceMappingURL=balance.js.map