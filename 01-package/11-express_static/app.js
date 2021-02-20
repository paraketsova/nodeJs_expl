const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static('images')); //в линке после url ставим /assets/XXXXX.jpg - cm.нужное имя файла из папки 'image'
app.use('/pages', express.static('landing-page')); // в линке после url ставим /pages/XXXXX.html - cm.нужное имя файла из папки 'landing-page'

app.listen(port, () => console.log(`listening on port ${port}!`));
