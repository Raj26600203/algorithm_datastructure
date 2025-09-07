//Suppose two arrays, create a function that let a user know if these two arrays contain any 
// common  items


//Check the size of given arrays, considering whether to take BigO notiation into account
//Big O notation is a concept, not requiring the definite article
const myCompArray = (firstArray, secondArray)=>{
   firstArray.forEach(elemOfFirstArr => {
        secondArray.forEach(
            elemOfSecondArr =>{
                if(elemOfFirstArr === elemOfSecondArr){
                    return true;
                }

            }
        )
   });
   //Space - O(1) it just takes parameters without creating variables　
};

//The above approach is quaradic approach, which needs to be revised.
//Why is this approach not ideal? - O(a*b), given the input parameters could have the different sizes

//Use object to reduce the size of Big O 

/**
 * 
 * @param {
 * } array1 
 * @param {*} array2 
 * 
 * Create an object that stores elements in the following format, give the array below.
 * arr1 = [x,y,z,z,t,s]
 * {
 *  x:true,
 *  y:true,
 *  z:true
 *  t:true,
 *  s:true,
 * }
 * 
 * 
 */

function betterApproach1 (array1, array2){
    let objOfArr1 = {
    };
    array1.forEach(
        element => {
            //objOfArr1.element = true;
            //The correct syntax to use for mapping a value with an arbitrary name should be
            objOfArr1[element]==true;
        }
        //This can map the duplicated element -> need an additional validation logic
    );

    array2.forEach(
        element =>{
            if(objOfArr1.element === true){
               return true; 
            }
            //dont place a return false statement here since it would terminate the loop without looking at remaining elements once there is an element that does not match any in the other array
        }
    )
        // return false should be placed here 
};

function sampleSolution (array1, array2){
    let map = {

    }; //Space O(a) - the size of object is relative to the one of array1
    for (let i=0; i<array1.length; i++){
        //Validate if the element it is at is not yet mapped to the object
        //If map does not have a property named as the value of the element this loop is looking at 
        if(!map[array1[i]]){
            const item = array1[i];
            //Map the element as a property name with its value of true
            map[item] = true;
        }
    } 
    console.log(map);
    console.log(array2);
    for (let j=0; j<array2.length; j++){
        //If the element is not yet mapped the conditional statement below returns undefined.
        if(map[array2[j]]){
            return true;
        }
    }
    return false;
}

const array1 = ['x','y','z','z','s'];
const array2 = ['1','z','d','9'];
const array3 = ['1','2','3','4'];

const result = sampleSolution(array1,array3);
console.log(`Is there a matching element - ${result}`);
//BigO of this solution is O(a+b)

//Enchance readablity - if your team were familiar with JS, this would be better
function sampleSolution2 (array1, array2){
    array1.some(element =>{array2.includes(element)});
}

