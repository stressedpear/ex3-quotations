// 3.1 
export function flattening(list){
    let arrays = [[1, 2, 3],[4, 5], [6]]
    let flatten = arrays.reduce((previousValue, currentValue) =>
     previousValue.concat(currentValue), []);
    console.log(flatten)
}