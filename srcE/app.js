const express = require('express');

const app = express();

// Load static files
app.use("/static", express.static('public'));
// Set templating engine to pug
app.set('view engine', 'pug');

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/docs", (req, res)=> {
    res.render("docs");
});

app.get("/tutorial", (req, res)=> {
    res.render("tutorial", {});
});

app.listen(3000, ()=>{
    console.log("The application is running on localhost:3000!");
});