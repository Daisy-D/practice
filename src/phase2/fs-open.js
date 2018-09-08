var fs = require('fs');
console.log("准备打开文件");
fs.open('data.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("打开文件成功",fd);
  // console.log(stats.isFile()); 
})