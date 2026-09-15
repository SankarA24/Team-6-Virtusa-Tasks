function gcd(x: number, y: number): number {
    if (typeof x !== 'number' || typeof y !== 'number') throw new Error('gcd expects numbers');
    x = Math.abs(x);
    y = Math.abs(y);
    if (y === 0) return x;
    return gcd(y, x % y);
}
let n1 = -20;
let n2 = -8;
console.log('result:', gcd(n1, n2));
console.log(gcd(-15.6, -25));
console.log(gcd(-7.7, -3.3));
console.log(gcd(-10.6, -16));
