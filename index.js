const findLongestWord = (arr) => arr.reduce((max, n) => max.length > n.length ?  max :  n, '');

const sumUniqueNumbers = (arr) => {
    const result = new Set(arr);
    let sum = 0;
    for ( const item of result ) {
        sum += item
    }
    return sum;
};


const mergeArrays = (...arrays) => {
    arrays = Array.from(new Set(arrays));
    return arrays;  
}

const hasProperty = (obj, str) => (str in obj) ? true : false;


const getPropertyValue = (obj, str) => (str in obj) ? obj[str] : undefined;




