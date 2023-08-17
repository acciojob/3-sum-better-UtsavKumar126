function threeSum(arr, target) {
    let sum = 0;
    let dif = Infinity; // Initialize the difference with positive infinity
    arr.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        let k = arr.length - 1;

        while (j < k) {
            let currentSum = arr[i] + arr[j] + arr[k];
            let currentDiff = Math.abs(currentSum - target);

            if (currentDiff < dif) {
                dif = currentDiff;
                sum = currentSum;
            }

            if (currentSum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return sum;
}


module.exports = threeSum;
