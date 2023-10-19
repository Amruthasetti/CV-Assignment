function sortDescending(arr) {
    // Use the Array.sort() method with a compare function
    arr.sort(function(a, b) {
        // Compare in descending order
        return b - a;
    });

    return arr;
}

// Example usage
let numbers = [5, 2, 9, 1, 5, 6];
let sortedArray = sortDescending(numbers);
console.log(sortedArray);
