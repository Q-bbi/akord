const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({ width: 1100, height: 800, title: 'אקורדים' });
  w.loadFile(path.join(__dirname, 'app', 'index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
