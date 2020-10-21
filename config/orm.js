var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName) {
        connection.query("SELECT * FROM ??" + tableName + ";",
            function (err, res) {
                if (err) throw err;
                console.log(res);
            });
    },

    insertOne: function (tableName, columnName) {
        connection.query("INSERT INTO " + tableName + "VALUES " + columnName + ";",
            function (err, res) {
                if (err) throw err;
                console.log(res);
            });
    },

    updateOne: function (tableName, columnName, boolean, condition) {
        connection.query("UPDATE" + tableName + "SET" + columnName + " = " + boolean + "WHERE" + condition + ";",
            function (err, res) {
                if (err) throw err;
                console.log(res);
            });
    }
}

module.exports = orm;