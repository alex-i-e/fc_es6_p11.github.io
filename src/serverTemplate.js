export default (body, preloadedState) => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="manifest" href="static/manifest.json">
        <link rel="shortcut icon" href="static/favicon.ico"><title>React App</title>

        <link href="static/css/main.e5f154b2.css" rel="stylesheet">

    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${body}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
        </script>
        <script type="text/javascript" src="static/js/main.a4cbc3bc.js"></script>
    </body>
</html>`;
