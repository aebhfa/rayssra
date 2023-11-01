const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/create-folder', (req, res) => {
    const folderName = req.body.folderName;
    fs.mkdir(folderName, (err) => {
        if (err) {
            res.send('Error creating the folder: ' + err.message);
        } else {
            res.send('Folder created successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
