//预定义数据
var PORT = 4000,
    data = [
        { author: 'Pete Hunt', text: 'This is one comment.' },
        { author: 'Jordon Walke', text: 'This is another comment.' }
    ];

var headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080'
};

var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.method == 'POST') {
        console.log('info: Server get a POST Request.');
        req.on('data', function (req_data) {
            console.log('POST Request data: ' + req_data);
            req_data = JSON.parse(req_data);
            data = data.concat([req_data]);
            console.log('Data sent to client: ' + data);
        });

    } else {
        console.log('info: Server get a GET Request.');
    }
    //数据处理
    var dataString = JSON.stringify(data);
    //发送数据给客户端
    res.writeHead(200, headers);
    res.write(dataString);
    res.end();
}).listen(PORT);

console.log('Server running at port ' + PORT + '.\n' + 'Press "Ctrl+C" to end.');