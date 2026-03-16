import LinkedList from "./LinkedList.js";

export class LinkedListStack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    peek(){
        if(this.linkedList === undefined){
            console.warn('The stack is empty.')
            return this;
        }
        return this;
    }

    push(value){
        if(this.isEmpty()){
            this.linkedList = new LinkedList(value);
        }else{
            this.linkedList.append(value);
            this.top = this.linkedList.tail;
            this.bottom = this.linkedList.head;
        }
        this.length ++;
        return this;
    }

    pop(){
        if(this.isEmpty()){
            console.warn('The stack is empty');
            return null;
        }
        this.linkedList.delete(this.length-1);
        this.top = this.linkedList.tail.value;
        this.length --;
        return this;
    }

    isEmpty(){
        if (this.length < 1){
            return true;
        }
        return false;
    }

}

export class ArrayStack {
    constructor(){
        //this.top = null; //Revision: not necessary - save memory
        //this.bottom = null; //Revision: not necessary - save memory 
        this.array = []; 
        //this.length = 0; //Revision: not necessary - save memory
    }
    isEmpty(){
        if (this.array.length <= 0){
            console.warn('[isEmpty] The stack is empty')
            return true;
        }
        return false;
    }

    peek() {
        // if(this.isEmpty){
        //     return null;
        // }
        // return (this.top);
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        // this.top = value;
        // this.length ++;
        return this;
    }

    pop(){
        this.array.pop();
        //this.top = this.array(this.length-1);
        this.length --;
        return this;
    }
}


const myStack = new LinkedListStack();
myStack.peek();
myStack.push(1);
myStack.push(2);
myStack.push(3);
/**
 * |3|
 * |2|
 * |1|
 */
console.log(`The top of the stack is ${myStack.peek()}`);
myStack.pop();
console.log(`The top of the stack is ${myStack.peek()}`);
