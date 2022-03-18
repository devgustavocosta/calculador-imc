function calculate(){
    var bmi;
    var result = document.getElementById("resultado");

    var weight = parseInt(document.getElementById("peso").value);
    document.getElementById("peso-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("altura").value);
    document.getElementById("altura-val").textContent = height + " cm";

    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.textContent = bmi;

    if(bmi < 18.5){
        category = "Abaixo do Peso 😣";
        result.style.color = "#ffc44d";
    }
    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Peso normal ❤️";
        result.style.color = "#0be881";
    }
    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Sobrepeso 😮";
        result.style.color = "#ff884d";
    }
    else{
        category = "Obesidade 😱";
        result.style.color = "#ff5e57";
    }
    document.getElementById("categoria").textContent = category;
}