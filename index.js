const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const basePath = path.join(__dirname, 'templates');

const checkAuth = function(req, res, next) {
    if (req.authStatus) {
        console.log("Está logado. Pode continuar!");
    } else {
        console.log("Não está logado! Faça o login para continuar!");
    }
}

app.use(checkAuth);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})