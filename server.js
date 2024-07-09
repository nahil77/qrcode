const express = require('express');
const QRCode = require('qrcode');
require('dotenv').config();

const app = express();
const port = process.env.PORT ;


const details = `
Name:Mohammed Nahil
state:Kerala
District:Thrissur
`;

app.get('/', (req, res) => {
    QRCode.toDataURL(details, (err, url) => {
        if (err) {
            res.send('Error occurred');
        } else {
            res.send(`
                <h1>QR Code Generator</h1>
                <p>Scan this QR code to get the details:</p>
                <img src="${url}" alt="QR Code">
            `);
        }
    });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
