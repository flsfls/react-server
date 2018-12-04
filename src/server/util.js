import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { Helmet } from 'react-helmet'

export const render = (store, Routes, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>
          {
            renderRoutes(Routes)
          }
        </div>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic()
  // const cssStr = context.css ? context.css : ''
  const cssStr = context.css.length ? context.css.join('\n') : ''

  return `<html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <style>${cssStr}</style>
    </head>
    <body>
      <div id=root>${content}</div>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src='/index.js'></script>
    </body>
  </html>`

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
