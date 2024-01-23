"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = exports.WALLET_ADDRESS = exports.RPC_PROVIDER_MAINNET = exports.ALCHEMY_API_KEY_MAINNET = exports.WALLET_PRIV_KEY = exports.OPENSEA_API_KEY = void 0;
const opensea_js_1 = require("opensea-js");
const ethers_1 = require("ethers");
exports.OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
exports.WALLET_PRIV_KEY = process.env.WALLET_PRIV_KEY;
exports.ALCHEMY_API_KEY_MAINNET = process.env.ALCHEMY_API_KEY;
exports.RPC_PROVIDER_MAINNET = new ethers_1.ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${exports.ALCHEMY_API_KEY_MAINNET}`);
const walletMainnet = new ethers_1.Wallet(exports.WALLET_PRIV_KEY, exports.RPC_PROVIDER_MAINNET);
exports.WALLET_ADDRESS = walletMainnet.address;
exports.sdk = new opensea_js_1.OpenSeaSDK(walletMainnet, {
    chain: opensea_js_1.Chain.Mainnet,
    apiKey: exports.OPENSEA_API_KEY,
}, (line) => console.info(`MAINNET: ${line}`));
