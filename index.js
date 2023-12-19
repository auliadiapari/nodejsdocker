const express = require('express');

const app = express()
const port = process.env.SERVER_PORT || 8080

app.get("/", (_, res) => {
    let name = process.env.SERVER_OWNER_NAME
    console.log(name)
    if (name == undefined) {
        name = "undefined"
    }

    res.send(`Hello ${name}`)
})

app.listen(port, () => {
    console.log(`server is listening at port ${port} `)
})