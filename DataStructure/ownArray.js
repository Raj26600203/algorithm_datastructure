class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    };

    get (index){
        return this.data[index];
    };

    push(item){
        this.data[this.length] = item;
        this.length ++;
        return this.length;
    };

    pop(){
        //Get the last item
        const lastItem = this.data[this.length-1];  
        //Delete the last item
        delete this.data[this.length-1];
        //Decrease the length of the array;
        this.length --;
        return lastItem;
    };

    delete(index){
        const itemToDelete = this.data[index];
        this.shiftItems(index);
    };

    shiftItems(index){
        for (let i = index; i < this.length; i ++){
            this.data[i] = this.data[i + 1];
        };
        delete this.data[this.length-1];
        this.length --;
    };
};

const newArray = new MyArray();

console.log(newArray.push('hi'));
console.log(newArray.push('there'));
console.log(newArray.pop());
console.log(newArray);
