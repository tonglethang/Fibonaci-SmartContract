import express from 'express';
import route from './server/route.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import engines from 'consolidate';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5035;



app.use(express.static('public'));
app.use('/js', express.static(__dirname + 'public/js'));
// app.engine('html', require('ejs').renderFile);
// route(app)
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});
// app.use('/', mainRoutes);