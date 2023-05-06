const express = require('express');
const loggedIn = require("../controllers/loggedin");
const logOut = require("../controllers/logout");
const router = express.Router();
router.get("/",loggedIn,(req,res)=>{
    if(req.user){
        res.render("index",{status:"loggedIn", user: req.user});
    }
    else{
        res.render("index",{status:"no", user: "nothing"});
    }
})

router.get("/login",(req,res)=>{
    res.sendFile("login.html",{root:"./public"});
})
router.get("/register",(req,res)=>{
    res.sendFile("register.html",{root:"./public"});
})
router.get("/logout",logOut);

router.get("/mycourse",(req,res)=>{
    res.sendFile("course.html",{root:"./public"});
    
});
router.get("/mycourse/discussions",(req,res)=>{
    res.sendFile("discussions.html",{root:"./public"});

})

module.exports = router;