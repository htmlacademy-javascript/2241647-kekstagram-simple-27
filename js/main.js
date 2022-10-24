/*
Функция, возвращающая случайное целое число из переданного диапазона включительно.
имя_функции(от, до); // Результат: целое число из диапазона "от...до"
*/

function getRandomNumber (min, max) {
  if (
    Number.isInteger(min) &&
    Number.isInteger(max) &&
    min >= 0 &&
    max >= 0
  ) {
    if (min > max) {
      const flip = min;
      min = max;
      max = flip;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}


/*
Функция для проверки максимальной длины строки.
имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит
*/

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}


/*
В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
Структура каждого объекта должна быть следующей:
id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
description, строка — описание фотографии. Описание придумайте самостоятельно.
likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.
*/

function getRandomArrayElement (elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
}

const DESCRIPTION_TEMPLATES = [
  'Котиком фотку не испортишь.',
  'Мое утро начинается не с ароматного кофе, а с кормежки. А у вас?',
  'Круглосуточный доступ к теплому, мурчащему организму – один из главных плюсов дистанционной работы.',
  'Жрать надоело спать',
  'Кошки спасут мир!',
  'В любой непонятной ситуации немедленно начинай обнимать кота',
  'Эти глаза не могут лгать!',
  'Когда скучно, просто добавь котов.',
  'Бог сотворил кошку для того, чтобы у человека был тигр, которого можно погладить.'
];

function generatePhotoInfoArray (numberOfObjects) {
  const photoInfoArray = [];
  for (let i = 0; i < numberOfObjects; i++) {
    const photoInfo = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: getRandomArrayElement(DESCRIPTION_TEMPLATES),
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200)
    };
    photoInfoArray.push(photoInfo);
  }
  return photoInfoArray;
}


getRandomNumber(3,2); //чтобы не ругался линтер
checkStringLength('Функция для проверки максимальной длины строки.',30); //чтобы не ругался линтер

generatePhotoInfoArray(25);
