const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;  //grab the app process

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

