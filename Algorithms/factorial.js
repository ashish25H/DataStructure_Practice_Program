const factorial = (n)=>{
    let pro = 1;
    while(n){
        pro *= n;
        n--;
    }
    return pro;
}

console.log(factorial(7));