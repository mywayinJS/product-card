import { Modal } from './modal.js';
import { Form } from './form.js';
const modal = new Modal('registration-overlay')
const registrationFormInstance = new Form('registration-form');
const subscriptionFormInstance = new Form('subscription-form')

const subscriptionBlock = document.getElementById('subscription-form')
subscriptionBlock.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!subscriptionFormInstance.isValid()) {
    return;
  }
  const data = subscriptionFormInstance.getValues();
  console.log(data);
});

const modalOpenButton = document.querySelector('.modal-open-button');
modalOpenButton.addEventListener('click', () => {
  modal.open();
})


let user = null;

const registrationForm = document.querySelector('.registration-form');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();


  let isValid = registrationFormInstance.isValid();
  
  const userName = document.querySelector('#user-name');
  const userSurname = document.querySelector('#user-surname');
  const userPass = document.querySelector('#user-password');
  const userPassRepeat = document.querySelector('#user-password-repeat');

  const clearErrors = () => {
    document.querySelectorAll('.error-text').forEach(error => error.remove());
  };

  const errorForm = (message, input) => {
    const errorEl = document.createElement('div');
    errorEl.className = 'error-text';
    errorEl.textContent = message;
    errorEl.style.color = 'red';
    errorEl.style.fontSize = '14px';
    input.parentElement.appendChild(errorEl);
    isValid = false;
  }
  clearErrors();
  if (userPassRepeat.value !== userPass.value) errorForm('Пароль не совпадает', userPassRepeat);
  if (isValid) {
    const data = registrationFormInstance.getValues();
    const encodedPassword = btoa(userPass.value);
    user = {
      ...data,
      password: encodedPassword,
      createdOn: new Date()
    };
    delete user['user-password'];
    delete user['user-password-repeat'];
    console.log(user);
    alert('Регистрация пройдена!');
    registrationFormInstance.reset();
    modal.close();
  }
})