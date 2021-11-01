function reverseArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

function rotate(arr, shiftBy) {
    var shift;
    if (shiftBy > 0) {
       shift = shiftBy % arr.length;
    } else {
       shift = Math.abs(shiftBy) % arr.length;
    }
    if (shiftBy > 0) {
        for (var i = 0; i <shift; i++) {
            var temp = arr[arr.length - 1];
            for (var j = arr.length - 2; j >= 0; j--) {
                arr[j+1] = arr[j];
            }
            arr[0] = temp;
        }
    } else {
        for (var i = 0; i <shift; i++) {
            var temp = arr[0];
            for (var j = 1; j < arr.length; j++) {
                arr[j-1] = arr[j];
            }
            arr[arr.length - 1] = temp;
        }
    }
}

// Had no idea how to do this one (shift one) so I looked at the answer. Watched the video to understand it better.

function filter(arr, minVal, maxVal) {
    var nextInd = 0; 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= minVal && arr[i] <= maxVal) {
            arr[nextInd] = arr[i];
            nextInd++; 
        }
    }
    arr.length = nextInd; 
}

function concat(arr1, arr2) {
    var newArray = [];
    var index = 0;
    for (var i = 0; i < arr1.length; i++) {
        newArray[index] = arr1[i];
        index++;
    }
    for (var i = 0; i < arr2.length; i++) {
        newArray[index] = arr2[i];
        index++;
    }
    return newArray;
}


testArray = [4,2,6,7,3]
reverseArray(testArray)
console.log(testArray)
rotate(testArray, 2)
console.log(testArray)
filter(testArray, 2, 5)
console.log(testArray)
array_1 = [1,2,3,4,5]
array_2 = [6,7,8,9]
concat(array_1, array_2)
console.log(concat(array_1, array_2))