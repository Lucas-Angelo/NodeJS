var http = require("http");

http.createServer(function(requisicao, resposta) {

    resposta.end(`
        <h1>Servidor feito com pacote HTTP.</h1>
        <br>
        <p>lcs2001_@hotmail.com</p>`
    );

}).listen(8181); // Servidor Http rodando na porta 8181

console.log("Servidor iniciado");