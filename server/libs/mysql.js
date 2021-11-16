const mysql = require('mysql')

class MySql {

    constructor() {
        this.connection = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'foton',
            connectionLimit : 10,
        })
        console.log("Connected to MySQL server")
    }

    query(query) {

        return new Promise((resolve, reject) => {
            this.connection.getConnection(function(err, connection) {
                if (err) reject(err) // not connected!

                // Use the connection
                connection.query(query, function (error, results, fields) {
                    // When done with the connection, release it.
                    connection.release();

                    resolve(JSON.parse(JSON.stringify(results)))

                    // Handle error after the release.
                    if (error) reject(err)
                })
            })
        })



        // return new Promise((resolve, reject) => {
        //     this.connection.query(query,(err, rows, fields) => {
        //         if (err) reject(err)
        //         resolve(JSON.parse(JSON.stringify(rows)))
        //     })
        // })

    }
}

module.exports = new MySql