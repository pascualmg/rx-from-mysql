"use strict";

var rxFromMysql = require('./rx-from-mysql');

var config = {
    host: '192.168.50.144',
    user: 'root',
    password: 'yourPassword'
};

var sql100Articles = 'select * from web.articulos limit 100';

var rowDataPacket$ = rxFromMysql(sql100Articles, config);

rowDataPacket$
    //.map
    //.filter
    .subscribe(
        function next(nextRowDataPacket) {
            console.log('next', nextRowDataPacket)
        },
        function (error) {
            console.log('ERROR', error);
        },
        function complete() {
            console.log('complete');
        }
    );

