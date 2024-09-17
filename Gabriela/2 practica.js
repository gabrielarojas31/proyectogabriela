function Numero_aleatorio(valor_min,valor_max)
{
    //Generar un numero entre 0 y 1
    let valoraleatorio = Math.random()
    //Multiplica el numero aleatorio por el numero maximo,
    //generando un nuevo numero entre 0 y 1 y el valor_max
    let valor_resultado = valor_aleatorio * valor_max
    //Redondeamos el numero aleatorio
    valor_resultado = Math.round (valor_resultado)
    return valor_resultado
}
function calcular_columna_bingo(numero)
{
    let columna = " "
    if (numero>=1 && numero <=15)
    columna = "B"
    else if (numero>=16 && numero <=30)
    columna = "I"
    else if (columna>= && numero <=)
    columna = "N"
    else if (columna>= && numero <=)
    columna = "G"
    else
    columna = "O"
    return columna
}
let numero_bingo = numero_aleatorio(1, 75)
console.log("Bienvenido al programa BINGO")
console.log("El numero actual es: " + numero_bingo)
let columna_bingo = calcular_columna_bingo(numero_bingo)


console.log(numero_aleatorio(15,20))