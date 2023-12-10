'use strict'

function backHome () {
    window.location.href = `../../index.html`;
}


// FUNÇÃO PARA CARREGAR UMA FOTO
const fotoInput = document.getElementById('foto');
const fotoLabel = document.querySelector('label[for="foto"]');

fotoInput.addEventListener('change', (event) => {
  if (event.target.files && event.target.files[0]) {
    const image = new Image();

    image.onload = () => {
      fotoLabel.style.display = 'none';
      fotoInput.parentElement.style.backgroundImage = `url(${image.src})`;
      fotoInput.parentElement.style.backgroundSize = 'cover';
    };

    image.src = URL.createObjectURL(event.target.files[0]);
  }
});
// ************************** FIM **********************************


// FUNÇÃO ASSINCRONA PARA CARREGAR ESTADOS E CIDADES 
window.addEventListener('load', async () => {
    
    try {
        const url = `https://brasilapi.com.br/api/ibge/uf/v1`;
        const request = await fetch(url);
        const data = await request.json();
        const options = document.createElement('optgroup');
        
        data.forEach(element => {
            options.innerHTML += '<option>' + element.sigla + '</option>'
        });
        const stateSelect = document.getElementById('estado');
        stateSelect.append(options)
    } catch (error) {
        console.error('Erro ao fazer o fetch:', error)
    } finally {
        console.log('UF carregada');
    }

})

const state = document.getElementById('estado');
state.addEventListener("change", async () => {
    const urlCity = `https://brasilapi.com.br/api/ibge/municipios/v1/${state.value}`;
    const request = await fetch(urlCity);
    const data = await request.json();
    let options = ''
    data.forEach(element => {
        options += '<option>' + element.nome + '</option>'
    });
    const city = document.getElementById('cidade');
    city.innerHTML = options
})
// ************************** FIM **********************************



function hiddenIcon(inputId, iconId) {
    const inputElement = document.getElementById(inputId);
    const iconElement = document.getElementById(iconId);
    inputElement.addEventListener('input', (e) => {
        if (e.target.value) {
            iconElement.classList.add('iconHidden');
        } else {
            iconElement.classList.remove('iconHidden');
        }
    })
}


// PAGINA CADASTRO
hiddenIcon('firstName', 'iconFirstName');
hiddenIcon('lastName', 'iconLastName');
hiddenIcon('email', 'iconEmail');
hiddenIcon('password', 'iconPassword');
hiddenIcon('cPassword', 'iconCPassword');

// ************************** FIM **********************************



// FUNÇÃO HABILITA BOTÃO SALVAR

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const saveButton = document.getElementById('saveButton');

function updateButtonState (input, text) {
    const inputElement = document.getElementById(input);
    const textElement = document.getElementById(text);

    inputElement.addEventListener('input', (e) => {
        const isFirstNameInput = firstName.value;
        const isLastNameInput = lastName.value;

        if (e.target.value) {
            textElement.classList.add('hide');
        } else {
            textElement.classList.remove('hide');
        }
        
        if (isFirstNameInput && isLastNameInput) {
            localStorage.setItem('firstName', firstName.value);
            localStorage.setItem('lastName', lastName.value);
            saveButton.disabled = false;
            return;
        }
        saveButton.disabled = true;
    });
}

updateButtonState ('firstName', 'textFirstName')
updateButtonState ('lastName', 'textLastName')


function goCards () {
    window.location.href = `cartoes.html`;
}