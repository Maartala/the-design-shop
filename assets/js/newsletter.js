const inputEmail = document.getElementById('inputEmail');
const popUp = document.getElementById('popUp');
const form = document.querySelector('#form')
const subscribeBtn = document.getElementById('subscribeBtn')

function confirmationPopUp(){
    console.log(inputEmail.value);
    popUp.classList.add('openPopUp');
    popUp.classList.remove('hidden');
}