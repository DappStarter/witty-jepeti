require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stove crawl screen purse hard light army genre'; 
let testAccounts = [
"0x982f61f4bbe3c802ad023adfa7ca3131654d953272c9d35c13085ee004cbae47",
"0xef18b90627bdb1545106f8824d3588653f92076bf3ea204e5d6af85041c91195",
"0x3e4a79454631d6fd03b09a733b18d36ee500064bd424a3742e8f956e68c3e3a6",
"0x227e77999b76a6fcb5c12cfe252e7be23c11618410657441b0cc6d48a791ee28",
"0x38ca650d6abb86eb3111aa07c127bb8ff5e850ebf2e38381acc967832257e619",
"0x4e4f53c95e979864a000d5095cd54afee97320a4b75913e0aa4824b1ada12ade",
"0x6ac46aea10524c7c58771c6c4a89fca00fe447282c394c5a58c5c71c3f376a5d",
"0x90b011bca33971a84505ab27cdaf140b0351597d71fa108068f9a199f8d4299e",
"0x8f2901dfb31ba4089995f60fb4252e53d77692878068338ea4eb8f5a6d2e823d",
"0x1b1ddc8dd7ad2680bc559526b8f8c2b84c5ddc528c60026eb493d52b66710004"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
