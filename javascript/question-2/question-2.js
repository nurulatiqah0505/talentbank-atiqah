// Question 2: Write a function that removes duplicate values from an array.

const numbers = [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 9]
function filterDuplicates() {
    return [
        ...new Set(numbers)
    ]
}

console.log(filterDuplicates());