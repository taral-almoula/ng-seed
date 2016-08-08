/**
 * Created by Sony on 8/6/2016.
 */
var express = require('express'),
    app = express();

app.get('/', function(req,res){
  res.sendfile(__dirname + '/src/index.html')
});


app.listen(3000, function(){
  console.log('I am listening...');
})
