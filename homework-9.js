// 4. К Форме, которая прикреплена в футере - добавить логику

const subscriptionBlock = document.querySelector('.footer__subscription-block')
subscriptionBlock.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries());
  const input = event.target.querySelector('.subscription-block__email-input')
  if (input.checkValidity() === false) {
    return;
  }
  console.log(data);
});

// 5. при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal
const modalOpenButton = document.querySelector('.modal-open-button');
const overlayContainer = document.querySelector('.overlay');
const modalCloseButton = document.querySelector('.modal-close-button');
modalOpenButton.addEventListener('click', (event) => {
  overlayContainer.classList.add('modal-showed');
})
// 5. Не забываем добавить кнопку для закрытия модалки (крестик в углу).
modalCloseButton.addEventListener('click', (event) => {
  overlayContainer.classList.remove('modal-showed');
})

// 6. Также создайте внешнюю переменную user и присвойте ей этот объект.

let user = null;

const registrationForm = document.querySelector('.registration-form');
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // 6. Все поля должны иметь валидацию

  let isValid = true;
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

  if (!userName.value.trim()) errorForm('Введите имя', userName);
  if (!userSurname.value.trim()) errorForm('Введите фамилию', userSurname);
  if (userPass.value.trim().length < 6) errorForm('Пароль должен быть не менее 6 символов', userPass);
  if (userPassRepeat.value !== userPass.value) errorForm('Пароль не совпадает', userPassRepeat);

  // 6. Если регистрация успешна - выводим значения формы в лог

  if (isValid) {
    const regForm = event.target;
    const regFormData = new FormData(regForm);
    const data = Object.fromEntries(regFormData.entries());

    // 6. добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date()

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
    document.querySelector('.registration-form').reset();

    // 6. После успешной регистрации - модалка должны закрыться.
    overlayContainer.classList.remove('modal-showed');
  }
})