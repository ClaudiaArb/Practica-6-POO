//Sistema de Alerta de Emergencia:
//El edificio tiene diferentes dispositivos de seguridad (Alarmas, Aspersores, Luces). Cuando
//se detecta una emergencia, el sistema debe activar todos los dispositivos registrados sin
//importar de qué tipo sean.


interface DispositivoSeguridad {
  nombre: string;
  activar(): void;
}

class Alarma implements DispositivoSeguridad {
  nombre = "Alarma";
  activar(): void {
    console.log(" ¡SONIDO DE EMERGENCIA ACTIVADO!");
  }
}

class Aspersor implements DispositivoSeguridad {
  nombre = "Aspersor";
  activar(): void {
    console.log("¡ROCIANDO AGUA!");
  }
}

class Luz implements DispositivoSeguridad {
  nombre = "Luz";
  activar(): void {
    console.log(" ¡LUCES DE EMERGENCIA ENCENDIDAS!");
  }
}

class SistemaAlertas {
  private dispositivos: DispositivoSeguridad[] = [];

  agregar(dispositivo: DispositivoSeguridad): void {
    this.dispositivos.push(dispositivo);
  }

  emergencia(): void {
    this.dispositivos.forEach((d) => d.activar()); 
  }
}

const sistema = new SistemaAlertas();
sistema.agregar(new Alarma());
sistema.agregar(new Aspersor());
sistema.agregar(new Luz());
sistema.emergencia();