import {
  getRandomNumber,
  getRandomArrayElement
} from './util.js';

const NUMBER_OF_PHOTOS = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 200;

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
    const newId = i + 1;
    const photoInfo = {
      id: newId,
      url: `photos/${newId}.jpg`,
      description: getRandomArrayElement(DESCRIPTION_TEMPLATES),
      likes: getRandomNumber(LIKES_MIN, LIKES_MAX),
      comments: getRandomNumber(COMMENTS_MIN, COMMENTS_MAX)
    };
    photoInfoArray.push(photoInfo);
    //console.log(photoInfo.id);
  }
  return photoInfoArray;
}

export const start = generatePhotoInfoArray(NUMBER_OF_PHOTOS);
