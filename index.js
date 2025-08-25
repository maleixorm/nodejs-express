const express = require('express');
const app = express();
const path = require('path');
const users = require('./users');
const port = 3000;

const checkAuth = function(req, res, next) {
    req.authStatus = false;

    if (req.authStatus) {
        console.log("Está logado. Pode continuar!");
        next();
    } else {
        console.log("Não está logado! Faça o login para continuar!");
        next();
    }
}

// app.use(checkAuth);

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const basePath = path.join(__dirname, 'templates');

app.use('/users', users);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});