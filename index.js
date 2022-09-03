const express = require("express");
const mongoose = require ("mongoose");

const app = express()
const url = "mongodb+srv://toknow-admin:toknow123@toknow.zlfpvbh.mongodb.net/toknow"
mongoose.connect(url)
.then( () => {
    console.log( "DB connected")
    app.listen( 8080, ( request, response ) => {
        console.log("Our server is listening")
    })
})
.catch ( ( err ) => {
    console.log(err)
})

