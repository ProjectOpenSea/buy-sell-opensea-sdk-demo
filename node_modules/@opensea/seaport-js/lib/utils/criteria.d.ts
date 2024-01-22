import { Side } from "../constants";
import { InputCriteria, Item, Order } from "../types";
export declare const generateCriteriaResolvers: ({ orders, offerCriterias, considerationCriterias, }: {
    orders: Order[];
    offerCriterias?: InputCriteria[][] | undefined;
    considerationCriterias?: InputCriteria[][] | undefined;
}) => {
    orderIndex: number;
    index: number;
    side: Side;
    identifier: string;
    criteriaProof: string[];
}[];
export declare const getItemToCriteriaMap: (items: Item[], criterias: InputCriteria[]) => Map<Item, InputCriteria>;
