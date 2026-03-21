// 2. Создать массив чисел от 1 до 10 и т.д.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.filter(number => number >= 5);

console.log(newArray);

// 3. Создать массив строк, проверить, есть ли в массиве какая-то определенная сущность.
const kitchen = [
  'стол',
  'стулья',
  'плита',
  'мойка',
  'холодильник'
];
console.log(kitchen);
const checkKitchen = kitchen.includes('посуда');

console.log('Есть ли посуда:', checkKitchen);

// 4. Написать функцию, которая изменит порядок двух вышеуказанных массивов.
function reverseMyArray(array) {
  array.reverse();
  return array;
}
console.log(reverseMyArray(numbers));
console.log(reverseMyArray(kitchen));

// 6. Сделать константу экспортируемой.
import { comments } from "../comments.js";

console.log(comments);

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const commentsWithCom = comments.filter(comment => comment.email.includes('.com'));

console.log(commentsWithCom);

// 8. Перебрать массив,пользователи с id <= 5 имели postId: 2, а те, у кого id > 5, имели postId: 1
comments.forEach(comment => comment.postId = comment.id <= 5 ? 2 : 1);

console.log(comments);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени.
const commentsIdName = comments.map(comment => ({ id: comment.id, name: comment.name }));
console.log(commentsIdName);

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем длину.
comments.forEach (comment => comment.isInvalid = comment.body.length >= 180);
console.log(comments);

// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
const commentsEmailWithReduce = comments.reduce((acc, item, index, array) => {
  acc.push(item.email);
  return acc;
},[]);
console.log(commentsEmailWithReduce);

// вывод массива почт с помощью - map
const commentsEmailWithMap = comments.map(comment => comment.email);
console.log(commentsEmailWithMap);

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
const arrToString = commentsEmailWithReduce.toString();
console.log(arrToString);