require('dotenv').config();
const { Connection, Keypair } = require('@solana/web3.js');
const { AnchorProvider, Wallet } = require('@project-serum/anchor');
const fs = require('fs');

// Cargar claves privadas desde el archivo
const walletKey = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(fs.readFileSync(process.env.WALLET_KEY_PRIVATE)))
);

// Configuración del proveedor Anchor
const connection = new Connection(process.env.RPC_URL, 'confirmed');
const provider = new AnchorProvider(connection, new Wallet(walletKey), {});

module.exports = provider;
