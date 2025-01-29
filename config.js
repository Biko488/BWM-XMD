const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xKHwVUxKquGi6CXFREUXRqHgIETXPtEKCxy3+foi/VZ6rmnOnhKZWEtVfWWnu/grzAFbJQB+avoCS4gRT1S9qVCMyBXMcxIoABEaQQzEHrqHlx6ILylHn7VSU7dZ0cLEJc7mg6+XarBWV1lWdtlySP4M6Asg5SHP4G8LxUsb42nkXLDA7+afni7nxpW5uVXgs15HB+um20PMVLTXoE9x4RYoLzy6K8ogwRmFqocyAm36MfmhYXelsWb9YG13gzOXL11CnPw2jgCNSUIn1bpEHqT5PRN+nn3P5mKpG/LLaheMkKMfSe96lFTE2pA+NAfL9pFuQ8PXjv9Ct8yVFkRCinmHbf1l3ZtJIwOZmnw8aPLGe75g52dLXV0SJFHSKbiSX78LSvl8v2e8QjeVCry6qunHUn4lZsXfVZ9K5kdVpc+eH+aLf+YlParnH5B3GHfGYl+T+6e47bVMOWTa72OD7u9xmdsFEjSun2Yl0aR4alOUN1TNHC+x59rVs2fM7PjnboLOC23ohQ2HFGaNfX82qxS233KsaXCd7pqy/6kNbkdyyhFqv+0z4ZaJK3rSckHE2stMH1AS12YypIJdK5aOjGBhTOE7vxKMpnLrypuq5aZYOTXE0jEZ9eGmO6bkU9zXDWKtLj24sS1BkRmLN3BhB0wRUlkOIi7/c4lmcAjJodCgmib/KCWLw560AaxMFMnN4UzzmyN8uUV+VJNomygXC8kndHZMw07xEwoCRFiKoKRUtc0YJ0K1RV8IIqMP/zLwbk6IW+G9eX41kGxJhU1MvrMi1g9Onq5yEMw6LO6a7LQ6VfIALmo69tRCnOL1WvY51DEl5xg5QrpBWYxzCt0J0BEWpwiHo8sFZl5B/iyV6yEA5LMRjTB7vtKV+L/P0Ki0Y8QlPhAY240cM4EvgHUYTsgzgLpkLEo5CNBMAA/NEz/T+/tNA2xdZw9FkwicX2NgvHjTi8PmvaJVm82fCuPSIoAnNKasSAAIZJXe6LBOW/wZUD+dCp4mp9IuaIT25BhW0FD27GqPgJ991TMH/9mlNKEfV4E11ZKuZSBwzI3iKI+5dzk7HAjTl+yk7FOTv7o/rR9kLCsvyRIwoYkMP+NlhB0sG+zIcHPUCEKMRp1c8Gc3DIkKQvDLibCK2uS8ZFUi4S+PLsM/zv4XqanIf+otjZ6eDmywJOzGl0tuzjk2BrWvvS1IIQk/FplW5nj/8CAuZAKIrD04nnigbdMi7Qb4W19d1Yi1eB6S8u6ZZD4+IyxHmtRp7opn4armufjf0N6bDrnoT65XnXumXEHZRM3cYbVzrLfad8ZufnYpoB68UIqflUkZfCiiS6oaPBKhY5OnXy1hZ5D3fa0hge6zRRr60nGe7UUMmmc9FNeIpUWg5lrcyt9DaQkGdO6vpJ+mjLt7GQfoxj/NYwrx9JizF6m24fHvynV1+hH92ZnzA+5uWvgnUaHGP2xVrgSVyxLRqXCsqPO8wWg+7FDVeBUA/46UBXTc8B9/tfDChTSOOCZGAOqiyAgAEprKj01bR7nKGKwqwEc1bgZyzPCjzHgKyTynJHIf3sdSD136bIwP1v2luT/wcIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

