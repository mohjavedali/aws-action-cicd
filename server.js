const express = require('express');
const app = express();
const port = 8000;


app.get('/api', (req, res) => {
    res.send('Hi, I am here..........what is thisi');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});