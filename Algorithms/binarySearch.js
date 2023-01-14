const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (arr, left, right, mid, target) => {
  if (left > right) {
    console.log(`not present`);
  }
  if (target === arr[mid]) {
    console.log(`present index is ${mid}`);
  } else if (target > arr[mid]) {
    left = mid + 1;
    mid = Math.floor((left + right) / 2);
    binarySearch(arr, left, right, mid, target);
  } else if (target < arr[mid]) {
    right = mid - 1;
    mid = Math.floor((right + left) / 2);
    binarySearch(arr, left, right, mid, target);
  }
};

let mid = Math.floor((0 + arr.length - 1) / 2);


binarySearch(arr, 0, arr.length - 1, mid, 0);










