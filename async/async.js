
console.log('Данные загружаются...');

const user = localStorage.getItem('users');
if (user == null) {
  console.log('Данных нет, надо делать запрос!');
  setTimeout(() => {
    fetch('users.json')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('users', JSON.stringify(data));
        console.log(data);
        renderCards(data);
      });
  }, 3000);
} else {
  const localData = localStorage.getItem('users')
  const parsedUsers = JSON.parse(localData)
  console.log(parsedUsers);
  renderCards(parsedUsers);
}

function renderCards(usersList) {

  const loader = document.getElementById('data-download');
  if (loader) {
    loader.remove();
  }
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.innerHTML = '';
  usersList.forEach(user => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.innerHTML = `
      <p class = "user-card__name"> имя: ${user.name}</p>
      <p class = "user-card__surname"> фамилия: ${user.surname}</p>
      <p class = "user-card__age"> возраст: ${user.age}</p>
      <p class = "user-card__email"> почта: ${user.email}</p>
      <button class = "user-card__delete-btn">X</button>`
    cardsContainer.append(userCard)

    userCard.querySelector('.user-card__delete-btn').addEventListener('click', () => {
      const filteredUsers = usersList.filter(item => item.id !== user.id)
      localStorage.setItem('users', JSON.stringify(filteredUsers));
      renderCards(filteredUsers);
    })
  })
}

const deleteAllCardsBtn = document.getElementById('delete-all-cards-button');
deleteAllCardsBtn.addEventListener('click', () => {
  const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
  if (currentUsers.length == 0) {
    alert('Данных нет, надо делать запрос!');
  } else {
    localStorage.setItem('users', JSON.stringify([]))
    renderCards([])
  }
})

const getAllCardsBtn = document.getElementById('get-all-cards-button');
getAllCardsBtn.addEventListener('click', () => {
  fetch('users.json')
    .then(res => res.json())
    .then(data => {
      const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
      if (data.length == currentUsers.length) {
        return alert('Данные уже выведены на экран!');
      }
      localStorage.setItem('users', JSON.stringify(data));
      renderCards(data);
    });
})
