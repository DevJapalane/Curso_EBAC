const form = document.getElementById('forms');



function validaNumero(){
    const inputNumX = document.getElementById('numX').value;
    const inputNumY = document.getElementById('numY').value;
    const numX = parseInt(inputNumX);
    const numY = parseInt(inputNumY);
    
    if (numX > numY){
        return 1;
    } else if (numX < numY){
        return 2;
    } else if (numX === numY){
        return 3;
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    const numX = document.getElementById('numX').value;
    const numY = document.getElementById('numY').value;
    const mensagemSucesso = `${numX} é maior que ${numY}!`
    const mensagemErro = `${numX} não é maior que ${numY}!`
    const mensagemIgual = `${numX} é igual a ${numY}`

    numVal = validaNumero(numX.value, numY.value)
    if (numVal === 1) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else if(numVal === 2){
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
    } else if(numVal === 3) {
        const containerMensagemIgual = document.querySelector('.equal-message');
        containerMensagemIgual.innerHTML = mensagemIgual;
        containerMensagemIgual.style.display = 'block';
    }
    
    form.reset(); 
})
// funções para apagar as mensagem de erro, sucesso e iguais quando algum número é inserido no input
 numX.addEventListener('keyup', function(e){
     console.log(e.target.value)
     if (numX != ''){
         document.querySelector('.error-message').style.display = 'none';
         document.querySelector('.sucess-message').style.display = 'none';
         document.querySelector('.equal-message').style.display = 'none';
     }
 })

 numY.addEventListener('keyup', function(e){
     console.log(e.target.value)
     if (numY != ''){
         document.querySelector('.error-message').style.display = 'none';
         document.querySelector('.sucess-message').style.display = 'none';
         document.querySelector('.equal-message').style.display = 'none';
     }
})

console.log(form);