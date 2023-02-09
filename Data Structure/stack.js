class Stack{
    constructor(){
        this.items = []
    }

    push(ele){
        this.items.push(ele);
    }

    pop(){
        this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items);
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
// stack.print();
// stack.pop();
// stack.print();
console.log(stack.peek());

