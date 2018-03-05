"use strict";

var rxFromMysql = require('./rx-from-mysql');

var config = {
    host: '192.168.50.144',
    user: 'root',
    password: ''
};

const sql100Articles = 'select * from web.articulos limit 100';

var rowDataPacket$ = rxFromMysql(sql100Articles, config);

rowDataPacket$
    .map(function (next) {
        return {
            idArticulo: next['id_articulo'],
            nombreArticulo: next['nombre'],
        };
    })
    .filter(
        function (next) {
            return next.idArticulo < 1000;
        }
    )
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

