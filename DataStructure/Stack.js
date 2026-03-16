import LinkedList from "./LinkedList.js";

export default class Stack {
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
        return this.top;
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
        if(this.linkedList === undefined){
            console.warn('The stack is empty');
            return this;
        }
        this.linkedList.delete(this.length-1);
        this.top = this.linkedList.tail.value;
        this.length --;
        return this.top.value;
    }

    isEmpty(){
        if (this.length < 1){
            return true;
        }
        return false;
    }

}


const myStack = new Stack();
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
