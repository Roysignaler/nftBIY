import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'BeHappyYou',
  tokenName: 'Be happy, you',
  tokenSymbol: 'BHY',
  hiddenMetadataUri: 'ipfs://QmPrLerKPrRQSE9YD9ZRLPiZY2dgqWYV3BnfYmUrVU4ot9/hidden.json',
  maxSupply: 636,
  whitelistSale: {
    price: 0.001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.002,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xF047d41a64FA6D118328657248A8C7b20e658497",
  marketplaceIdentifier: 'be-happy-you',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
