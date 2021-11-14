require('dotenv').config()

const express = require("express")
const app = express()

const cookieParser = require('cookie-parser')
const cors = require('cors')

const mysql = require("./libs/mysql")

const catalogRoute = require("./routes/catalog.route")
const emailRoute = require("./routes/email.route")

const errorMiddleware = require("./middlewares/error.middleware")

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieParser())

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))


app.use("/catalog", catalogRoute)
app.use("/email", emailRoute)

app.use(errorMiddleware)

async function start() {
    try {
        await mysql.start()

        app.listen(PORT, () => {
            console.log(`server started on http://localhost:${PORT}`)
        })

    } catch (e) {
        console.log(e.message)
    }
}

start()