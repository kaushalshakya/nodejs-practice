const QueryBuilder = require('node-querybuilder');

const settings = {
    host: 'localhost',
    database: 'call_center',
    user: 'root',
    password: ''
}

const pool = new QueryBuilder(settings, 'mysql', 'pool');

module.exports = pool;