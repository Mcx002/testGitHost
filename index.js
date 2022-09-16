const express = require("express")

const port = 3000
const app = express()

app.get("/", (req, res) => {
    res.json({
        main: "hi gais welcome to my api",
    })
})

app.listen(port, () => console.log("this is my personal api website"))