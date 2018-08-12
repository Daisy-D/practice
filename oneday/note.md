## 一、文件夹不能驼峰命名（驼峰命名命令行cd的时候会来回切大小写，容易出问题）；

## 二、image可以用来测网速和上传数据，详见demo1、demo2
#### navigator.sendBeacon() 方法可用于通过HTTP将少量数据异步传输到Web服务器。
#### window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。

## 三、同源、跨域
http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html
### 1.同源策略（协议、域名、端口相同）；
  ①80是默认端口，可省略；
  ②www.xxx.com和xxx.com不同源，域名不同，子域和主域不同源;
  ③不同域名不能访问对应的Cookie、localStorage、IndexedDB、DOM无法获得，AJAX请求不能发送；提交表单不受同源策略影响。
### 2.localStorage（同步）、IndexedDB(50M，异步)、web SQL(50M，异步)；
### 3.同源才能共享Cookie，一级域名相同，二级域名不同，可以设置document.domain共享Cookie；
  w1.xxx.com和w2.xxx.com是一级域名相同，二级域名不同；
### 4.设置同源策略：
  若A：baike.baidu.com, B:image.baidu.com;
  B想访问A的Cookie，则设置A的document.domain=‘.baidu.com’;
  若想相互访问，则都设document.domain=‘.baidu.com’;
### 5.可以js加载个图片，用Date.now()取两个时间相减测网速；
### 6.css攻击XXS之类的；
### 7.突破同源策略：
#### html标签：\<img>、\<script>（jsonp，只能get请求）、\<iframe>、\<link>（background）;
### 8.jsonp原理：利用\<script>的跨域能力，用参数 把数据带回来；
### 9.border-img

## 四、window.postMessage，允许跨窗口通信，不论是否同源；
#### 父窗口：http://aaa.com,子窗口：http://bbb.com:8888
#### 父窗口打开子窗口var A = window.open(‘http://bbb.com:8888','title');
#### 父窗口向特定子窗口发消息：
#### A.postMessage(‘儿砸~’,'http://bbb.com:8888’) ；window.postMessage（消息内容，协议+域名+端口）
#### 父窗口向所有子窗口发消息:
#### A.postMessage(‘儿砸们~’,*)
#### 子窗口向父窗口发消息：
#### window.opener.postMessage(‘papa’,’http://aaa.com‘)

## 五、高阶跨域WebSocket、postMessage（iframe、image）、把js压缩成img
https://www.jb51.net/article/102767.htm

## 六、CORS(跨资源分享)，跨源AJAX请求的根本方法，允许任何类型的请求；

## 七、CSS远程攻击漏洞
### 1.xss攻击
### 2.可以用befor、after、阴影等减少dom的使用，使网站加载速度变快。GPU
  一个dom有一百个事件，所以就很慢。

## 八、语义化
#### 标签语义化
#### logo用h1标签包一下