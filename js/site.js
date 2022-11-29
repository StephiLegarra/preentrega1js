// SALUDO BIENVENIDA
alert("Hola! Bievenid@ a nuestra calculadora de descuentos de CUENTA DNI");

// IDENTIFICACION
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
alert("Hola " + nombre + " " + apellido);
console.log("Hola " + nombre + " " + apellido + ", gracias por utilizar nuestro sistema de calculo de descuentos de CUENTA DNI");

// CONSULTA SI TIENE CUENTA DNI
let respuesta = prompt(nombre + " ,tienes cuenta DNI del Banco Provincia?").toLowerCase();


function mesConsulta() {
    let mes = prompt("De que mes quieres consultar los descuentos?").toLowerCase();
    console.log(mes);

    switch (mes) {
        case "enero":
            alert("El descuento era del 30%");
            return 0.30;
            break;
        case "febrero":
            alert("El descuento era del 35%");
            return 0.35;
            break;
        case "marzo":
            alert("El descuento era del 30%");
            return 0.30;
            break;
        case "abril":
            alert("El descuento era del 35%");
            return 0.35;
            break;
        case "mayo":
            alert("El descuento era del 40%");
            return 0.40;
            break;
        case "junio":
            alert("El descuento era del 35%");
            return 0.35;
            break;
        case "julio":
            alert("El descuento era del 40%");
            return 0.40;
            break;
        case "agosto":
            alert("El descuento era del 40%");
            return 0.40;
            break;
        case "septiembre":
            alert("El descuento era del 45%");
            return 0.45;
            break;
        case "octubre":
            alert("El descuento era del 40%");
            return 0.40;
            break;
        case "noviembre":
            alert("El descuento es del 45%");
            return 0.45;
            break;
        case "diciembre":
            alert("Lo siento, esta información aún no está definida");
            console.log("Lo siento, esta información aún no está definida");
            mesConsulta();
            break;
        default:
            alert("Lo siento, no comprendo lo que me estas diciendo");
            console.log("Lo siento, no comprendo lo que me estas diciendo");
            mesConsulta();
    }
    console.log(mes);
}

// SI TIENE CUENTA DNI
function preguntar() {
    if (respuesta === "si") {
        alert(`Excelente ${nombre} ${apellido} es algo para aprovechar!`);
        console.log("Continuemos entonces");

        mesConsulta();
          
        let monto = parseInt(prompt("cuanto dinero gastaste?"));
        console.log(monto);
        alert("Usted informa haber gastado $" + monto);
        let descuento = mesConsulta();
        let resultado = monto * descuento;
        alert("El descuento es de $" + resultado);
        console.log(resultado);


        let seguir = prompt("Quiere consultar otro descuento?").toLowerCase();
        console.log(seguir);
        while (seguir != "no") {
            mesConsulta();
            let monto = parseInt(prompt("cuanto dinero gastaste?"));
            console.log(monto);
            alert("Usted informa haber gastado $" + monto);
            let resultado = monto * descuento;
            alert("El descuento es de " + resultado);
            console.log(resultado);
            seguir = prompt("Quiere consultar otro descuento?").toLowerCase();

        let terminar = prompt("Si quiere terminar escriba SALIR").toLowerCase();
        alert(terminar);
        console.log(terminar);
        while (terminar != "salir") {
            alert("Palabra incorrecta");
            terminar = prompt("Si quiere terminar escriba SALIR").toLowerCase();
        }
    }


    // SI NO TIENE CUENTA DNI
} else if (respuesta === "no") {
    alert(`Que lastima ${nombre} ${apellido} es algo para aprovechar!`);
    console.log("Piensa en hacerte una para poder aprovechar distintos beneficios");
    let crear = prompt("No te gustaría hacerte una cuenta? es gratis").toLowerCase();
    console.log(crear); {
        if (crear === "si") {
            alert(`Excelente ${nombre}, puedes descargarla desde el play store y hacerte un usuario en tan solo minutos`);
            console.log("Nos vemos " + nombre + ", aguardaremos aquí y te esperamos cuando tengas la cuenta creada para que puedas consultar por los descuentos");
        } else if (crear === "no") {
            alert(`Uh! que lastima! ${nombre}, esperamos que cambies de opinion pronto! Saludos!`);
            console.log("Adios " + nombre + " ,esperamos verte pronto");
        }
    }
}
}

preguntar();


