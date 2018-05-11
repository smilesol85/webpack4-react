import express from 'express'
import path from 'path';
import posts from './routes/posts'

// React
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../client/components/App'
import Html from './Html'
import WDM from './WDM'

const app = express();
const port = process.env.PORT || 3001;
const outputPath = 'dist';

// example
// app.get('/', (req, res) => {
//     res.send('Nice to meet u')
// });

app.use(WDM);
// app.use('/', express.static(__dirname + 'dist'));
// app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res, next) {

    let preloadState = {
        text: 'Hello React-SSR ! Server Side Rendering'
    };

    let renderProps = {
        preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
        // script: `http://localhost:${port}/${outputPath}/print.bundle.js`,
        script: `./${outputPath}/print.bundle.js`,
        appComponent: ReactDOMServer.renderToString(<App data={preloadState} />)
    };

    const html = ReactDOMServer.renderToStaticMarkup(<Html {...renderProps} />); // server-side Rendering

    res.send(`<!doctype html>${html}`);
});

app.get('/hello', (req, res) => {
    return res.send('This is hello page!!!');
});

// routes
app.use('/posts', posts);

app.listen(port, () => console.log(`listening on port ${port}`));