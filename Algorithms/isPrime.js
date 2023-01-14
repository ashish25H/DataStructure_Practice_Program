<<<<<<< HEAD
const isPrime = (num) => {
  let i;
  if (num < 2) {
    return "Not Prime";
  } else {
    for (i = 2; i < Math.floor(num / 2); i++) {
      if (num % i === 0) {
        return "Not Prime";
      }
    }
    if (i >= Math.floor(num / 2)) {
      return "Prime Number";
    }
  }
};

console.log(isPrime(2));
=======
const isPrime = (num) => {
  let i;
  if (num < 2) {
    return "Not Prime";
  } else {
    for (i = 2; i < Math.floor(num / 2); i++) {
      if (num % i === 0) {
        return "Not Prime";
      }
    }
    if (i >= Math.floor(num / 2)) {
      return "Prime Number";
    }
  }
};

console.log(isPrime(2));
>>>>>>> 3c033c9 (new files)
