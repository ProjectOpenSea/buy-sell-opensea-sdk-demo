"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = exports.WALLET_ADDRESS = exports.walletMainnet = exports.ALCHEMY_API_KEY_MAINNET = exports.WALLET_PRIV_KEY = exports.OPENSEA_API_KEY = void 0;
const opensea_js_1 = require("opensea-js");
const ethers_1 = require("ethers");
exports.OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
exports.WALLET_PRIV_KEY = process.env.WALLET_PRIV_KEY;
exports.ALCHEMY_API_KEY_MAINNET = process.env.ALCHEMY_API_KEY;
let provider = new ethers_1.AlchemyProvider("homestead", exports.ALCHEMY_API_KEY_MAINNET);
exports.walletMainnet = new ethers_1.ethers.Wallet(exports.WALLET_PRIV_KEY, provider);
exports.WALLET_ADDRESS = exports.walletMainnet.address;
exports.sdk = new opensea_js_1.OpenSeaSDK(exports.walletMainnet, {
    chain: opensea_js_1.Chain.Mainnet,
    apiKey: exports.OPENSEA_API_KEY,
}, (line) => console.info(`MAINNET: ${line}`));
