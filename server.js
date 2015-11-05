var http = require('http'),
      fs =require('fs');　//ファイルシステムモジュールの読み込み
var server = http.createServer();
var settings = require('./settings');
var msg;
console.log(settings);
server.on('request', function(req, res) {
  fs.readFile(__dirname + '/timerhtml/timer.html', 'utf-8', function(err, data){
    if(err){　//err=trueならNot Foundを返します。
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write("Not Found");
      return res.end();　
    }
    res.writeHead(200, {'Content-Type': 'text/html'});　//htmlファイルなんでhtml
    res.write(data);
    res.end();
  });

});
server.listen(settings.port,settings.host)
