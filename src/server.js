const express = require("express")
const app = express();

//Middleware
app.use(express.json())

//Endpoint Home
app.get("/api", (request, response) => {
    response.json({
        message: "Enpoint Home, Welcome"
    })
})

module.exports = app