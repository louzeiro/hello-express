var express = require("express");
var app = express();
var path = require("path"); /* por essa lib temos o __dirname */

app.use(express.static("public"));  /* avisando ao express que o app usará arquivos estaticos, como o css e a imagem*/

/* A home do app é representada pela '/' 
 o get é o metodo de que pega a requisicao do user
 nesse caso, quando o user acessa o localhost:8081
 ele realiza uma requisição e recebe como resposta 
 o que está contido na res
*/
/* o get recebe as requisicoes */
app.get("/index", function(req, res){
    res.sendFile(__dirname + "/public/page/index.html");
});

app.get("/contato", function(req,res){
    res.sendFile(__dirname + "/public/page/contato.html");
});

app.get ("/sobre", function(req, res){
    res.sendFile(__dirname + "/public/page/sobre.html");
});

app.listen(8081, function(){
    console.log("Rodooooooooooooou, o servidor Express está UP =D")
});


