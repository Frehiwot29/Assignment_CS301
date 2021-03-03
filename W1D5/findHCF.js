function computeHCF(x, y) {
    while (Math.max(x, y) % Math.min(x, y) !== 0) {
        if (x > y) {
            x %= y;
        }
        else {
            y %= x;
        }
    }
    // When the while loop finishes the minimum of x and y is the HCF.
    return Math.min(x, y);
}
let result = computeHCF(27, 81);
console.log(result);