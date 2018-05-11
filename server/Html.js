import React from 'react';

const Html = ({ preloadState, script, appComponent }) => (
    <html className="no-js" lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>React Server-Side Rendering Title</title>
            <script dangerouslySetInnerHTML={{ __html: preloadState }}></script>
        </head>
        <body>
            <div id="app" dangerouslySetInnerHTML={{ __html: appComponent }} />
            {/* <script src={script} /> */}
        </body>
    </html>
);

export default Html;