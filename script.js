function comprar() {

    let chanel = Number(document.getElementById("chanel").value);
    let guess = Number(document.getElementById("guess").value);
    let tote = Number(document.getElementById("tote").value);

    let total = (chanel * 1500) + (guess * 1200) + (tote * 800);

    let cantidad = chanel + guess + tote;

    if (cantidad <= 0) {
        alert("Selecciona al menos una bolsa.");
    } else {
        document.getElementById("resultado").innerHTML =
        "¡Gracias por tu compra!<br>" +
        "Bolsas seleccionadas: " + cantidad +
        "<br>Total a pagar: $" + total;
    }
}