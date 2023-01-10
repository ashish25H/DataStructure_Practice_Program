const fibo = (n) => {
  let a = -1;
  let b = 1;
  let arr=[];

  for (let i = 0; i < n; i++) {
    let c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }
  return arr;
};

console.log(fibo(10));
