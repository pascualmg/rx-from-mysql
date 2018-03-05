var createRXObservableFromMySQLQuery = require('./createRXObservableFromMySQLQuery');


const sqlOwnersAfolo = `
    SELECT a.id_articulo, cr.nombre 
    FROM web.articulos a 
    INNER JOIN web.familias_responsables fr ON a.id_familia = fr.id_familia 
    INNER JOIN web.compras_responsables cr ON fr.id_compras_responsables = cr.id_compras_responsables`;

const sqlOwnersGrouped = 'SELECT cr.nombre FROM web.articulos a INNER JOIN web.familias_responsables fr ON a.id_familia = fr.id_familia INNER JOIN web.compras_responsables cr ON fr.id_compras_responsables = cr.id_compras_responsables group by cr.nombre';
const sql100Articles = 'select * from web.articulos limit 100';

rowDataPacket$ = createRXObservableFromMySQLQuery(sqlOwnersAfolo);
rowDataPacket$
// .map(function (nextRowDataPacketArticulos) {
//    return {
//        idArticulo: nextRowDataPacketArticulos['id_articulo'],
//        nombreArticulo: nextRowDataPacketArticulos['nombre'],
//    };
// })
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

