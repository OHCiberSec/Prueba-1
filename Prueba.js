
const prompt = require('prompt-sync')();


let TotVolantines = 0;
let minvol = Infinity;
let  dmenos = 0

for (let dia = 1; dia <=7; dia++) {
    let VDia = prompt('Dia:¿cuantos Volantines hizo el dia de hoy?: ');
    let volantines = parseInt(VDia);

    if (isNaN(volantines) || volantines < 0) {
        console.log("Por Favor, Ingresa un numero valido."); 
        dia--;
    }else {
        TotVolantines += volantines;

    if (volantines < minvol) {
        minvol = volantines;
        dmenos = dia;

        } 
    }
} 
let promedioVolantines = TotVolantines / 7;

console.log("Informe:");
console.log("Promedio al dia: " + promedioVolantines.toFixed(2));
console.log("Total de volantines: " + TotVolantines);
console.log("Día menos productivo: Día " + dmenos + " con " + minvol + " volantines.");