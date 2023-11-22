// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let count = array1.length;
  let counter = array2.length;
  let num1 = "";
  let num2 = "";
  for (let index = 0; index < count; index++) {
    num1 = num1 + array1[index];
  }
  for (let index = 0; index < counter; index++) {
    num2 = num2 + array2[index];
  }
  let newNum1 = Number(num1);
  let newNum2 = Number(num2);

  return newNum1 + newNum2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let flip = String(value);
  let array = [];
  for (let index = flip.length - 1; index >= 0; index--) {
    array.push(flip[index]);
  }
  let num1 = "";
  for (let index = 0; index < flip.length; index++) {
    num1 = num1 + array[index];
  }
  let flipped = Number(num1);

  if (value === flipped) {
    return true;
  }
  return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const testIfNumber = Number(input);
  if (input === undefined || input === null || input === "") {
    return `Required field`;
  } else if (!(testIfNumber > 0)) {
    return `Must be a number besides 0`;
  }
  return ``;
}
