import { WALLET_ADDRESS, sdk } from './utils/constants';

const createListing = async () => {

    // TODO: Fill in the token address and token ID of the NFT you want to sell, as well as the price
    let tokenAddress: string = "";
    let tokenId: string = "";
    let listingAmount: string = "";

    const listing = {
        accountAddress: WALLET_ADDRESS,
        startAmount: listingAmount,
        asset: {
            tokenAddress: tokenAddress,
            tokenId: tokenId,
        },
    };

    try {
        const response = await sdk.createListing(listing);
        console.log("Successfully created a listing with orderHash:", response.orderHash);
    } catch (error) {
        console.error("Error in createListing:", error);
    }
}

// Check if the module is the main entry point
if (require.main === module) {
    // If yes, run the createOffer function
    createListing().catch((error) => {
        console.error("Error in createListing:", error);
    });
}

export default createListing;