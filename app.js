//esPositivoONegativo(numero)
//Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

//esPositivoONegativo(3)  // 'positivo'
//esPositivoONegativo(-5) // 'negativo'


const esPositivoONegativo = (numero)=>{
    if(numero >0){
        return "es positivo";
    }else{
        return "es negativo";
    }
}


console.log(esPositivoONegativo(3));
console.log(esPositivoONegativo(-5));