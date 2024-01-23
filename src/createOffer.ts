import { WALLET_ADDRESS, sdk} from './utils/constants';

const createOffer = async () => {
    
    // TODO: Fill in the token address and token ID of the NFT you want to make an offer on
    let tokenAddress: string = "0x26acca8836164119fb4dd0d31917627c68558ec9";
    let tokenId: string = "6546";
    let offerAmount: string = "0.004";

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
        console.log(response.orderHash);
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
