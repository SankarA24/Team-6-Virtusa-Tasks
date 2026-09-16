var arr = [23,45,12,67,89,3,56,21,9,34];
var small = arr[0];
for(var i=0;i<arr.length;i++){
    if(arr[i]<small){
        small=arr[i];
    }
}
console.log("Array : "+arr);
console.log("Smallest element in the array is : "+small);
