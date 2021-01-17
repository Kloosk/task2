// 1. Please write a function that reverses a string
const reverseString = str => {
    return str.split("").reverse().join("");
};
//console.log(reverseString("hi im Łukasz"));

// 2. Please write a function that filters out numbers from a list
//only typeof === number
const outNumbers = arr => {
    return arr.filter(el => typeof el === 'number' && isNaN(el) === false)
};
//typeof === number && typeof === string
const outNumbersString = arr => {
    return arr.filter(el => isNaN(el) === false)
};
//console.log(outNumbersString([1,"a","a1","1a","123456"]));
//console.log(outNumbers([1,"a","a1","1a","123456"]));

// 3. Please write a function that shows the usage of closures
const scope = () => {
  let i = 0;
  const inScope = () => {
        return i;
    };
  return inScope;
};
const closures = scope();
//console.log(closures());

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flattens = arr => {
    return arr.flat(Infinity);
};
//const exampleInputArr = [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5];
//console.log(flattens(exampleInputArr));

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]
const commonElements = (arr1,arr2) => {
    const arr1WithoutDuplicate = [...new Set(arr1)]; //converting to set makes each element unique
    return arr1WithoutDuplicate.filter(el => arr2.includes(el));
};
//console.log(commonElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']));

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']
const differentElements = (arr1,arr2) => {
    const arr1Diff = arr1.filter(x => !arr2.includes(x));
    const arr2Diff = arr2.filter(x => !arr1.includes(x));
    return arr1Diff.concat(arr2Diff);
};
//console.log(differentElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']));

// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

const transformToArr = obj => {
  return Object.entries(obj);//I didn't know a nice way to do this but I found this great method on MDN
};
//console.log(transformToArr({ color: 'Blue', id: '22', size: 'xl' }));

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }
const transformFromArr = entries => {
    return Object.fromEntries(entries);
};
//console.log(transformFromArr([['color', 'blue'], ['id', '22'], ['size', 'xl']]));

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]
const task9 = (arr1,arr2) => {
    const tempArr = [];
    const shorterArrLength = arr1.length > arr2.length ? arr2.length : arr1.length;
    for(let i=0; i<shorterArrLength; i++){
        const tempTuple = [];
        tempTuple.push(arr1[i],arr2[i]);
        tempArr.push(tempTuple);
    }
    return tempArr;
};
//console.log(task9([1,2,3],[4,5,6,7]));

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'
const task10 = (arr,obj) => {
    let tempObj = {...obj};//copy obj
    arr.forEach(el => {
        tempObj = tempObj[el];
    });
    return tempObj;
};
//console.log(task10(['a', 'b', 'c', 'd'],{ a: { b: { c: { d: '23' } } } }));

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const task11 = (obj1,obj2) => {
    if(Object.keys(obj1).length !==  Object.keys(obj2).length){//if length is different obj cant be equal
        return false;
    }
    for(const property1 in obj1) {
        let find = false;
        for(const property2 in obj2){
            if(property1 === property2 && obj1[property1] === obj2[property2]){
                find = true;
            }
        }
       if(!find) return false;
    }
    return true;

};
//console.log(task11({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }));
//console.log(task11({ a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }));

// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }
const task12 = (arr,obj) => {
    const objCopy = {...obj};
    arr.forEach(el => {
        for(const property in obj){
            if(el === property){
                delete objCopy[property];
                break;
            }
        }
    });
    return objCopy;
};
//console.log(task12(['color', 'size'],{ color: 'Blue', id: '22', size: 'xl' }));



