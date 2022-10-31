/* eslint-disable no-console */

const getRandomNumber = function (min, max) {
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
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;
console.log(checkStringLength('В этой строке больше двадцати символов?', 20));

function getRandomArrayElement (elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
}

export {
  getRandomNumber,
  getRandomArrayElement
};
