const express = require('express');
const router = express.Router();


router.get("/", (req, res)=>{
    res.render("index", {
        title: "Code Test"
    });
});

router.get("/docs", (req, res)=> {
    res.render("docs", {
        title: "Documentation"
    });
});

router.get("/tutorial", (req, res)=> {
    res.render("tutorial", {
        title: "Tutorial"
    });
});

module.exports = router;