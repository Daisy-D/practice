var http = require("http");
http.createServer(function (req, res) {
  // 定义HTTP头
  res.writeHead(200, {
    'Content-Type': 'text/plan'
  });
  // 发送响应数据
  res.end('Hello Daisy!\n');
}).listen(8787);
// 服务运行后输出一行信息
console.log('server is running...');
