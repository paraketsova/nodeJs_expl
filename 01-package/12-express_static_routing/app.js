const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static('landing-page/assets'));

app.get('/', (request, response) => {
    response.sendFile('./landing-page/home.html', { root: __dirname });
});

app.get('/about', (request, response) => { //если в адресной строке localhost:3000/assets/about
    response.sendFile('./landing-page/about.html', { root: __dirname }); // получаем файл about.html, лежащий где указано
});

app.get('/contact', (request, response) => {  //если в адресной строке localhost:3000/assets/contact
    response.sendFile('./landing-page/contact.html', { root: __dirname });
});


app.listen(port, () => console.log(`listening on port ${port}!`));
