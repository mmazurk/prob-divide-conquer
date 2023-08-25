function findFloor(array, num, lowIndex = 0, highIndex = array.length - 1) {
  // the number is less than the first sorted number
  if (highIndex < lowIndex) return -1;

  // the number is higher than the last sorted number
  if (num >= array[highIndex]) return array[highIndex];

  // the number in the middle is < num or == num
  let midIndex = Math.floor((lowIndex + highIndex) / 2);
  if (num === array[midIndex]) return array[midIndex];

  // num is less than the middle, it's in the left half
  if (num < array[midIndex]) {
    // account for the case when the number is one left of the middle
    if (num > array[midIndex - 1]) {
      return array[midIndex - 1];
    }
    return findFloor(array, num, lowIndex, midIndex - 1);
  }

  // num is greater than th e middle, it's in the right half
  if (num > array[midIndex]) {
    return findFloor(array, num, midIndex + 1, highIndex);
  }
}

// looking for something smaller or equal
// when it finds it it stops

// findFloor([1,2,2,2,2,2,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

module.exports = findFloor;
