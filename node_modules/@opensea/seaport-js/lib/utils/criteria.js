"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemToCriteriaMap = exports.generateCriteriaResolvers = void 0;
const constants_1 = require("../constants");
const item_1 = require("./item");
const generateCriteriaResolvers = ({ orders, offerCriterias = [[]], considerationCriterias = [[]], }) => {
    const offerCriteriaItems = orders.flatMap((order, orderIndex) => order.parameters.offer
        .map((item, index) => ({
        orderIndex,
        item,
        index,
        side: constants_1.Side.OFFER,
    }))
        .filter(({ item }) => (0, item_1.isCriteriaItem)(item.itemType)));
    const considerationCriteriaItems = orders.flatMap((order, orderIndex) => order.parameters.consideration
        .map((item, index) => ({
        orderIndex,
        item,
        index,
        side: constants_1.Side.CONSIDERATION,
    }))
        .filter(({ item }) => (0, item_1.isCriteriaItem)(item.itemType)));
    const mapCriteriaItemsToResolver = (criteriaItems, criterias) => criteriaItems.map(({ orderIndex, item, index, side }) => {
        const merkleRoot = item.identifierOrCriteria || "0";
        const inputCriteria = criterias[orderIndex][index];
        return {
            orderIndex,
            index,
            side,
            identifier: inputCriteria.identifier,
            criteriaProof: merkleRoot === "0" ? [] : inputCriteria.proof,
        };
    });
    const criteriaResolvers = [
        ...mapCriteriaItemsToResolver(offerCriteriaItems, offerCriterias),
        ...mapCriteriaItemsToResolver(considerationCriteriaItems, considerationCriterias),
    ];
    return criteriaResolvers;
};
exports.generateCriteriaResolvers = generateCriteriaResolvers;
const getItemToCriteriaMap = (items, criterias) => {
    const criteriasCopy = [...criterias];
    return items.reduce((map, item) => {
        if ((0, item_1.isCriteriaItem)(item.itemType)) {
            map.set(item, criteriasCopy.shift());
        }
        return map;
    }, new Map());
};
exports.getItemToCriteriaMap = getItemToCriteriaMap;
//# sourceMappingURL=criteria.js.map