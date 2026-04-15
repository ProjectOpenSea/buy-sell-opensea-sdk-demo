import { describe, it, expect } from "vitest";
import { ethers } from "ethers";
import { OpenSeaSDK, Chain } from "@opensea/sdk";

describe("@opensea/sdk", () => {
  it("exports OpenSeaSDK and Chain", () => {
    expect(OpenSeaSDK).toBeDefined();
    expect(Chain).toBeDefined();
    expect(Chain.Mainnet).toBe("ethereum");
  });

  it("can instantiate with a provider", () => {
    const provider = new ethers.JsonRpcProvider("https://rpc.example.com");
    const sdk = new OpenSeaSDK(provider, { chain: Chain.Mainnet });

    expect(sdk).toBeInstanceOf(OpenSeaSDK);
    expect(sdk.chain).toBe(Chain.Mainnet);
    expect(sdk.api).toBeDefined();
  });

  it("can instantiate with a wallet signer", () => {
    const provider = new ethers.JsonRpcProvider("https://rpc.example.com");
    const wallet = new ethers.Wallet(ethers.hexlify(ethers.randomBytes(32)), provider);
    const sdk = new OpenSeaSDK(wallet, {
      chain: Chain.Mainnet,
      apiKey: "test-key",
    });

    expect(sdk).toBeInstanceOf(OpenSeaSDK);
  });

  it("exposes trading methods", () => {
    const provider = new ethers.JsonRpcProvider("https://rpc.example.com");
    const sdk = new OpenSeaSDK(provider, { chain: Chain.Mainnet });

    expect(typeof sdk.createListing).toBe("function");
    expect(typeof sdk.createOffer).toBe("function");
    expect(typeof sdk.fulfillOrder).toBe("function");
    expect(typeof sdk.createCollectionOffer).toBe("function");
    expect(typeof sdk.cancelOrder).toBe("function");
    expect(typeof sdk.getBalance).toBe("function");
    expect(typeof sdk.transfer).toBe("function");
    expect(typeof sdk.wrapEth).toBe("function");
    expect(typeof sdk.unwrapWeth).toBe("function");
  });

  it("exposes API query methods", () => {
    const provider = new ethers.JsonRpcProvider("https://rpc.example.com");
    const sdk = new OpenSeaSDK(provider, { chain: Chain.Mainnet });

    expect(typeof sdk.api.getCollection).toBe("function");
    expect(typeof sdk.api.getNFT).toBe("function");
    expect(typeof sdk.api.getEvents).toBe("function");
    expect(typeof sdk.api.getAllListings).toBe("function");
    expect(typeof sdk.api.getAllOffers).toBe("function");
    expect(typeof sdk.api.getAccount).toBe("function");
  });

  it("supports all major chains", () => {
    expect(Chain.Mainnet).toBe("ethereum");
    expect(Chain.Polygon).toBe("polygon");
    expect(Chain.Base).toBe("base");
    expect(Chain.Arbitrum).toBe("arbitrum");
    expect(Chain.Optimism).toBe("optimism");
    expect(Chain.Avalanche).toBe("avalanche");
  });
});
