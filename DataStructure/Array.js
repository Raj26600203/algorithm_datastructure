const strings = ['a','b','c','d'];
//In a 32 bis system -> 4*4byets =?\> 16byts of storage are used.

strings[2]; //Lookup - O(1)


//Push - addit to a the end of the array
strings.push('e'); //O(1) - done without looping thru it

//pop - remove the last item
strings.pop(); //O(1) - Done without the iteration

//unshift - add an element at the begginnin of the array
strings.unshift('x');