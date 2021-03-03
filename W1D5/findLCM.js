function calculateLCM(n1, n2) {
    let larger = Math.max(n1, n2);
    let smaller = Math.min(n1, n2);
    while (larger % smaller !== 0) {
        larger += larger;
    }
    return larger;
}

let result = calculateLCM(9, 27);
console.log(result);