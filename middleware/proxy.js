// const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = function (req, res, next) {
//   // Указание адреса вашего прокси-сервера
//   const target = 'http://10.10.10.96:3128'
//   const proxy = createProxyMiddleware({
//     target,
//     // Дополнительные параметры для аутентификации, если необходимо
//     auth: 'ismoiljon.abdulloev:far-1111',
//     changeOrigin: true
//   })

//   return proxy(req, res, next)
// }
const http = require('http');
const https = require('https');
const username = 'ismoiljon.abdulloev';
const password = 'far-1111';
const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

http.request({
  host: '10.10.10.96', // IP address of proxy server
  port: 3128, // port of proxy server
  method: 'CONNECT',
  path: 'https://jsonplaceholder.typicode.com/users:443', // some destination, add 443 port for https!
  headers: {
    'Proxy-Authorization': auth
  },
}).on('connect', (res, socket) => {
  if (res.statusCode === 200) { // connected to proxy server
    const agent = new https.Agent({ socket });
    https.get({
      host: 'https://jsonplaceholder.typicode.com/users',
      path: '/',
      agent,      // cannot use a default agent
    }, (res) => {
      let chunks = []
      res.on('data', chunk => chunks.push(chunk))
      res.on('end', () => {
        console.log('DONE', Buffer.concat(chunks).toString('utf8'))
      })
    })
  }
}).on('error', (err) => {
  console.error('error', err)
}).end();

