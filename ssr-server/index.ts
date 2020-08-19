import compression from 'compression';
import express from 'express';

import { middleware } from './middleware';

const app = express();

app.use(compression());

// Expose the public directory as /dist and point to the browser version
app.use(express.static(`${__dirname}/../client`, {index: false}));

// Anything unresolved is serving the application, let react-router do routing
app.get("/*", middleware);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});