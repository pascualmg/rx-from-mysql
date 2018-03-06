#rx-from-mysql

Creates an Rx Observable from a mysql query.
You can use the Rx capabilities on it. 
This code is not tested in an production environment and is 
done only for learning purposes. 

An example of use:

```
"use strict";
var rxFromMysql = require('./rx-from-mysql');

var config = {
    host: '192.168.1.1',
    user: 'root',
    password: 'superSecretPassWord'
};

var query = 'select * from table';

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
```

##Install:

```
npm install rx-from-mysql --save
```

##from git 
git clone https://github.com/pascualmg/rx-from-mysql.git
