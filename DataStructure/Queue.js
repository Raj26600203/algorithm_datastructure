import Node from "./Node.js";
export class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    isEmpty(){
        if (this.length < 1){
            return true;
        }
        return false;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(!this.first){
            console.log('[enqueue] This is the first value enqueued')
            this.first = newNode;
            this.last = newNode;
            
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        
        this.length ++;
        return this;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('[dequeue]Nothing to dequeue')
            return this;
        }

        //Amend1: Add another pattern when the last node is the first node. In this case, we evemntually have nothing for the last node.
        if(this.length === 1){
            this.last = null;
        }
        //Amend2: As JS is one of garbage collecting programming languages, if you wanna keep the deleted node, just store it in a variable and return it.
        const dequeuedNode = this.first;
        const newHead = this.first.next;
        this.first = newHead;

        //Amend3: Don't forget to decrement the length by one whenever a node is deleted.
        this.length --;

        return this;
    }
}

const myQueue = new Queue();
console.log(myQueue.isEmpty()?'The queue is  empty':'The queue is not empty');
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));
console.log(myQueue.enqueue(4));

/**
 * tail->4->3->2->1 ->head
 */
console.log(myQueue.isEmpty()?'The queue is empty':'The queue is not empty');
console.log(myQueue.peek()); // This should be 1
console.log(myQueue.dequeue());
console.log(myQueue.peek());// This should be 2