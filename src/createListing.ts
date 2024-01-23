// src/buy.ts
import { WALLET_ADDRESS, sdk } from './utils/constants';

const createListing = async () => {
    // TODO: Fill in the token address and token ID of the NFT you want to make an offer on
    let tokenAddress: string = "";
    let tokenId: string = "";
    let listingAmount: string = "";

    const offer = {
        accountAddress: WALLET_ADDRESS,
        startAmount: +listingAmount,
        asset: {
            tokenAddress: tokenAddress,
            tokenId: tokenId,
        },
    };
    const order = await sdk.createOffer(offer);
}

export default createListing;
