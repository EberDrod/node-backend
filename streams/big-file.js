const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i=0; i <=1e6; i++){
    file.write('Estaba la pajara ')
}

file.end();