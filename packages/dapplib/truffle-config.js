require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strike rival saddle concert hunt drink equal general'; 
let testAccounts = [
"0xf521fee313e9951f8764a5c441f0621e4f1f16840e8a4925084ecdf3f9d24d70",
"0x7c5064108ef3ea4a0666cc116d8a4cdd870d00e0b33df05a96aebd06568684e2",
"0xfee9c839ad7355cd63b8813f985d9056a83cc0134ac9b195715eef1da7969acd",
"0x63c77578ea49e93c24b02e372f35b90f3c9e3a957e284931bdba307684da2178",
"0x66229d287877e87a708dbf53fe364fbd084d4e1efab17801a7175ec9119d3098",
"0x50a3b6866fb7a173a2b30d8727155299cddd9d2d1969a7f321c7fdd55920178e",
"0x8da9b1b2fc5cfbd8b1789895cd9d38858939fea06303f7bf9bd36b5a82eb122d",
"0xb018b4a856f818d165d9de4392e777d5e2b565ee173c615b3864dba756c712fb",
"0xb150021e794779baaa39b3052e433394de6231706416616f35952155da900b8c",
"0x3396f6050b778d614880f6c57618a2e6858dc074cd4339045fc96eddb2add2f1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


