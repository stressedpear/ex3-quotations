// 3.1 
export function flattening(){
    let arrays = [[1, 2, 3],[4, 5], [6]]
    let flatten = arrays.reduce((previousValue, currentValue) =>
     previousValue.concat(currentValue), []);
    console.log(flatten)
}

// 3.2
export function loop(value, test, update, body){
    for (let n = value; test(n); n = update(n)) {
        body(n);
    }
}
loop(3, n => n > 0, n => n-1, console.log)

// 3.3
export function everyLoop(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}
console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));

// 3.4 
export function everySome(array, test){
    return !array.some(element => !test(element));
}
console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));
