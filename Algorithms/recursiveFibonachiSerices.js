<<<<<<< HEAD
const fibo = (num,a=-1,b=1)=>{
    if(num===0){
        return;
    }

    console.log(a+b);
    fibo(num-1,b,a+b);
}

// fibo(7);

const recFibo = (n)=>{
    if(n<2){
        return n;
    }
    return recFibo(n-1) + recFibo(n-2);
}

=======
const fibo = (num,a=-1,b=1)=>{
    if(num===0){
        return;
    }

    console.log(a+b);
    fibo(num-1,b,a+b);
}

// fibo(7);

const recFibo = (n)=>{
    if(n<2){
        return n;
    }
    return recFibo(n-1) + recFibo(n-2);
}

>>>>>>> 3c033c9 (new files)
console.log(recFibo(6));