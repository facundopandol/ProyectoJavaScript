
function convertirTemperatura(temperatura, temp1, temp2) {
    if (temp1 === "celsius" && temp2 === "kelvin") {
        return temperatura + 273.15;
    } else if (temp1 === "celsius" && temp2 === "farenheit") {
        return temperatura * 1.8 + 32;
    } else if (temp1 === "kelvin" && temp2 === "celsius") {
        return temperatura - 273.15;
    } else if (temp1 === "kelvin" && temp2 === "farenheit") {
        return (temperatura - 273.15) * 1.8 + 32;
    } else if (temp1 === "farenheit" && temp2 === "kelvin") {
        return ((temperatura - 32) * 5) / 9 + 273.15;
    } else if (temp1 === "farenheit" && temp2 === "celsius") {
        return (temperatura - 32) / 1.8;
    } else {
        return "El dato ingresado no pudo convertirse";

    }
}

let bienvenida = prompt("Quieres hacer una conversión? (s/n)")

while (bienvenida === "s") {

    let temperatura = parseFloat(prompt("Escribe la temperatura a convertir"));
    let temp1 = prompt("Ingrese la unidad a convertir (celsius, kelvin, farenheit)").toLowerCase();
    let temp2 = prompt("Ingrese la unidad del resultado (celsius, kelvin, farenheit").toLowerCase();
    let resultado = convertirTemperatura(temperatura, temp1, temp2);

    if (temperatura === NaN) {
        alert("La temperatura ingresada no es válida");
    } else if (
        (temp1 !== "celsius" && temp1 !== "kelvin" && temp1 !== "farenheit") ||
        (temp2 !== "celsius" && temp2 !== "kelvin" && temp2 !== "farenheit")
    ) {
        alert("Las unidades ingresadas no son válidas");
    } else {
        alert(`Tu resultado es ${resultado} grados ${temp2}`);
    }
    bienvenida = prompt("Gracias por usar nuestro sistema de conversión. \nQuieres hacer otra conversión? (s/n)")
}
alert("Regresa cuando quieras para usar nuestro conversor de unidades de temperatura");