const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const BUILD_DIR = path.join(__dirname, './../frontend/dist');
const HTML_ROOT_PATH = path.join(__dirname, './../frontend/index.html');

// webpack build dir
app.use(express.static(path.resolve(BUILD_DIR)));

app.get('*', (req, res) => {
    console.log('ping');
    console.log('BUILD_DIR: ', BUILD_DIR);
    res.sendFile(HTML_ROOT_PATH)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))