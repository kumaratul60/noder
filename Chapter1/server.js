const http = require("http");
//   const http = require("node: http");

/*
if any package come with node core pkg or native module of node, then use like  require("node: http");
*/

const server = http.createServer(function (req, res) {
  //   res.write("hello");
  console.log({ res });

  if (req.url === "/getData") {
    res.end("no data");
  } else {
    res.end("hello world"); // sending the response of the request
  }
});
server.listen(1111);


