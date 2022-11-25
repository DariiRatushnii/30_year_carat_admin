require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require("mysql2");


const app = express()
const router = express.Router();
const HOST = process.env.HOST
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(cors())
app.use('/api', require('./routes/action.route'))
// error handler
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Что-то пошло не так!'
    const responseCode = err.responseCode || '500'

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        responseCode: responseCode,
        stack: err.stack
    })
})

async function start() {
    try {
        const connection = mysql.createConnection({
            host: "localhost",
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DB,
            password: process.env.MYSQL_PASSWORD
        });

        app.listen(PORT, HOST, () => {
            console.log('PORT: ', PORT)
            connection.connect(function (err) {
                if (err) {
                    return console.error("Ошибка: " + err.message);
                }
                else {
                    console.log("Подключение к серверу MySQL успешно установлено");
                }
            });
        })
    } catch (error) {
        console.log('Error: ', error)
        process.exit(1)
    }
}

start()