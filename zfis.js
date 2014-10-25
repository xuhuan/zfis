/**
 *
 * @authors zjj (zhongjingjing@gmail.com    )
 * @date    2014-10-22 23:55:20
 * @version 0.0.1
 */
var fis = module.exports = require('fis');

fis.cli.name = 'zfis';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');