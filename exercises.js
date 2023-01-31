// 3.1 
function flattening(list){
    let arrays = [[1, 2, 3],[4, 5], [6]]
    function reduce(arrays, combine, start) {
        let current = start;
        for (let element of arrays) {
          current = combine(current, element);
        }
        return current;
      }
}