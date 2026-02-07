class HashTable {
    constructor(size){
        this.data= new Array(size);
    }
    //A function returns a hash number based on the value passed as a key
    //_ means the method is private even though technically that can be accessed
    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i ++){
            //charCodeAt returns the unicode integer of a character
            //Modular is used for making sure the returned hash value is within the memory allocated.
            hash = (hash + key.charCodeAt(i)* i) % this.data.length
        }
        return hash;
    }

    set(key,value){
        //The variable represents the address of memory where a value is stored.
        let hashKey = this._hash(key);
        if(this.data[hashKey]===undefined){
            //Define an array at the address
            this.data[hashKey]= [];
            //The structure will be data[bucket[[k,v]]]
            this.data[hashKey].push([key,value]);
            return;
        }
        //TODO: How to deal with hash collision?
        //Add a new data after the existing data.
        //The structure will be data[bucket[[k1,v1],[k2,v2]]]
        this.data[hashKey].push([key,value]);
        return this.data;
    }
    get(key){
        let hashKey = this._hash(key);
        const currentBucket = this.data[hashKey];
        console.log(`Found this backet ${currentBucket}`);
        if(currentBucket.length){
            //If there is a record in a bucket this block is executed to check if there are multiple items that are pushed when collision happens
            //This explains why the big O notation could be, in the worst case, O(N) when there is a collision.
            //If there is no collision, there is only one backet to go through, thus the result of the Big O notation will be O(1)
            for(let i = 0; i < currentBucket.length; i ++){
                //Check keys of items in the bucket, which is set at the index 0
                if(currentBucket[i][0]===key){
                    //return the value stored at the index 1 if it matches with the key.
                    return currentBucket [i][1];
                }
            }
        }
        return undefined;
    }

    printTable(){
        let contents = ''
        for (let i=0; i<this.data.length; i++){
            contents += `Address ${i}: Bucket: ${this.data[i]} \n`
        }

        return contents;
    }
    keys(){
        const keysArray = [];
        if(this.data.length===0){
            return;
        }
        for(let i =0; i < this.data.length; i++){
            let currentBucket = this.data[i];
            //It takes O(N*^2) in the worst case, when there is a hash collision
            //The worst-case time complexity is O(n^2), which occurs when hash collisions take place.
            

            if(currentBucket.length > 1){
                //If there is a collision, another O(b) will be multiplied to o(a), which results in O(a+b)-> O(N)
                currentBucket.forEach(element => {
                    keysArray.push(element[0]);
                });
            }else if(currentBucket.length > 0) {
                keysArray.push(currentBucket[0][0]);
            }
            
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);


myHashTable.set('grapes',1000); // Define a bucket
myHashTable.set('apple', 6000);
myHashTable.get('grapes');
console.log(`The address is set to ${myHashTable._hash('grapes')}`);
console.log(
    `Current Hash Table : /\n ${myHashTable.printTable()}`
)
console.log(myHashTable.keys());
