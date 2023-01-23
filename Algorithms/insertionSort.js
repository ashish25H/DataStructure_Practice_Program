const insertionSort = (arr) => {
  let numberToInsert;

  for (let i = 1; i < arr.length; i++) {
    numberToInsert = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > numberToInsert) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = numberToInsert;
  }
};

let arr = [4,2,7,90,34,12,89];
insertionSort(arr);
console.log(arr);
