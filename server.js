const express = require('express');
const app = express();
require('dotenv').config();

app.get('/api', (req, res) => {
    res.send(`Hi, Javed khan here......................what is your name ${process.env.NAME}`);
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});