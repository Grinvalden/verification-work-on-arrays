const findLongestWord = (arr) => arr.reduce((max, n) => max.length > n.length ?  max :  n, '');
console.log(findLongestWord(["Java", "Python", "JavaScript"]));

const sumUniqueNumbers = (arr) => {
    const result = new Set(arr);
    let sum = 0;
    for ( const item of result ) {
        sum += item
    }
    return sum;
};
console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5]));

const mergeArrays = (...arrays) => {
    arrays = Array.from(arrays);
    console.log(arrays);
    let sum = [];
    for ( const item of arrays ){
        sum.unshift(item);
    }  
   return sum ;
    
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]


const hasProperty = (obj, str) => (str in obj) ? true : false;
console.log(hasProperty({name: "Alice", age: 25}, 'age')); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true



