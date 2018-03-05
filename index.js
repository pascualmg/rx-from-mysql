var rxFromMysql = require('./rx-from-mysql');

const sql100Articles = 'select * from web.articulos limit 100';

rowDataPacket$ = rxFromMysql(sql100Articles);
var xml = XMLDocument;
XMLDocument.addC
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

