const arr = [4,6,2,1,9,56,45,34];

const findItem = (num)=>{
    for (const item of arr) {
        if(num === item){
            return 'present';
        }
    }
    return 'not present';
}


console.log(findItem(10));
