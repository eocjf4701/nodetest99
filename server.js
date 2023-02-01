const http = require("http");
const app = http.createServer((request, response) => {
  const _url = request.url;
  const fullUrl = new URL("http://localhost:3000" + _url);
  const pathName = fullUrl.pathname;
  
if (pathName === "/") {
    response.writeHead(200, { "Content-Type": "text/html;charset= utf-8" });
    response.end(`<h1>테스트 페이지</<h1>`);
  }
});

app.listen(3000, () => {
  //포트번호 3000으로 서버 구동
  console.log("서버 시작 주소: http:localhost:3000");
});