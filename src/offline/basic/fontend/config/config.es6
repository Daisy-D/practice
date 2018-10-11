/*
* 配置文件，配置端口号，文件名
*/
import path from 'path';
const CONFIG = new Map(); // 创建Map键值对
let a=path.join(__dirname,'..','public');
console.log(11,a)
CONFIG.set('port',8877);
CONFIG.set('staticDir',path.join(__dirname,'..','public'));
CONFIG.set('viewsDir',path.join(__dirname,'..','views'));

export default CONFIG;