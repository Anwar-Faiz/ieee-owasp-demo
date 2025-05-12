const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 4400;


app.get('/readfile', (req, res) => {
    const filename = req.query.file;
    exec(`cat ${filename}`, (error, stdout, stderr) => {
        if (error) {
            res.send(`Error reading file: ${stderr}`);
        } else {
            res.send(`<pre>${stdout}</pre>`);
        }
    });
});

app.listen(port, () => {
    console.log(`Vulnerable app listening at http://localhost:${port}`);
});
