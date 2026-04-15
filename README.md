# buy-sell-opensea-sdk-demo

Demo project showing how to create listings and offers using [`@opensea/sdk`](https://github.com/ProjectOpenSea/opensea-js).

See the full guide at **[docs.opensea.io/docs/buy-sell-nfts](https://docs.opensea.io/docs/buy-sell-nfts)**.

## Setup

```bash
npm install
```

Create a `.env` file (or export the variables) with:

```
OPENSEA_API_KEY=your_api_key
WALLET_PRIV_KEY=your_wallet_private_key
ALCHEMY_API_KEY=your_alchemy_api_key
```

You can get an OpenSea API key instantly:

```bash
curl -s -X POST https://api.opensea.io/api/v2/auth/keys | jq -r '.api_key'
```

## Usage

Edit the placeholder values in `src/createListing.ts` or `src/createOffer.ts`, then run:

```bash
npm run createListing
npm run createOffer
```

## Tests

```bash
npm test
```

Tests verify that the project compiles, SDK imports resolve correctly, and the demo scripts match the current `@opensea/sdk` API surface.
