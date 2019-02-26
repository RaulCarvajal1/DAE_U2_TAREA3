var fs = require('fs');

fs.readFile('list.csv','utf8',(err, data) => {
    if (err) throw err;
    var line=data.split("\n");
    line.shift();
    line.forEach((reg)=>{
        var aux=reg.split(",")
        console.log(`#${aux[0]}\nNúmero de control: ${aux[1]}\nNombre: ${aux[2]}\nCalificación: ${aux[3]}\n-----------------------------------------`);
    })
});