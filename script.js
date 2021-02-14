var datos = [];
var precio_base = 2000;

var recargos = {
  edad18: 0.1,
  edad25: 0.2,
  edad50: 0.3,
  hijos: 0.2,
  propiedades: 0.35,
  salario: 0.5,
};

class Registro {
  constructor(
    nombre,
    edad,
    casado,
    edadConyuge,
    numeroHijos,
    salario,
    valorPropiedad
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.casado = casado;
    this.edadConyuge = edadConyuge;
    this.numHijos = numeroHijos;
    this.salario = salario;
    this.valorPropiedad = valorPropiedad;
  }
}

/** esta funcion permite el ingreso de cotizaciones */
function Inicio() {
  var bandera = true;

  while (bandera == true) {
    var respuesta = 0;

    //Mensajes de alerta para ingresar datos
    var nombre = prompt("Ingrese su nombre, por favor");
    var edad = IngresoEdad("usted");

    if (edad >= 18) {
      var casado = IngresoEstadoCivil();
      var edad_conyuge = 0;
      var numeroHijos = 0;
      valorPropiedad = 0;

      if ("SI" == casado.toUpperCase()) {
        edad_conyuge = IngresoEdad("su conyuge");
      }

      if (TieneHijos()) {
        numeroHijos = CantidadHijos();
      }

      var salario = ValorSalario();
      var propiedad = IngresoPropiedad();

      debugger;

      if ("SI" == propiedad.toUpperCase()) {
        var valorPropiedad = ValorPropiedad();
      }
    } else {
      alert("La persona a asegurar tiene que ser mayor de edad");
    }

    datos.push(
      new Registro(
        nombre,
        edad,
        casado,
        edad_conyuge,
        numeroHijos,
        salario,
        valorPropiedad
      )
    );

    bandera = Continuar();
  }

  for (let entry of datos) {
    var recargo_total = CalculoRecargo(entry);
    var total = precio_base + recargo_total;
    alert("Para el asegurado " + entry.nombre);
    alert("El recargo total sera de: " + recargo_total);
    alert("El valor de la cotización sera de: " + total);
  }

}

/** esta funcion muestra mensaje si se desea hace otro ingreso */
function Continuar() {
  var respuesta = 0;
  var bandera = false;
  var continua = false;

  while (bandera == false) {
    respuesta = prompt("¿Desea realizar otro ingreso? 1. Si 2. No");
    if (isNaN(respuesta) == false) {
      switch (parseInt(respuesta)) {
        case 1:
          continua = true;
          bandera = true;
          break;
        case 2:
          continua = false;
          bandera = true;
          break;
        default:
          bandera = false;
          break;
      }
    } else {
      alert("Respuesta incorrecta");
    }
  }

  console.log(continua);

  return continua;
}

function IngresoEdad(mensaje) {
  var respuesta;
  var edad;
  var bandera = false;

  while (bandera == false) {
    respuesta = prompt(
      "¿Cuantos años tiene " + mensaje + "? Ingrese solamente números"
    );
    if (isNaN(respuesta) === false) {
      edad = parseInt(respuesta);
      bandera = true;
    } else {
      alert("La edad ingresada no es valida");
    }
  }

  return edad;
}

function IngresoEstadoCivil() {
  var respuesta;
  var casado = "";
  var bandera = false;

  while (bandera == false) {
    respuesta = prompt("¿Está casado actualmente? 1. Si 2. No");
    if (isNaN(respuesta) === false) {
      switch (parseInt(respuesta)) {
        case 1:
          casado = "Si";
          bandera = true;
          break;
        case 2:
          casado = "No";
          bandera = true;
          break;
        default:
          alert("El estado civil ingresado no es valido");
          bandera = false;
          break;
      }
    }
  }

  return casado;
}

function TieneHijos() {
  var respuesta;
  var bandera = false;
  var tiene;

  while (bandera == false) {
    respuesta = prompt("¿Tiene hijos? 1. Si 2. No");
    if (isNaN(respuesta) == false) {
      switch (parseInt(respuesta)) {
        case 1:
          tiene = true;
          bandera = true;
          break;
        case 2:
          tiene = false;
          bandera = true;
          break;
        default:
          respuesta = 0;
      }
    }
  }

  return tiene;
}

function CantidadHijos() {
  var respuesta;
  var numHijos;
  var bandera = false;

  while (bandera == false) {
    respuesta = prompt("¿Cuantos hijos tiene? Ingrese solamente números");
    if (isNaN(respuesta) == false) {
      if (parseInt(respuesta) > 0) {
        numHijos = parseInt(respuesta);
        bandera = true;
      } else {
        alert("La cantidad de hijos debe ser mayor de 0");
        bandera = false;
      }
    } else {
      alert(
        "La cantidad de hijos ingresada no es valida ingresada no es valida"
      );
      bandera = false;
    }
  }

  return numHijos;
}

function IngresoPropiedad() {
  var respuesta;
  var propiedad = "";
  var bandera = false;

  while (bandera == false) {
    respuesta = prompt("¿Tiene propiedade? 1. Si 2. No");
    if (isNaN(respuesta) === false) {
      switch (parseInt(respuesta)) {
        case 1:
          propiedad = "Si";
          bandera = true;
          break;
        case 2:
          propiedad = "No";
          bandera = true;
          break;
        default:
          alert("El valor ingresado no es valido");
          bandera = false;
          break;
      }
    }
  }

  return propiedad;
}

function ValorPropiedad() {
  var respuesta;
  var valor;
  var bandera = false;

  while (bandera == false) {
    respuesta = prompt(
      "¿Cual es el valor de su propiedad? Ingrese solamente números"
    );
    if (isNaN(respuesta) == false) {
      if (parseInt(respuesta) > 0) {
        valor = parseInt(respuesta);
        bandera = true;
      } else {
        alert("El valor de la propiedad debe ser mayor de 0");
        bandera = false;
      }
    } else {
      alert("El valor ingresado no es valido");
      bandera = false;
    }
  }

  return valor;
}

function ValorSalario() {
  var respuesta;
  var valor;
  var bandera = false;

  while (bandera == false) {
    respuesta = prompt(
      "¿Cual es su salario promedio? Ingrese solamente números"
    );
    if (isNaN(respuesta) == false) {
      if (parseInt(respuesta) > 0) {
        valor = parseInt(respuesta);
        bandera = true;
      } else {
        alert("El salario debe ser mayor de 0");
        bandera = false;
      }
    } else {
      alert("El valor ingresado no es valido");
      bandera = false;
    }
  }

  return valor;
}

/** esta función calcula el recargo por edad */
function recargoEdad(edad) {

  var calculo = 0;

  if (edad >= 18 && edad <= 24) {
    calculo = precio_base * recargos.edad18;
  } else if (edad >= 25 && edad <= 49) {
    calculo = precio_base * recargos.edad25;
  } else if (edad >= 50) {
    calculo = precio_base * recargos.edad50;
  }

  return calculo;
}

/** esta funcion calcula los recargos */
function CalculoRecargo(informacion) {

  var calculo = recargoEdad(informacion.edad);

  if ("SI" == informacion.casado.toUpperCase()) {
    calculo += recargoEdad(informacion.edadConyuge);
  }

  calculo += precio_base * recargos.hijos * informacion.numHijos;

  /** recargos extras: prpiedad y salario */
  calculo += informacion.valorPropiedad * recargos.propiedades;
  calculo += informacion.salario * recargos.salario;

  return calculo;
}


