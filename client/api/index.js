require('dotenv').config()

const express = require("express")
const app = express()

const cookieParser = require('cookie-parser')
const cors = require('cors')

const catalogRoute = require("./routes/catalog.route")
const emailRoute = require("./routes/email.route")
const adminRoute = require("./routes/admin.route")

const errorMiddleware = require("./middlewares/error.middleware")

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieParser())

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))

app.use(errorMiddleware)

app.use("/catalog", catalogRoute)
app.use("/email", emailRoute)
app.use("/admin", adminRoute)



module.exports = app

async function start() {
    try {

        app.listen(PORT, () => {
            console.log(`server started on http://localhost:${PORT}`)
        })

    } catch (e) {
        console.log(e.message)
    }
}

//start()
