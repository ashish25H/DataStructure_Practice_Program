const isPowerOfTwo = (num) => {
 let rem;
 while(num>1){
    rem = num%2;
    if(rem !== 0){
        return false;
    }
    num = Math.floor(num/2);
 }
 if(num === 1){
    return true;
 }
};

console.log(isPowerOfTwo(16));
