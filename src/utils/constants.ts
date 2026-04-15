import { Chain, OpenSeaSDK } from "@opensea/sdk";
import { ethers } from "ethers";

export const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
export const WALLET_PRIV_KEY = process.env.WALLET_PRIV_KEY;
export const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

const provider = new ethers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
);

export const wallet = new ethers.Wallet(WALLET_PRIV_KEY as string, provider);

export const WALLET_ADDRESS = wallet.address;

export const sdk = new OpenSeaSDK(
  wallet,
  {
    chain: Chain.Mainnet,
    apiKey: OPENSEA_API_KEY,
  },
  (line) => console.info(`MAINNET: ${line}`),
);
