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

class LinkedList {
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
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;    
    }

    prepend(value){
        const newNode = new Node (value);
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
        return this;
    }
}

const myLinkedList1 = new LinkedList(1);
myLinkedList1.append(23);
myLinkedList1.append(32);
myLinkedList1.prepend(12);
console.log(`Head \n    value: ${myLinkedList1.head.value}, \n    next: ${myLinkedList1.head.next.value} \nTail \n   value: ${myLinkedList1.tail.value},\n   next: ${myLinkedList1.tail.next}`);