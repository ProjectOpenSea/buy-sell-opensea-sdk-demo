import { WALLET_ADDRESS, sdk } from "./utils/constants";

const createOffer = async () => {
  // TODO: Fill in the token address and token ID of the NFT you want to make
  // an offer on, as well as the offer amount in WETH.
  const tokenAddress = "";
  const tokenId = "";
  const offerAmount = "";

  const response = await sdk.createOffer({
    accountAddress: WALLET_ADDRESS,
    amount: offerAmount,
    asset: {
      tokenAddress,
      tokenId,
    },
  });

  console.log(
    "Successfully created an offer with orderHash:",
    response.orderHash,
  );
};

if (require.main === module) {
  createOffer().catch(console.error);
}

export default createOffer;
