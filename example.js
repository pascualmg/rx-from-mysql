"use strict";
var rxFromMysql = require('./rx-from-mysql');

var config = {
    host: '192.168.1.1',
    user: 'root',
    password: 'yourSecretPassword'
};

var query = 'select * from web.articulos limit 100';

var rowDataPacket$ = rxFromMysql(query, config);

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

