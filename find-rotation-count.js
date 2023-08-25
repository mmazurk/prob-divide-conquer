function findRotationCount(arr) {
 
    let shiftIndex = findShiftPoint(arr)
    return {clockwise: shiftIndex, counterClockwise: (arr.length - shiftIndex)}
}

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

module.exports = findRotationCount