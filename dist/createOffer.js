"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// createOffer.ts
const constants_1 = require("./utils/constants");
const createOffer = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("STARTED");
    // TODO: Fill in the token address and token ID of the NFT you want to make an offer on
    let tokenAddress = "0x26acca8836164119fb4dd0d31917627c68558ec9";
    let tokenId = "6546";
    let offerAmount = "0.004";
    const offer = {
        accountAddress: constants_1.WALLET_ADDRESS,
        startAmount: offerAmount,
        asset: {
            tokenAddress: tokenAddress,
            tokenId: tokenId,
        },
    };
    console.log("Offer: ", offer);
    const result = yield constants_1.sdk.createOffer(offer);
    console.log("Result: ", result);
});
// Check if the module is the main entry point
if (require.main === module) {
    // If yes, run the createOffer function
    createOffer().catch((error) => {
        console.error("Error in createOffer:", error);
    });
}
exports.default = createOffer;
