function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap if the element found is greater than the next element
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Example usage
let inputArray = [5, 6, 1, 3, 4, 2];
let sortedArray = bubbleSort(inputArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6]