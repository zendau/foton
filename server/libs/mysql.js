const mysql = require('mysql')

class MySql {

    query(query) {
        this.start()

        return new Promise((resolve, reject) => {
            this.connection.query(query,(err, rows, fields) => {
                if (err) reject(err)
                resolve(JSON.parse(JSON.stringify(rows)))
            })
        })

        this.destroy()
    }

    destroy() {
        this.connection.end()
    }

    start(){
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'foton'
        })

        this.connection.connect()

        console.log("Connected to MySQL server")
    }
}

module.exports = new MySql