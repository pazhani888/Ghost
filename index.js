const express = require('express');
const ghost = require('ghost');

const app = express();
const port = process.env.PORT || 3000;

// Ghost expects to run from a content folder inside /var/lib/ghost or current dir
ghost({ config: path.join(__dirname, 'config.development.json') })
  .then(ghostServer => {
    app.use(ghostServer.rootApp);
    ghostServer.start(app, port);
    console.log(`Ghost blog is running on port ${port}`);
  })
  .catch(err => {
    console.error('Ghost failed to start:', err);
    process.exit(1);
  });
