const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const https = require("https");

function getJokes(limit_value, term_value = "", post_response) {

    const options = {
        hostname: "icanhazdadjoke.com",
        path: `/search?limit=${limit_value}&term=${term_value}`,
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);

        let data = '';

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            const parsedData = JSON.parse(data);
            let HTMLjokes = `<h1>List for searchterm: ${term_value} and amount: ${limit_value}</h1></br>`;
            let counter = 0;
            parsedData.results.forEach(item => {
                counter ++;
                HTMLjokes += `<span>Joke #${counter} </span>`;
                HTMLjokes += `<span>${item.joke}</span></br></br>`;
            });
            post_response.send(HTMLjokes);
        });
    });

    req.on("error", (error) => {
        console.error(error);
    });

    req.end();
};

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/joke.html'));
});

app.post('/jokes', (req, res, ) => {
    getJokes(req.body.limit, req.body.term, res);
});

app.listen(3000);
