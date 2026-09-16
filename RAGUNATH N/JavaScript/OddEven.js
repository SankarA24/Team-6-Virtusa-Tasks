function count(arr) {
    let e = 0;
    let o = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            e++;
        } else {
            o = o + 1;
        }
    }
    return { e: e, o: o };
}
let nums = [3, 6, 9, 12, 15, 18, 21, 4, 7];
let ans = count(nums);
console.log("arr :", nums);
console.log("even ->" + ans.e);
console.log("odd  ->" + ans.o);
