function sortedFrequency(arr, val) {
    // lastIndex - firstIndex + 1
    return(arr.lastIndexOf(val) - arr.indexOf(val) + 1)
}

module.exports = sortedFrequency