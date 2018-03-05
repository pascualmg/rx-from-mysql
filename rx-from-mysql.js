var Rx = require('rx')
const mysql = require('mysql');

function createRXObservableFromMySQLQuery(sql) {

    const con = mysql.createConnection({
        host: '192.168.50.144',
        user: 'root',
        password: 'IhtqLg24vbAi'
    });

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

        return function(){
            con.destroy();
        };
    });
}

module = module || {};//ES5 retro-compatibility
module.exports =  createRXObservableFromMySQLQuery;
