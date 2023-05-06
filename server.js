const express = require("express");
const db= require("./routes/db-config");
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views","./views");
app.use(cookie());
app.use(express.json());
db.connect((err)=>{
    if(err) throw err;
    console.log("Database connected");
})
app.use("/",require("./routes/pages"));
app.use("/api",require("./controllers/auth"));
app.use("/js",express.static(__dirname+"/public/js"));
app.use("/css",express.static(__dirname+"/public/css"));
app.use("/assets",express.static(__dirname+"/public/assets"));
app.use("/images",express.static(__dirname+"/public/images"));

app.listen(PORT);
