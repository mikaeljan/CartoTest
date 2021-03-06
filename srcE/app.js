const express = require('express');
const mainRoutes = require('./routes');
const app = express();

// Load static files
app.use("/static", express.static('public'));
// Set templating engine to pug
app.set('view engine', 'pug');

app.use(mainRoutes);

// Simple error handling if an user types a route which is not yet implemented
app.use((req, res, next) => {
    const err = new Error("Oops!!! We are unable to fetch the site you requested. We apologize for the inconvenience.");
    err.status = 404;
    next(err);
});
app.use((err,req,res, next)=>{
    res.locals.error = err;
    console.error(err.message);
    console.error(err.stack);
    res.status(err.status);
    res.render('error');
});

app.listen(3000, ()=>{
    console.log("The application is running on localhost:3000!");
});