// 3. Создание объекта на основе моих данных
let user = {
  firstName: "Huzeyfa",
  lastName: "Ubaev",
  post: "ubaev1997@mail.ru",
  job: "Seeking employment",
  position: "student",
  age: 27,
  country: "Azerbaijan",
  city: "Baku"
};

// 4. Создание объекта на основе данных автомобиля
let car = {
  brand: "Toyota",
  model: "Corolla Cross",
  year: 2024,
  color: "white",
  transmission: "automatic",
};
car.owner = user


// 5. Создание функции принимающей объект №4, убедиться, что максимальная скорость есть, если нет - добавить.
function addMaxSpeedIfMissing(auto) {
  if (!("maxSpeed" in auto)) {
    auto.maxSpeed = 180;
  }
}
addMaxSpeedIfMissing(car);
console.log(car);

// 6. Создание функции, которая получает объект и свойство объекта, и показывает его значение
function logProperty(obj, key) {
  console.log(obj[key]);
}
logProperty(car, 'maxSpeed');

// 7. Создать массив, который содержит названия продуктов (просто строки)
let products = ["sugar", "bread", "eggs", "olive oil", "butter"];

// 8. Создать массив, состоящий из объектов, где объект представляет собой "на свое усмотрение" и характеристик объекта, добавить еще один объект в конец списка.
const phones = [
  {
    brand: "Iphone",
    model: "17 pro",
    memory: "1Tb",
    simCard: "1 sim",
    color: "orange",
    year: 2025
  },
  {
    brand: "Samsung",
    model: "galaxy S26 ultra",
    memory: "512Gb",
    simCard: "1 sim",
    color: "black",
    year: 2026
  },
  {
    brand: "Xiaomi",
    model: "17 pro max",
    memory: "512Gb",
    simCard: "2 sim",
    color: "green",
    year: 2025
  }
];
phones.push({
  brand: "OnePlus",
  model: "13",
  memory: "256Gb",
  simCard: "2 sim",
  color: "black",
  year: 2024
});

// 9. Создать еще один массив, состоящих из тех же элементов. С помощью известного нам метода массива или оператора объединить эти два массива в один.
const luxuryPhones = [
  {
    brand: "Agent Q",
    model: "Silver Advanced Set",
    memory: "512Gb",
    simCard: "2 sim",
    color: "black",
    year: 1998
  },
  {
    brand: "VERTU",
    model: "iVERTU 5G",
    memory: "512Gb",
    simCard: "2 sim",
    color: "red",
    year: 2022
  }
];
let allPhones = [...phones, ...luxuryPhones];

// 10. Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9. Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).
const rarePhones = allPhones.map(phone => {
  if (phone.year > 2000) {
    return { ...phone, isRare: true };
  } else {
    return { ...phone, isRare: false };
  }
});