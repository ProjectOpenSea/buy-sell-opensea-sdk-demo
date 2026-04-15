import { WALLET_ADDRESS, sdk } from "./utils/constants";

const createListing = async () => {
  // TODO: Fill in the token address and token ID of the NFT you want to sell,
  // as well as the listing price in the chain's native currency (e.g. ETH).
  const tokenAddress = "";
  const tokenId = "";
  const listingAmount = "";

  const response = await sdk.createListing({
    accountAddress: WALLET_ADDRESS,
    amount: listingAmount,
    asset: {
      tokenAddress,
      tokenId,
    },
  });

  console.log(
    "Successfully created a listing with orderHash:",
    response.orderHash,
  );
};

if (require.main === module) {
  createListing().catch(console.error);
}

export default createListing;
