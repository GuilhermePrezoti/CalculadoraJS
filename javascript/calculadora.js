var msg = "";
var campo = "";

/*function coletar(sinal){
   msg = document.getElementById('tCampo').value.toString();
   
   var numeros = campo.split(sinal);

   if(sinal =='+'){
        resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
   }//fim do somar


   else if (sinal == '-'){
        resultado = parseInt(numeros[0]) - parseInt(numeros[1]); 
   }//fim do subtrair


   else if (sinal == '*'){
        resultado = parseInt(numeros[0]) * parseInt(numeros[1]);
   }//fim do multiplicar


   else if (sinal == '/'){
        resultado = parseInt(numeros[0]) / parseInt(numeros[1]);
   }//fim da divisão


   else if (sinal == 'x²'){
    resultado = parseInt(numeros[0]) ** parseInt(numeros[1]);
   }//fim do elevado


   else if (sinal == 'sen'){
        resultado1 = math.sin(grauToRad(numeros[0]));
        resultado = resultado1.toFixed(2);
   }//fim do seno 

   else if(sinal == 'cos'){
        resultado1 = math.cos(grauToRad(numeros[0]));
        resultado = resultado1.toFixed(2);
   }//fim do cosseno

   else if (sinal == 'tg'){
        resultado1 = math.tan(grauToRad(numeros[0]));
        resultado = resultado1.toFixed(2);
   }//fim do tangente

   else if (sinal == 'mod'){
        resultado = math.abs(numeros[0]);
   }//fim do mod

   else if (sinal == 'log'){
        resultado = math.abs(numeros[0]);
        resultado = math.log10(numeros[0]);
   }//fim do log

   document.getElementById(tCampo).value = resultado.toString();
}//fim da função

function limpar(){
    document.getElementById('tCampo').value = null;
}

function grauToRad(valor){
    valorRadiano = (2 * 3.14 * parseFloat(valor)) / 360;
    return valorRadiano
}*/



/*function coletar(){
    num1 = document.getElementById('tNum1').value;
    num2 = document.getElementById('tNum2').value;
    soma = document.getElementById('tSoma').value;
    subt = document.getElementById('tSubt').value;
    mult = document.getElementById('tMult').value;
    divi = document.getElementById('tDiv').value;
    elevado = document.getElementById('tElevado').value;
    seno = document.getElementById('tSeno').value;
    cosseno = document.getElementById('tCoseno').value; 
    tangente = document.getElementById('tTang').value;
    modulo = document.getElementById('tMod').value;
    log = document.getElementById('tLog').value;
    del = document.getElementById('tDelete').value;

    document.getElementById('tResultado').innerHTML = msg;

}//fim da função

function calcular(){
    if(opcao = tSoma){
        msg = num1 + num2;
        document.getElementById('tResultado').innerHTML = msg;
    }//fim da soma
    
    if(opcao = subt){
        msg = num1 - num2;
        document.getElementById('tResultado').innerHTML = msg;
    }//fim da subtração

    if(opcao = mult){
        msg = num1 * num2;
        document.getElementById('tResultado').innerHTML = msg;
    }//fim da multiplicação

}//fim da função*/

function operacao(sinal) {
    campo = document.getElementById('icampoNumerico').value.toString();

    var numeros = campo.split(sinal);
    
    if (sinal == '+') {
        resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
    } else if (sinal == '-') {
        resultado = parseInt(numeros[0]) - parseInt(numeros[1]);
    } else if (sinal == '*') {
        resultado = parseInt(numeros[0]) * parseInt(numeros[1]);
    } else if (sinal == '/') {
        resultado = parseInt(numeros[0]) / parseInt(numeros[1]);
    } else if (sinal == '^') {
        resultado = parseInt(numeros[0]) ** parseInt(numeros[1]);
    } else if (sinal == 'root') {
        resultado = Math.sqrt(parseInt(numeros[0]));
    } else if (sinal == 'sin') {
        calc = Math.sin(grauToRad(numeros[0]));
        resultado = calc.toFixed(2);
    } else if (sinal == 'cos') {
        calc = Math.cos(grauToRad(numeros[0]));
        resultado = calc.toFixed(2);
    } else if (sinal == 'tan') {
        calc = Math.tan(grauToRad(numeros[0]));
        resultado = calc.toFixed(2);
    } else if (sinal == 'mod') {
        resultado = Math.abs(numeros[0]);
    } else if (sinal = 'log') {
        resultado = Math.log10(numeros[0])
    } 

    document.getElementById('icampoNumerico').value = resultado.toString();
}

function limparCampo() {
    document.getElementById('icampoNumerico').value = null;
}

function grauToRad(valor) {
    valorRadiano = (2 * 3.14 * parseFloat(valor)) / 360;
    return valorRadiano;
}