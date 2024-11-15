const program = require('../utils/solanaProgram');
const { Keypair, SystemProgram } = require('@solana/web3.js');

// Crear un registro
exports.createRegistry = async (req, res) => {
  try {
    const { registryName } = req.body;

    if (!registryName || registryName.length > 64) {
      return res.status(400).json({ error: "El nombre del registro es inválido." });
    }

    const registryKey = Keypair.generate(); // Generar clave pública del registro
    const tx = await program.methods
      .createRegistry(registryName)
      .accounts({
        registry: registryKey.publicKey,
        user: program.provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([registryKey])
      .rpc();

    res.json({
      message: "Registro creado con éxito.",
      tx,
      registryKey: registryKey.publicKey.toString(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRegistry = async (req, res) => {
  try {
    const { registryPubkey } = req.params;
    const registryAccount = await program.account.registry.fetch(registryPubkey);

    res.json({
      name: registryAccount.name,
      deviceCount: registryAccount.deviceCount,
      deviceIds: registryAccount.deviceIds.map((pubkey) => pubkey.toString()),
    });
  } catch (error) {
    res.status(500).json({ error: "No se pudo obtener el registro." });
  }
};
