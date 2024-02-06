const fc = document.getElementById("FC");
const cf = document.getElementById("CF");
const result = document.getElementById("result");
const valor = document.getElementById("texto")   
let temp;


function converter(){

    if(fc.checked){
        temp = Number(valor.value)
        temp = (temp - 32) * (9/5);
        result.textContent = temp.toFixed(1) + "°C"       
    }
    else if(cf.checked){
        temp = Number(valor.value)
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }

    else{
        result.textContent("Selecione uma unidade de medida") 
    }

}