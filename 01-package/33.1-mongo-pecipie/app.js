const express = require('express');
const app = express();
const monk = require('monk');
const db = monk('localhost:27017/nodetest1');
app.use((req, res, next) => {
    req.db = db;
    next();
})
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    const recipies = req.db.get('recipies');
    recipies
        .find()
        .then(data => {
            res.render("index.ejs", {recipies: data});
        })
})
app.post("/addpost", (req, res) => {
    const recipies = req.db.get('recipies');
    // console.log(req.body);
    const ingredients = []
    for (let i=0; i < req.body.name.length; i++) {
        let ingredient = {
            name: req.body.name[i],
            amount: req.body.amount[i],
            unit: req.body.unit[i]
        }
        ingredients.push(ingredient);
    }
    recipies.insert({
        recipie: req.body.recipie, 
        method: req.body.method,
        ingredients: ingredients
    });
    res.redirect('/');
})
app.get("/edit/:id", (req, res) => {
    const recipies = req.db.get('recipies');
    recipies
        .find({ _id: req.params.id })
        .then(data => {
            if (1 == data.length) {
                res.render("edit.ejs", data[0]);
                // add stuff!"#!"#!"#!"#!"#!"
            } else {
                res.redirect('/');
            }
        })
})
// app.post("/savededit", (req, res) => {
// })
app.get("/delete/:id", (req, res) => {
    const recipies = req.db.get('recipies');
    recipies.remove({ _id: req.params.id });
    res.redirect('/');
})
app.listen(3000);