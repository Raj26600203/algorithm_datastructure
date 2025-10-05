/**
 *A function to check whether there is a pair of elements stored in a given array whose sum equals a specific number.
 *The elements are stored in ascending order.
 */

function hasPairWithSum (array, sum){
    console.log(`${array1} find a pair whose sum equals ${sum}`);
    const mySet = new Set();
    const length = array.length;

    for(let i=0; i<length; i++){
        console.log(mySet);
        if(mySet.has(array[i])){
            return true;
        }
        //Add the number that, toghether with the current element, makes up the target sum.
        mySet.add(sum - array[i]);
    }
    return false;
};

const array1 =[0,1,2,3,4,5];
const sum1 = 9;
const array2 = [1,1,1,1];

console.log(hasPairWithSum(array1,sum1));
