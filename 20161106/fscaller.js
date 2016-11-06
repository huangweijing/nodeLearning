fs = require('fs');

fs.readFile('./fscaller.js', 'utf-8', function(err, data){
    if (err) {
        return console.log(err);
    }
    console.log(data);
});
