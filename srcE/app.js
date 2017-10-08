const express = require('express');

const app = express();

// Load static files
app.use("/static", express.static('public'));
// Set templating engine to pug
app.set('view engine', 'pug');

app.get("/", (req, res)=>{
    res.render("index", {
        title: "Code Test"
    });
});

app.get("/docs", (req, res)=> {
    res.render("docs", {
        title: "Documentation"
    });
});

app.get("/tutorial", (req, res)=> {
    res.render("tutorial", {
        title: "Tutorial"
    });
});

app.listen(3000, ()=>{
    console.log("The application is running on localhost:3000!");
});