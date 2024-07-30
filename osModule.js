const os = require('os')
//os.arch()
//console.log(os);
//console.log (process.argv)

const platform = os.platform();
//console.log("Nombre: " + platform); 

const nameOs = os.type();
//console.log("Tipo: " +nameOs);

const version = os.version();
//console.log("Versión: " +version);

const arq = os.arch();
//console.log("Arquitectura: " +arq);

const cpu = os.cpus().length;
//console.log("CPUs: " +cpu);


const memoTotal = os.totalmem()/ 1024 / 1024;
//console.log("MemoriaTotal: " + memoTotal +" MB");

const memoLibre = os.freemem()/ 1024 / 1024;
//console.log("MemoriaLibre: " + memoLibre +" MB");

module.exports = {
    platform,
    nameOs,
    version,
    arq,
    cpu,
    memoTotal,
    memoLibre
};