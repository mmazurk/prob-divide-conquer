function findRotatedIndex(array, num) {

    // find the shift point
    // then binary search within each half
    // then figure out the index based on the shift point

    let shiftPoint = findShiftPoint(array)

    // If the shiftPoint is at the beginning or if the num is less than the first element
    // Then we know it's in the right side
    if (shiftPoint === 0 || num < array[0]) {
        return binarySearch(array, num, shiftPoint, array.length - 1)
    } 
    // Otherwise, search in the left portion.
    return binarySearch(array, num, 0, shiftPoint - 1)
}


function binarySearch(array, num, left, right) {

    let leftIndex = left ? left : 0;
    let rightIndex= right ? right : array.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)    
        if (array[middleIndex] < num) {
            leftIndex = middleIndex + 1
        } else if (array[middleIndex] > num ) { 
            rightIndex = middleIndex - 1
        } else return middleIndex
    }
    return -1; 
}

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10)
// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2)

function findShiftPoint(array) {

// The rotation point is the only point where the next number is smaller than the current number
// Start with usign the whole array
let leftIndex = 0;
let rightIndex=array.length - 1

while (leftIndex < rightIndex) {
    
    // find the middle
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)  
    
    // check that against the right; if it's greater then the pivot point is in the right half
    // chop it in half by makign the left the middle index + 1
    if (array[middleIndex] > array[rightIndex]) {
        leftIndex = middleIndex + 1
    
    // if the middle is less than the end, then it's in the left half
    // that means we need to set the right boundary as the middle
    } else if (array[middleIndex] < array[rightIndex]) {
        rightIndex = middleIndex;
    }
}
    // this keeps shrinking down until we return the left
    return leftIndex;

}

// findShiftPoint([1, 2, 3, 4, 5, 6, 7, 8]) // 0
// findShiftPoint([6, 7, 8, 9, 1, 2, 3, 4]) // 4
// findShiftPoint([6, 7, 8, 9, 10, 1, 2, 3]) // 5
// findShiftPoint([8, 1, 2, 3, 4, 5, 6, 7]) // 1

module.exports = findRotatedIndex


// Zak: Most of the time, this will be recursive; you need to have examples in your head already to do this
// Otherwise it's too hard to come up with the solution on the fly
// You have to see a bunch of solutions to see how to put them together to solve a problem
// The more of these you solve, the better that you get and build your "library"
// This is especially true of trees; you need to learn the solution patterns
    // where should it stop
    // when it should go to left only
    // when it should to to right only
    // you always return the function with left node and right node
// This is all for the interview