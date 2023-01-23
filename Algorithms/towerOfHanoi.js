

const tow = (n,main,using,target)=>{
    if(n===0){
        return
    }
    tow(n-1,main,target,using);
    console.log(`${main}->${target}`);
    tow(n-1,using,main,target);
}

tow(3,'A','B','C');
