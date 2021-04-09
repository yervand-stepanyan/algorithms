const binarySearch = (array, target) => {
  if (Array.isArray(array) && array.length && typeof target === 'number') {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);

      if (array[middleIndex] === target) {
        return middleIndex;
      } else if (array[middleIndex] < target) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex - 1;
      }
    }
    return `Number \'${target}\' does not exist in the array!`;
  }
  return 'Incorrect inputs';
};

export default binarySearch;
