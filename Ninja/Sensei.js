const Ninja = require("./ninja");

class Sensei extends Ninja{
    constructor (nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    
    speakWisdom(){
        super.drinkSake();
        console.log ("Primero resuelve el problema, luego escribe el codigo");
    }
}

const superSensei = new Sensei ("Kenji Sensei");

console.log (superSensei.sabiduria);//Es solo para ver si "sabiduria" esta funcionando

superSensei.speakWisdom();
superSensei.showStats();