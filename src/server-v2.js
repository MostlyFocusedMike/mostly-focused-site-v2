/* FINAL */
const path = require('path');
const express = require('express');

const app = express();

/* middleware */
app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

/* set up static files router */
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/articles', (req, res) => {
    res.redirect('/');
});

/* start the app */
const port = process.env.PORT || 8000;
const host = '0.0.0.0';
app.listen(port, host, () => {
    console.log(`Go for http://localhost:${port}`);
});
