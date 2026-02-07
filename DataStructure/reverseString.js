function reverse (str) {
    const backwards = [];
    //To make the passed string an array, this operation is required.
    strArr=[...str];
    for(i=0; i < Math.floor(str.length/2); i++){
        firstChar = strArr[i];
        console.log(firstChar);
        strArr[i] = strArr[(str.length-1)-i];
        strArr[str.length-1-i] = firstChar;
        console.log(strArr[i]);
    };
    return strArr;
}; //O(n/2)

function reverseAnswer (str) {
    //Check input
    if(!str || str.length < 2){;
        console.log("Invalid Parameter")
        return null;
    };

    const backwards = [];

    for(i=str.length-1; i = 0; i --){
        backwards.push(str[i]);
    }

    return backwards.join('');
}; //O(n/2)

console.log(reverse('apple'));
//console.log(reverse('four'));