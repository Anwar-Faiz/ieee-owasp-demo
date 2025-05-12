const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
    const ip = req.query.ip;
    exec(`ping -c 2 ${ip}`, (error, stdout, stderr) => {
        if (error) {
            res.send(`Error: ${stderr}`);
        } else {
            res.send(`<pre>${stdout}</pre>`);
        }
    });
});

app.listen(port, () => {
    console.log(`Vulnerable app listening at http://localhost:${port}`);
});
