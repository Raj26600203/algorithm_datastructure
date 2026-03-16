const obj = {a:true};
const obj2 = obj; // It serves as a pointer

//Eg) 10 --> 5 -->16
let myLinkedList = {
    head:{
        value: 10,
        next: {
            value:5,
            next:{
                value:16,
                next: null, //The tail of the linked list 
            }
        },
    },
    
    
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList {
    constructor(value){
        //The first node of a linked list being created
        this.head ={
            value:value,
            next:null,
        }
        //This defines the tail of a newly created linked list as its head at the time it is instantiated
        this.tail = this.head;

        this.length = 1;
    };

    append(value){
        console.log('-'.repeat(30));
        console.log('Append function is called');
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        console.log('-'.repeat(30));
        return this;    
    };

    prepend(value){
        console.log('-'.repeat(30));
        console.log('Prepend function is called');
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
        console.log('-'.repeat(30));
        return this;
    };

    insert(index, value){
        //overriden node -1 -->new node --> overridden node --> overridden node + 1 
        console.log('-'.repeat(30));
        console.log('[insert] Insert function is called');
        
        console.log(`[insert] index passed: ${index} and value ${value}`)
        const newNode = new Node(value);
        if(index >= this.length-1){
            console.log(`[insert] Passed Index ${index} exceeded the one of the last node, hence the value has been appended`);
            this.append(value);
            return this;
        };

        if(index <= 0){
            console.log(`[insert] Passed Index ${index} is less than or equal to 0, so the value ${value} will be prepended`);
            this.prepend(value);
            return this;
        }

        const previousNodeOfNewNode = this.traversalToIndex(index-1);
        
        
        console.log('[insert] Previous node of the new node is ');
        console.log(previousNodeOfNewNode);
        
        newNode.next = previousNodeOfNewNode.next;
        console.log(`[insert] The new node's next node is the one of the previous node - New node:`);
        console.log(newNode)

        previousNodeOfNewNode.next = newNode;
        console.log(`[insert] The new node is set to the previous node's next property`);
        console.log(previousNodeOfNewNode);

        console.log(`[insert] The new node is followed by`)
        console.log(newNode.next);

        this.length ++;
        console.log('-'.repeat(30));
        return this;
    }

    delete = (index) => {
        console.log('-'.repeat(30));
        console.log('Delete function is called');
        
        console.log(`[delete]index passed: ${index}`)   
        if(index < 0 || index > (this.length -1)){
            console.log('Index is out of bound');
            return this;
        } 
        const previousNode = this.traversalToIndex(index-1);
        const nodeTobeRemoved = previousNode.next;
        console.log(`[delete]The previous node of a node to be deleted is: `);
        console.log(previousNode);
        console.log(`[delete]The current next node set to the node  to be deleted is: `)
        console.log(nodeTobeRemoved.next);
        console.log(`[delete]Replacing the previous node's next value to the next node of the node to be removed....`);
        previousNode.next = nodeTobeRemoved.next;
        console.log(previousNode.next);        
        
        this.length --;
        if(!previousNode.next){
            console.log('[delete]The tail node has been removed. Overriding the tail information');
            this.tail = previousNode;
        }
        console.log(`[delete]Now the index of ${index} is set to`);
        console.log(previousNode.next??'Null as the removed node was the tail, which is currently'+ this.tail.value);
        console.log('-'.repeat(30));
        return this;
    }

    traversalToIndex = (index) => {
        let counter = 0;
        let currentNode = this.head;
        
        while(counter !== index){
            currentNode = currentNode.next;
            counter ++;
        }

        return currentNode;
    }

    print(){
        let currentNode = this.head;
        let result = '';
        while(currentNode){
            result += `${currentNode.value} ->`;
            currentNode = currentNode.next;
        }
        console.log(result+'null');
    }

    reverse_old(){
        console.log('-'.repeat(30));
        console.log('Reverse function is called');
        console.log('-'.repeat(30));
        let currentNode = this.head;
        //Make a deep copy, otherwise the head's next property would be overridden.
        this.tale = {
            value:this.head.value,
            next:null,
        };

        for(let i=1; i<this.length; i++){
            //! No traversal - the loop never moves to the next node by currentNode.next
            //!The operations only swap the data, not the structure of the linked list, swapping and updating nodes themselves
            debugger;
            let currentValue = currentNode.value;
            currentNode.value = currentNode.next.value;
            currentNode.next.value =  currentValue;
            this.head = currentNode;
        }
        console.log('Reversed head is ')
        console.table(this.head);
        console.log('Reversed tail is ')
        console.table(this.tail);
        return this;
    }
    reverse() {
        //When the linked list only has an element, this will return the head.
        if(!this.head.next){
            return this.head;
        }

        let first = this.head;
        let second = first.next;

        //Cut off the unecessary following node details of the head, which will be placed at the tail
        this.head.next=null;
        this.tail = this.head;

        //[0,1,2,3,4,5,6]
        /**
         * head: 0->1->2->3->4->5->6
         * first: 0->1->2->3->4->5->6
         * second: 1->2->3->4->5->6
         * head: 0 ->null (head.next = null)
         * loop 1:
            * temp = second.next
            * temp = 2->3->4->5->6
            * second.next = first
            * second = 1->0->null
            * first = second
            * first = 1->0->null
            * second = temp
            * second = 2->3->4->5->6
        * loop 2:
            * temp = second.next
            * temp : 3->4->5->6
            * second.next = first
            * second: 2->1->0->null
            * first = second
            * first = 2->1->0->null
            * second = temp
            * second = 3->4->5->6
            * 
        */

        while(second){
            const nextAdjacentNode = second.next;
            //Reverse the pointer the second node of the consecutive pair
            second.next = first;
            
            //Replace the first node with the second one of the consecutive pair, which points to the first
            first = second;

            //Set the node right next to the second, currently the first node, to the second node
            second = nextAdjacentNode;

        };

        this.head = first;

        return this;
    }
}

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(2);
myLinkedList1.append(3);
myLinkedList1.prepend(1);
//1,1,2,3
myLinkedList1.insert(2,1.5)
myLinkedList1.print();
//1,1,1.5,2,3
myLinkedList1.delete(1);
//1,1.5,2,3
myLinkedList1.print();

//3,2,1.5,1
myLinkedList1.reverse();
myLinkedList1.print();


console.log('Linkedlist Now');
console.log(myLinkedList1);
