import express from 'express';
import { render } from './util';
import proxy from 'express-http-proxy'
import { matchRoutes, renderRoutes } from "react-router-config";
import Routes from "../Routes";
import { getStore } from "../store";
import { resolve } from 'uri-js';

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
  // res.send(render(req))、
  const store = getStore(req);
  const matchedRoutes = matchRoutes(Routes, req.path);
  // console.log(matchedRoutes);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      // promises.push(item.route.loadData(store));
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  });


  Promise.all(promises).then(() => {
    const context = {}
    const html = render(store, Routes, req, context);
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    }else if (context.Not_Found) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  }).catch(() => {
    // res.end('sorry requse err')
  })
});

var server = app.listen(3009, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://', host, port);
});