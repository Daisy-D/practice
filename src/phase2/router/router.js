function route(pathname, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  if (pathname == '/') {
    response.write("Hello World");
  } else if (pathname == "/a/b") {
    response.write("Hello World!!!!");
  }else{
    response.end('404');
  }
  response.end();
}

exports.route = route;