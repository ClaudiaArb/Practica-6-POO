import * as readline from "readline";

class CajaFuerte {
    private pin: string;

    constructor() {
        this.pin = "0000";
    }

    get pinActual(): string {
        return "****";
    }

    set pinActual(valor: string) {
        if (valor.length !== 4) {
            console.log("Error: el PIN debe tener exactamente 4 dígitos");
        } else {
            this.pin = valor;
            console.log("PIN guardado correctamente");
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const caja = new CajaFuerte();

rl.question("Configura tu PIN: ", function(respuesta) {
    caja.pinActual = respuesta;
    console.log("Tu PIN es: " + caja.pinActual);
    rl.close();
});