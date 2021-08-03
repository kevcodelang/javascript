function diffArray(array1, array2) {
    return array1
        .concat(array2)
        .filter(item =>
            !array1.includes(item) ||
            !array2.includes(item));
}
console.log(diffArray(["John", "Paul", "Peter", "John"], ["John", "Paul", "Juda", "Peter", "John"]));