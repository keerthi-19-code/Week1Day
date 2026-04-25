function intersection(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

// console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
 console.log(intersection([5, 6, 7], [9, 2, 4]));