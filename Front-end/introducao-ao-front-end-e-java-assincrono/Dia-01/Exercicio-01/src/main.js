// imports:
import './style.css';
import validator from 'validator';

// inicio do codigo:
const textCamp = document.querySelector('#value');
const button = document.querySelector('#button');
const selector = document.querySelector('#option');
const output = document.querySelector('#answer');
const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
    event.preventDefault();
    const camps = {
        cpf: validator.isTaxID(textCamp.value, 'pt-BR'),
        hexColor: validator.isHexColor(textCamp.value),
        email: validator.isEmail(textCamp.value),
        uuid: validator.isUUID(textCamp.value, UUID_VERSION),
        url: validator.isURL(textCamp.value),
    };
    output.innerHTML = `A validação retornou ${camps[selector.value]}`;
});
