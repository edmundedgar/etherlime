let chainIdToUrlMap = new Map();

chainIdToUrlMap.set(1, 'https://blockscout.com/etc/mainnet/api');
chainIdToUrlMap.set(77, 'https://blockscout.com/poa/sokol/api');
chainIdToUrlMap.set('monoplasma', 'LimeChain/etherlime-shape-monoplasma.git');
chainIdToUrlMap.set('chainLink', 'LimeChain/etherlime-shape-chainLink.git')

module.exports = { chainIdToUrlMap }