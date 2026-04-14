"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class Termostato {
    constructor(temp) {
        this.temperatura = temp;
    }
    get tempActual() {
        return this.temperatura + "°C";
    }
    set tempActual(valor) {
        if (valor > 25) {
            this.temperatura = 25;
            console.log("Valor fuera de rango, ajustado a 25°C");
        }
        else if (valor < 18) {
            this.temperatura = 18;
            console.log("Valor fuera de rango, ajustado a 18°C");
        }
        else {
            this.temperatura = valor;
        }
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const t = new Termostato(20);
rl.question("Ingresa la temperatura: ", function (respuesta) {
    t.tempActual = parseInt(respuesta);
    console.log("Temperatura actual: " + t.tempActual);
    rl.close();
});
//# sourceMappingURL=index1.js.map