const finder = (array) => {
    let closestMatchedNumber = undefined;
    for (let i = 0; i < array.length; i++){
        for(let j = array.length-1; j >= 0; j --){
            //console.log(`Comparing index ${i} vs index ${j} -- ${array[i]} vs ${array[j]}`)
            if (array[i]===array[j]){
                console.log(`match index ${i} vs index ${j} : ${array[i]}`);
                closestMatchedNumber = array[i];
            }

        }
    }
    return closestMatchedNumber;
}

const finderNaiveSolution2 = (array) =>{
    let smallestIndexofMatched = -1;
    for(let i = 1; i < array.length; i++){
        for (let j = i + 1; j < array.length -1; j++){
            if(smallestIndexofMatched===-1 | j < smallestIndexofMatched){
                smallestIndexofMatched = j;
            }
            
        }
    }
    return smallestIndexofMatched === -1 ? undefined : array[smallestIndexofMatched];
}

const finderImproved = (array) => {
    let nonMatches = {};
    for(let i = 0; i < array.length; i ++){
        //Looking up a property in an object - a hashmap does not take as much time as we do for arrays
        if (nonMatches[array[i]] !== undefined){
            return array[i];
        }

        nonMatches[array[i]] = i;
        console.table(nonMatches);
    }
    return undefined;
}
/**
 * 
 * @param {*} array 
 * @returns 
 * 
 * O(N^2) in the worst case - the operation inside the inner loop will be executed (N-1) times at N th iteration. 
 * The total cost of iteration will be N*(N-1)/2 as it would be 1-length: 0 -> 2-length (0+1)=3 -> 2-length (1+1)=2 -> 3-length (2+2)=4
 * 
 */
const finderNaiveSolution = (array) => {
    let bigOCounter = 0;
    let nonMatches = [];
    for(let i = 0; i < array.length; i ++){
        for (let j = 0; j < nonMatches.length; j++){
            //console.log(`array[${i}] vs nonMatches[${j}]`)
            if(array[i]===nonMatches[j]){
                //Return is effective outside of the loop it appears in, terminating the whole method operation.
                return array[i];
            }
            bigOCounter++;
        }
        nonMatches.push(array[i]);
    }
    console.log(`Operation costs ${bigOCounter}`)
    return undefined;
}

const includes = (array, key) => {
    console.log(`passed array is ${array}`)
    for (let i = 0; i < array.length; i ++){
        if(array[i]===key){
            return true;
        }
    }
    return false;
    
}

const costSimulator = (maxLength) => {
//Observe changes in the times of operations done in the method
    unrepeatedNumberSet = [];
    for(let i = 1; i <= maxLength; i++){
        unrepeatedNumberSet.push(i);
        console.log(`Array length N = ${unrepeatedNumberSet.length}`);
        finderNaiveSolution(unrepeatedNumberSet);
    }   
}

//Array 1
const arr1 = [2,1,1,2,3,3,2,1];
//Array 2
const arr2 = [2,1,5,2,3,3,2,1];
//Array 3
const arr3 = [0,1,2,3,4,5,6];

console.log(`Better Solution O(N): First match in the array is ${finderImproved(arr2)}`)
console.log(`Naive Solution O(N^2) <- n(n-1): First match in the array is ${finderNaiveSolution(arr3)}`);
console.log(`Naive Solution2 O(N^2) <- n(n-1): First match in the array is ${finderNaiveSolution2(arr3)}`);

costSimulator(10);
 


