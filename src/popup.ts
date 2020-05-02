import * as QRCode from 'qrcode';

chrome.tabs.query({
    active: true,
    currentWindow: true
}, tabs => {
    let tab = tabs.pop();
    if (tab) {
        QRCode.toCanvas(document.getElementById('canvas'), tab.url);
    }
});