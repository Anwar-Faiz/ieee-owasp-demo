const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

const path = require('path');
const fs = require('fs');

app.get('/readfile', (req, res) => {
    const filename = path.basename(req.query.file); // prevent directory traversal
    const fullPath = path.join(__dirname, 'files', filename);

    fs.readFile(fullPath, 'utf8', (err, data) => {
        if (err) {
            res.send('Error reading file.');
        } else {
            res.send(`<pre>${data}</pre>`);
        }
    });
});

app.listen(port, () => {
    console.log(`Vulnerable app listening at http://localhost:${port}`);
});
