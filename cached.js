require('./ascii-art')
console.log(require.cache) //SEE module parent property
require('./ascii-art');

console.log('--- Load everytime ---');
delete require.cache['C:\\Users\\M1054735\\Desktop\\Node-Practice\\ascii-art.js']
require('ascii-art')