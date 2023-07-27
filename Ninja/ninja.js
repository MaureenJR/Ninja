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
        console.log (`Salud: ${this.salud}`);     
        console.log (`Velocidad: ${this.velocidad}`);  
        console.log (`Fuerza: ${this.fuerza}`); 
    }
    drinkSake() {
        this.salud += 10;
    }
}
module.exports = Ninja;