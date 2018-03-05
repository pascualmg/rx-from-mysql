"use strict";

var Rx = require('rx');
const mysql = require('mysql');

function getMysqlConn(config) {
    var con = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password
    });
    return con;
}


function createRXObservableFromMySQLQuery(sql, config) {

    var con = getMysqlConn(config);

    var rowDataPacket$;
    return rowDataPacket$ = Rx.Observable.create(function subscribe(observer) {
        con.connect(function (errMysqlConnection) {
            if (errMysqlConnection) {
                observer.error(errMysqlConnection);
                observer.completed();
            }

            con.query(sql, function (errQuery, result) {
                if (errQuery) {
                    observer.error(errQuery);
                    return;
                }
                result.forEach(
                    function (value) {
                        observer.next(value);
                    }
                );
                observer.completed();
            });
            console.log('Connected!');
        });

        return function () {
            con.destroy();
        };
    });
}

module = module || {};//ES5 retro-compatibility
module.exports = createRXObservableFromMySQLQuery;
