function getRange(a, b) {
    var arr = [];
    if (a < b) {
        for (var i = a; i <= b; i++) {
            arr.push(i);
        }
    } else {
        for (var i = a; i >= b; i--) {
            arr.push(i);
        }
    }
    return arr;
}
var x = getRange(2, 8);
console.log(x);
let ans = getRange(15, 10);
console.log("second one : ", ans);
