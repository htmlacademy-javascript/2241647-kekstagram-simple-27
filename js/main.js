/*
Функция, возвращающая случайное целое число из переданного диапазона включительно.
имя_функции(от, до); // Результат: целое число из диапазона "от...до"
*/
function getRandomNumber (min, max) {
  if (
    Number.isInteger(min) &&
    Number.isInteger(max) &&
    min >=0 &&
    max >= 0
  ) {
    if (min > max) {
      const FLIP = min;
      min = max;
      max = FLIP;
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

getRandomNumber(3,2);
checkStringLength('Функция для проверки максимальной длины строки.',30);
