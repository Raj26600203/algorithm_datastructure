class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            prev: null,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    };

    append = (value) => {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
        return this;
    };

    prepend = (value) => {
        const newNode = new Node (value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
        return this;
    };

    printList = () => {
        let counter = 1;
        let currentNode = this.head;

        while (counter <= this.length){
            console.table(currentNode);
            if(currentNode.next){
                currentNode = currentNode.next;
            }
            counter ++;
        }
    };

    insert = (index, value) => {
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value);
        //The previous node of a node inserted
        const previousNode = this.traverseToIndex(index -1);
        //The node that is being overridden by a node inserted.
        const overriddenNode = previousNode.next;

        newNode.prev = previousNode;
        newNode.next = overriddenNode;
        overriddenNode.prev = newNode;
        overriddenNode.value = newNode;
        this.length ++;
        return this;
    }; 

    traverseToIndex = (index) => {
        let counter = 0;
        let currentNode = this.head;
        if(index > this.length -1){
            console.log(`[traverseToIndex] Passed index ${index} is out of the bound, which is now ${this.length -1}`)
            return;
        }
        while(counter !== index){
            currentNode = currentNode.next;
            counter ++;
        }

        return currentNode;
    }
}

const newDoublyLinkedList = new DoublyLinkedList(0.1);
newDoublyLinkedList.append(0.2);
newDoublyLinkedList.prepend(0.01);
newDoublyLinkedList.printList();