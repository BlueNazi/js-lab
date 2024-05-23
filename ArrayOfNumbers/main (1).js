const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];



function intersection(arr1, arr2) {

    return arr1.filter(value => arr2.includes(value));
}


function union(arr1, arr2) {
    
    return [...new Set([...arr1, ...arr2])];
}

function difference(arr1, arr2) {
    return arr1.filter(value => !arr2.includes(value));
}


console.log('Intersection:', intersection(array1, array2));
console.log('Union:', union(array1, array2));
console.log('Difference:', difference(array1, array2));