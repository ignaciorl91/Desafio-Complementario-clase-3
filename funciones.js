let deuda = 1300
let sumaPagos = 0
let saldo = deuda - sumaPagos

while (deuda > sumaPagos) {
    let pago = parseFloat(prompt("Ingrese el pago a realizar, su saldo actual es de "+ saldo))
    sumaPagos = sumaPagos + pago
    saldo = deuda - sumaPagos
}

if (sumaPagos == deuda){
        document.getElementById("h3").innerHTML="Su deuda a sido saldada"
}