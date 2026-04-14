import * as readline from "readline";

class Termostato {
    private temperatura: number;

    constructor(temp: number) {
        this.temperatura = temp;
    }

    get tempActual(): string {
        return this.temperatura + "°C";
    }

    set tempActual(valor: number) {
        if (valor > 25) {
            this.temperatura = 25;
            console.log("Valor fuera de rango, ajustado a 25°C");
        } else if (valor < 18) {
            this.temperatura = 18;
            console.log("Valor fuera de rango, ajustado a 18°C");
        } else {
            this.temperatura = valor;
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const t = new Termostato(20);

rl.question("Ingresa la temperatura: ", function(respuesta) {
    t.tempActual = parseInt(respuesta);
    console.log("Temperatura actual: " + t.tempActual);
    rl.close();
});