const express = require('express');
const app = express();
const port = 8000;


app.get('/api', (req, res) => {
    res.send('Hi, Javed khan here');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});