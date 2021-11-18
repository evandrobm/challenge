Array.prototype.moveArrayZerosToEnd = function() {
    const arr = this
    const zeros = []
    const nonZeros = []
    // Iterate through the array to zeros and non zeros
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            zeros.push(arr[i])
        } else {
            nonZeros.push(arr[i])
        }
    }
    // Concatenate the zeros and non zeros
    return [...nonZeros, ...zeros]
}

Array.prototype.addOneUnit = function() {
    // Filter out the zeros
    const arr = this.filter(item => item !== 0)
    if(arr.length === 0) {
        return []
    }
    // Iterate through the array and add 1 to each number
    // Iterate through the array and add 1 to final item until it's not a 10
    // This simulates the sum as the array is a single number
    for(let i = arr.length-1; i >= 0; i--) {
        const newValue = arr[i] + 1
        if(newValue <= 9) {
            arr[i] = newValue
            return arr
        } else {
            arr[i] = 0
        }
    }
    // This adds 1 at the beginning in case of all elements being 9
    // and requires to add 1 to previous element (99 + 1 = 100 -> [1, 0, 0])
    arr.unshift(1)
    return arr
}

Array.prototype.multiplyEvenBy = function(multiplier) {
    const arr = this
    // Iterate through the array and multiply even numbers by multiplier
    // Iterating two at a time to only get the even numbers
    for(let i = 0; i < arr.length; i += 2) {
        if(arr[i] !== 0) {
            arr[i] *= multiplier
        }
    }
    return arr
}

Array.prototype.subarrayWithMaxSum = function() {
    const arr = this
    // If the array is empty, return sum as 0
    if(arr.length === 0) {
        return 0
    }
    let maxSum = -Infinity
    let currentSum = 0
    // Iterate through the array and keep track of the current sum
    // if the current sum is less than actual number, set current sum as the number only
    // if the current sum is greater than the max sum, update the max sum
    for(let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}



// Test execution routine
function execute(arr){
    console.log('Original Array:', arr)

    // Step 1: Move all zeros to end of the array
    arr = arr.moveArrayZerosToEnd()
    console.log('Step 1 - Zeros at the end:', arr)

    // Step 2: Add one unit to to the number compound by array elements
    arr = arr.addOneUnit()
    console.log('Step 2 - Add 1:', arr)

    // Step 3: Multiply even elements by -1
    arr = arr.multiplyEvenBy(-1)
    console.log('Step 3 - Multiply evens by -1:', arr)

    // Step 4: Find the maximum sum of subarrays
    arr = arr.subarrayWithMaxSum()
    console.log('Step 4 - Max subarray sum:', arr)
}

// Testing example array from the challenge
execute([4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8])