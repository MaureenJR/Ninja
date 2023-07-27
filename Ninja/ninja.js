class Ninja{
    constructor (nombre){
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        console.log(`Mi nombre es ${this.nombre}`);
    }
    showStats() {
        console.log (`Nombre: ${this.nombre}`);
        console.log (`Fuerza: ${this.fuerza}`);     
        console.log (`Velocidad: ${this.velocidad}`);  
        console.log (`Salud: ${this.salud}`);                                                   
    }
    drinkSake() {
        this.salud += 10;
        console.log (this.salud);
    }
}
module.exports = Ninja;