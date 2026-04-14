import * as readline from "readline";

class SensorDiesel {
    private nivel: number;

    constructor(nivel: number) {
        this.nivel = nivel;
    }

    get nivelActual(): number {
        return this.nivel;
    }

    set nivelActual(valor: number) {
        if (valor < 0) {
            console.log("Valor inválido, no puede ser negativo");
        } else if (valor > 100) {
            console.log("Valor inválido, no puede superar 100%");
        } else {
            this.nivel = valor;
        }
    }

    get estadoReserva(): string {
        if (this.nivel < 15) {
            return "ALERTA: NIVEL CRÍTICO";
        } else {
            return "Nivel Normal";
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sensor = new SensorDiesel(50);

rl.question("Ingresa el nivel de combustible: ", function(respuesta) {
    sensor.nivelActual = parseInt(respuesta);
    console.log("Nivel actual: " + sensor.nivelActual + "%");
    console.log("Estado: " + sensor.estadoReserva);
    rl.close();
});