const express = require('express')
const app = express();
app.listen(3000,function(){
    console.log('Opa, servidor rodando na porta 3000!');
});

app.get('/',function(req,resp){
    resp.send(
        `<html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Opa, tô por aqui já!</h1>
            </body>
        </html>
        `
    );

});