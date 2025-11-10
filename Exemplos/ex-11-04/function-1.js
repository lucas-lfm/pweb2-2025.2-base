const range = function(start, end, step = 1) {
    if (end === undefined) {
        [start, end] = [1, start];
    }

    const isAsc = start < end;

    const intervalo = [];

    for(let i = start; isAsc ? i <= end : i >= end; isAsc ? i += step : i -= step) {
        intervalo.push(i);
    }

    return intervalo;
}

console.log(range(4));
console.log(range(3, 7));
console.log(range(2, 10, 2)); // deve retornar [2, 4, 6, 8, 10]
console.log(range(10, 5)); // deve retornar [10, 9, 8, 7, 6, 5]
console.log(range(12, -3, 3)); // deve retornar [12, 9, 6, 3, 0,-3]