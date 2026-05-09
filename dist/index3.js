"use strict";
//Sistema de gestión de suscripciones
Object.defineProperty(exports, "__esModule", { value: true });
class usuario {
    constructor(username, email, planActual) {
        this.username = username;
        this.email = email;
        this.planActual = planActual;
    }
}
class PlanBasico {
    obtenerCosto() { return 5.00; }
    obtenerBeneficios() { return "Acceso a 1 instancia de servidor"; }
}
class PlanPremium {
    obtenerCosto() { return 12.00; }
    obtenerBeneficios() { return "Acceso a 5 instancias de servidor + soporte 24/7"; }
}
class PlanEnterprise {
    obtenerCosto() { return 50.0; }
    obtenerBeneficios() { return "Infraestructura dedicada + API ilimitada"; }
}
class NotificacionEmail {
    enviar(usuario, mensaje) {
        console.log(`[EMAIL] Enviando a ${usuario.email}`);
        console.log(`mensaje: ${mensaje}`);
    }
}
class procesadorSuscripciones {
    constructor(notificador) {
        this.notificador = notificador;
    }
    procesarPago(usuario, plan) {
        const costo = plan.obtenerCosto();
        const beneficios = plan.obtenerBeneficios();
        console.log("------------------------");
        console.log("Facturacion de servicios en la nube");
        console.log("------------------------");
        console.log(`cliente: ${usuario.username}`);
        console.log(`Plan: ${usuario.planActual}`);
        console.log(`Monto a pagar: $${costo}`);
        console.log(`Detalles: ${beneficios}`);
        console.log("------------------------");
        const mensajeConfirmacion = `Confirmacion de su pago de $ ${costo} ha sido procesado. Plan activado:${beneficios}`;
        this.notificador.enviar(usuario, mensajeConfirmacion);
    }
}
//crear usuario
const cliente = new usuario("claudia Arbaiza", "claudia@example.com", "PlanPremium");
//definir plan
const planElegido = new PlanPremium();
const medioNotificacion = new NotificacionEmail();
const sistema = new procesadorSuscripciones(medioNotificacion);
sistema.procesarPago(cliente, planElegido);
//# sourceMappingURL=index3.js.map