function countZeroes(arr) {
    // arr.length - arr[lastOne] - 1
    let lastOne = arr.lastIndexOf(1)
    return (arr.length - lastOne - 1)
}

module.exports = countZeroes


