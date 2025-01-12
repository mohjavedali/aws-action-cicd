const express = require('express');
const app = express();
const port = 8000;


app.get('/', (req, res) => {
    res.send('Ci cd done successfully');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});