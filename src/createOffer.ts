import { WALLET_ADDRESS, sdk} from './utils/constants';

const createOffer = async () => {
    
    // TODO: Fill in the token address and token ID of the NFT you want to make an offer on, as well as the price
    let tokenAddress: string = "";
    let tokenId: string = "";
    let offerAmount: string = "";

    const offer = {
        accountAddress: WALLET_ADDRESS,
        startAmount: offerAmount,
        asset: {
            tokenAddress: tokenAddress,
            tokenId: tokenId,
        },
    };

    try {
        const response = await sdk.createOffer(offer);
        console.log("Successfully created an offer with orderHash:", response.orderHash);
    } catch (error) {
        console.error("Error in createOffer:", error);
    }
}

// Check if the module is the main entry point
if (require.main === module) {
    // If yes, run the createOffer function
    createOffer().catch((error) => {
        console.error("Error in createOffer:", error);
    });
}

export default createOffer;
