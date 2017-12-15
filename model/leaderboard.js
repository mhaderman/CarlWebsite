var db = require('./db_connection.js'); var mysql = require('mysql');
 /* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config); exports.getAll = function(render_page) {
    var query = 'select username, total_kills, total_deaths from game_rank LEFT JOIN game_account on game_rank.account_id = game_account.account_id order by total_kills DESC;';
    connection.query(query, function(err, result) {
        render_page(err, result);
    });
};
