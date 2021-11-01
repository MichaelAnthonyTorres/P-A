function addToFront(arr, val) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val;
}

function popFront(arr) {
    var value = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop();
    return value;
}

function insertAt(arr, val, ind) {
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val

}

var myArray = [8,3,5,9,2];
addToFront(myArray, 4);
console.log(myArray)
popFront(myArray)
console.log(myArray)
insertAt(myArray, 2, 3)
console.log(myArray)