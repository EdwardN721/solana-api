require('dotenv').config();
const fs = require('fs');
const anchor = require('@project-serum/anchor');
const provider = require('./anchorProvider');

// Cargar el IDL del programa
const idl = JSON.parse(fs.readFileSync(process.env.IDL_PATH));
const program = new anchor.Program(idl, process.env.PROGRAM_ID, provider);

module.exports = program;
