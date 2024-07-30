const {platform,nameOs,version,arq,cpu,memoTotal,memoLibre} = require('./osModule');
const interf = require('./networkModule');

console.log("Nombre: " + platform);
console.log("Tipo: " + nameOs);
console.log("Versión: " + version);
console.log("Arquitectura: " + arq);
console.log("CPUs: " + cpu);
console.log("MemoriaTotal: " + memoTotal + " MB");
console.log("MemoriaLibre: " + memoLibre + " MB");

console.log(interf);