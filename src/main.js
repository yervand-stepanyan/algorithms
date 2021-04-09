import binarySearch from './algorithms/binary-search.js';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const numberToFind = 7;
const result = binarySearch(numbers, numberToFind);

console.log(result);
