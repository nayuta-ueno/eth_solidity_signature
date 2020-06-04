// npm install keccak
const createKeccakHash = require('keccak')
const fs = require('fs')

if (process.argv.length != 3) {
    console.log('usage: node ' + process.argv[1] + ' <compiled JSON file>');
    process.exit(1);
}

const SIGNATURES = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))['devdoc']['methods'];

for (key in SIGNATURES) {
    console.log(key + '=' + createKeccakHash('keccak256').update(key).digest().toString('hex').substring(0, 8))
}
