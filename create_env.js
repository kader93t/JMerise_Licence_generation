const fs = require('fs');
const writeVEnv = async (dateDebut, dateFin, key, callBack) => {
  await fs.writeFile(
    './.env',
    `DATE_DEB=${dateDebut}\nDATE_FIN=${dateFin}\nKEY=${key}`,
    callBack
  );
};

module.exports = writeVEnv;
