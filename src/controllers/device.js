const program = require('../utils/solanaProgram');
const { Keypair, SystemProgram } = require('@solana/web3.js');

// Agregar un dispositivo
exports.addDevice = async (req, res) => {
  try {
    const { registryPubkey, deviceName, deviceDescription } = req.body;

    if (!deviceName || !deviceDescription) {
      return res.status(400).json({ error: "Nombre y descripción son obligatorios." });
    }

    const deviceKey = Keypair.generate();
    const tx = await program.methods
      .addDevice(deviceName, deviceDescription)
      .accounts({
        registry: registryPubkey,
        device: deviceKey.publicKey,
        user: program.provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([deviceKey])
      .rpc();

    res.json({ message: "Dispositivo agregado con éxito.", tx, deviceKey: deviceKey.publicKey.toString() });
  } catch (error) {
    res.status(500).json({ error: "No se pudo agregar el dispositivo." });
  }
};
