function selectForm (event){
    event.preventDefault();
    const form = document.querySelector('.formContainer');
    form.addEventListener('submit', calcIMC());
}


function calcIMC(imc){

    const usersIMC = [];

    const result = document.querySelector('.usersIMC');
    const nome = document.querySelector('.nome').value;
    const inputPeso = parseInt(document.querySelector('.peso').value);
    const inputAltura = parseInt(document.querySelector('.altura').value);
    const convertAltura = (inputAltura/100);
    console.log(typeof(inputPeso),typeof(inputAltura));
    
    imc = (inputPeso / (convertAltura * convertAltura)).toFixed(2);

    usersIMC.push({
        nome: nome,
        inputPeso: inputPeso.value,
        inputAltura: inputAltura.value,
        imc: imc
    })

    if(imc < 18.5){
        result.innerHTML += `<p>Olá ${nome} o seu IMC é ${imc}. Considerado abaixo do peso </p>`
    }
    else if(imc > 18.5 && imc < 24.9){
        result.innerHTML += `<p>Olá ${nome} o seu IMC é ${imc}. Considerado peso normal </p>`
    }
    else if(imc > 25 && imc < 29.9){
        result.innerHTML += `<p>Olá ${nome} o seu IMC é ${imc}. Considerado sobrepeso </p>`
    }
    else if(imc > 30 && imc <34.9){
        result.innerHTML += `<p>Olá ${nome} o seu IMC é ${imc}. Considerado obesidade grau 1 </p>`
    }
    else if(imc > 35 && imc <39.9){
        result.innerHTML += `<p>Olá ${nome} o seu IMC é ${imc}. Considerado obesidade grau 2 </p>`
    }
    else{
        result.innerHTML += `<p>Olá ${nome} o seu IMC é ${imc}. Considerado obesidade grau 3 </p>`
    }
}