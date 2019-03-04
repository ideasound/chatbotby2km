const os = require('os');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Send OK!');
});

app.listen(process.env.PORT, () => {
    console.log("Node Started!");
});