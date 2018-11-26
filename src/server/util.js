import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import Routes from "../Routes";
import { getStore } from "../store";
import { Provider } from "react-redux";
import { matchRoutes } from "react-router-config";
import proxy from 'express-http-proxy'

export const render = (req, res) => {
  const store = getStore();
  const matchedRoutes = matchRoutes(Routes, req.path);
  // console.log(matchedRoutes);
  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
    // item.route.loadData(store)
  });
  // console.log('store============', store.getState())

  Promise.all(promises).then(() => {
    console.log('store', store.getState())
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter context={{}} location={req.path}>
          <div>
            {Routes.map(route => (
              <Route {...route} />
            ))}
          </div>
        </StaticRouter>
      </Provider>
    );

    res.send(`<html>
      <body>
        <div id=root>${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src='/index.js'></script>
      </body>
    </html>`);
  })

  // 先调试客户端请求数据的情况
  // const content = renderToString(
  //   <Provider store={store}>
  //     <StaticRouter context={{}} location={req.path}>
  //       <div>
  //         {Routes.map(route => (
  //           <Route {...route} />
  //         ))}
  //       </div>
  //     </StaticRouter>
  //   </Provider>
  // );
  // res.send(`<html>
  //     <body>
  //       <div id=root>${content}</div>
  //       <script>
  //         window.context = {
  //           state: ${JSON.stringify(store.getState())}
  //         }
  //       </script>
  //       <script src='/index.js'></script>
  //     </body>
  //   </html>`);
};
