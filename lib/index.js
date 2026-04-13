//=======================================================//
import chalk from 'chalk';

// Membuat tulisan LUFFY besar dengan ASCII Art
const bigLuffy = `
${chalk.blueBright(' ██╗     ██╗   ██╗███████╗███████╗██╗   ██╗')}
${chalk.blueBright(' ██║     ██║   ██║██╔════╝██╔════╝╚██╗ ██╔╝')}
${chalk.cyanBright(' ██║     ██║   ██║█████╗  █████╗   ╚████╔╝ ')}
${chalk.cyanBright(' ██║     ██║   ██║██╔══╝  ██╔══╝    ╚██╔╝  ')}
${chalk.whiteBright(' ███████╗╚██████╔╝██║     ██║        ██║   ')}
${chalk.whiteBright(' ╚══════╝ ╚═════╝ ╚═╝     ╚═╝        ╚═╝   ')}
`;

console.clear(); // Bersihkan konsol agar rapi saat start
console.log(bigLuffy);
console.log(chalk.gray(" ═══════════════════════════════════════════"));
console.log(`${chalk.whiteBright(" • Status   :")} ${chalk.greenBright("Baileys Al Luffy Connected")}`);
console.log(`${chalk.whiteBright(" • Telegram :")} ${chalk.yellowBright("https://t.me/alluffystore")}`);
console.log(chalk.gray(" ═══════════════════════════════════════════\n"));

import makeWASocket from "./Socket/index.js";
//=======================================================//
export * from "./Defaults/index.js";
export * from "./WABinary/index.js";
export * from "../WAProto/index.js";
export * from "./WAUSync/index.js";
export * from "./Store/index.js";
export * from "./Utils/index.js";
export * from "./Types/index.js";
export * from "./WAM/index.js";
//=======================================================//
export { makeWASocket };
export default makeWASocket;
//=======================================================//
