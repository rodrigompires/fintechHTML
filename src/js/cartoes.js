'use strict'

// FUNÇÃO NOS INPUTS PARA VALIDAR ENTRADA APENAS DE NUMEROS, MOSTRAR O CARTAO E MASCARA DE NUMERO DE CARTAO

function numbersCard (inputId, errorId, spamId, cardId) {
    const inputNumber = document.getElementById(inputId);
    const errorText = document.getElementById(errorId);
    const numberCurrentCard = document.getElementById(spamId);
    const card = document.getElementById(cardId);

    inputNumber.addEventListener('input', (e) => {
        let valueLength = e.target.value.length;

        if (isNaN(Number(e.data))) {
            e.target.value = '';
            card.classList.remove('showCard');
            errorText.style.opacity = 1;
            return;
        } else {
            if (valueLength >= 4) {
                card.classList.add('showCard');
            } else {
                card.classList.remove('showCard');
        
            }
          
            if (e.inputType === 'deleteContentBackward') {
                e.target.value.slice(0, -1);
                numberCurrentCard.innerHTML = e.target.value;
                return;
            }
            
            if (valueLength === 4 || valueLength === 9 || valueLength === 14) {
                e.target.value += '.'
            }
            numberCurrentCard.innerHTML = e.target.value;
            errorText.style.opacity = 0;
        }
    })
}

numbersCard('numberCard', 'numberCardError', 'numberCurrentCard', 'card1');
numbersCard('numberCard2', 'numberCardError2', 'numberCurrentCard2', 'card2');

// **************************** FIM *********************************


// FUNÇÃO NOS INPUTS PARA VALIDAR ENTRADA APENAS DE NUMEROS, DATA DE VALIDADE

function validateDate (inputId, errorId) {
    const inputNumber = document.getElementById(inputId);
    const errorText = document.getElementById(errorId);

    inputNumber.addEventListener('input', (e) => {
        let valueLength = e.target.value.length;

        if (isNaN(Number(e.data))) {
            e.target.value = '';
            errorText.style.opacity = 1;
            return;
        } else {
          
            if (e.inputType === 'deleteContentBackward') {
                e.target.value.slice(0, -1);
                return;
            }
            
            if (valueLength === 2) {
                e.target.value += '/'
            }
            errorText.style.opacity = 0;
        }

    })
}


validateDate('validateCard', 'validateNumberError');
validateDate('validateCard2', 'validateNumberError2');

// **************************** FIM *********************************

function validateCvv (inputId, errorId) {
    const inputNumber = document.getElementById(inputId);
    const errorText = document.getElementById(errorId);

    inputNumber.addEventListener('input', (e) => {
        // let valueLength = e.target.value.length;

        if (isNaN(Number(e.data))) {
            e.target.value = '';
            errorText.style.opacity = 1;
            return;
        } else {
          
            if (e.inputType === 'deleteContentBackward') {
                e.target.value.slice(0, -1);
                return;
            }
            errorText.style.opacity = 0;
        }

    })
}


validateCvv('cvvCard', 'cvvCardError');
validateCvv('cvvCard2', 'cvvCardError2');

// **************************** FIM *********************************



// BUSCANDO O NOME DO USUARIO NO LOCAL STORAGE PARA APARECER NO CARTAO

const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
const userNameCard = document.getElementById('userNameCard');
userNameCard.innerHTML = `${firstName } ${lastName}`;
userNameCard2.innerHTML = `${firstName } ${lastName}`;

// **************************** FIM *********************************