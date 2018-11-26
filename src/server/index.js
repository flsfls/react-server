import express from 'express';
import { render } from './util';
import proxy from 'express-http-proxy'

const app = express();
app.use(express.static('public'))

// const content = renderToString(<Home />);

// http://47.95.113.63
// app.use('/api', proxy('www.google.com', {
//   proxyReqPathResolver: function(req) {
//     // return new Promise(function (resolve, reject) {
//     //   setTimeout(function () {   // simulate async
//     //     var parts = req.url.split('?');
//     //     var queryString = parts[1];
//     //     var updatedPath = parts[0].replace(/test/, 'tent');
//     //     var resolvedPathValue = updatedPath + (queryString ? '?' + queryString : '');
//     //     resolve(resolvedPathValue);
//     //   }, 200);
//     // });
//     return new Promise(function (resolve) { 
//       resolve('hahaha');
//     }); 
//   }
// }));

app.use('/api', function(req, res) {
  res.send('hahaha')
})

app.get('*', function (req, res) { 
  // res.send(render(req))
  render(req, res)
});

var server = app.listen(3009, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://', host, port);
});