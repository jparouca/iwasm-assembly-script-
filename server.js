const express = require('express')
const app = express();

express.static.mime.define({ 'application/wasm': ['wasm'] });
app.use(express.static('./'));
app.listen(3000, () => {
  console.log('http://localhost:3000');
});
