class ArrayStack {
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
        return this;
    }
}
export class QueueOnStack {
    constructor () {
        this.stack = new ArrayStack();
    }

    isEmpty(){
        return this.stack.isEmpty();
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack.array.pop();
    }

    enqueue(value){
        console.log('='.repeat(100));
        console.log('[enqueue] Starting....');
        console.log('='.repeat(100));
        if(this.isEmpty()){
            console.log('-'.repeat(40))
            console.log(`[enqueue]The base stack is empty.Pushing the value passed ${value}`);
            this.stack.push(value);
            console.log('-'.repeat(40))
        }else{
            const storage = [];
            //Make the stack empty with saving removed values
            while (this.stack.array.length !== 0){
                console.log('='.repeat(40));
                console.log(`Current base stack size is ${this.stack.array.length}`)
                console.log(`[enqueue] The current top value ${this.stack.peek()} in the base stack is evacuated to the storage`);
                storage.push(this.stack.peek());
                console.log(`The current storidge is`)
                console.log(storage);
                this.stack.pop();
                (`[enqueue] The top of the base stack has been removed. The current top is ${this.stack.top}`)
                console.log('='.repeat(40))
            }

            //Push a passed value into a stack
            console.log('-'.repeat(40))
            console.log(`[enqueue] Pushing the value passed ${value}`);
            this.stack.push(value);
            console.log('-'.repeat(40))
            
            //Push evacuated values from the latest to the oldest
            for(let j = storage.length-1; j >= 0; j--){
                console.log('='.repeat(40))
                console.log(`[enqueue]Pushing back the ${j} th value in the storage`);
                console.log(storage[j]);
                this.stack.push(storage[j]);
                console.log('='.repeat(40))
            }
            
        }
        console.log('='.repeat(100));
        console.log('[enqueue] Finishing ....');
        console.log('='.repeat(100));
        return this;
    }

    dequeue(){
        this.stack.pop();
        return this;
    }
}

const myQueue = new QueueOnStack();
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));
console.log(myQueue.enqueue(4));
console.log('Current base stack');
console.log(myQueue);

/**
 * tail->4->3->2->1 ->head
 */
console.log(myQueue.peek()); // This should be 1
console.log(myQueue.dequeue());
console.log(myQueue.peek());// This should be 2
