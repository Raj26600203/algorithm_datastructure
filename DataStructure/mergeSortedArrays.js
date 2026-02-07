/**
 * This function will merge passed sorted arrrays and sort the merged one.
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 */

function mergeSortedArrays (arr1,arr2){
    sortedArr = arr1.concat(arr2);//O(a+b) - Concat
    // console.log(`Merged Array : ${sortedArr}`);
    isSorted = false;
    while(!isSorted){
        isSorted = true;
        for(i=0;i<sortedArr.length-1;i++){
            current = sortedArr[i];
            // console.log(`The current element is ${sortedArr[i]}`);
            // console.log(`The next element is ${sortedArr[i+1]}`);
            next = sortedArr[i+1];
            if(current>next){
                sortedArr[i] = next;
                // console.log(`The current one will be ${sortedArr[i]}`);
                sortedArr[i+1] = current;
                // console.log(`The next one will be ${sortedArr[i+1]}`);
                isSorted = false;
            }
        }
    }//O((a+b)^2) in the worst case. The outer array could reapeat upt to n+m times in the worst case, and the inner (n+m-1) when the merged array is in the desceding order
    return sortedArr;
};

console.log("merge sorted array1 "+mergeSortedArrays([1,5,7,8,24,78,327],[4143,5135,999]));

console.log("merge sorted array2 "+mergeSortedArrays2([1,5,7,8,24,78,327],[4143,5135,9999]));


console.log("merge sorted array2 "+mergeSortedArrays2([1,5,7,8,24,78],[4143,5135,9999,100000,200000,2500000]));



/**
 * Make the O(N) as small as possible without having the out of bounce error when accessing to a value of the undefined data type.
 * 
 */
function mergeSortedArrays2 (array1, array2){
    console.log(`passed arrays are ${array1} & ${array2}`);
    const mergedArray = [];
    let indexOfArr1 = 1;
    let indexOfArr2 = 1;
    let array1Item = array1[0];
    let array2Item = array2[0];

    if(array1.length===0){
        console.log(`Array1 Length is ${array1.length}`);
        return array2;
    }
    if(array2.length === 0){
        console.log(`Array2 Length is ${array2.length}`);
        return array1;
    }

    //O(N)

    while (array1.length>indexOfArr1&&array2.length>indexOfArr2) {
        console.log('Fired the loop!')
        //In order to avoid the programme accessing the index having undefined the left operation has been added.
        //Undefined is bigger than any numeric values, thus this check is not necessary in the other block.
        if(array1Item > array2Item){
            console.log(`pushed ${array2Item}`)
            //If the element in the array2Item is less than the one in the array1Item, then the former will be stored in the new array and the array2Item will have the next element as its value.
            console.log(`IndexOfArray2 is now ${indexOfArr2} : ${array2Item}`);
            mergedArray.push(array2Item);
            array2Item = array2[indexOfArr2];
            indexOfArr2++;
        }else{
            console.log(`IndexOfArray1 is now ${indexOfArr1} : ${array1Item}`);
            mergedArray.push(array1Item);
            array1Item = array1[indexOfArr1];
            indexOfArr1++;
        }
    }//min(n,m)

    //O(N)
    if(array1.length<array2.length){
        console.log(('fired array1.length < array2.length'))
        console.log(('index of Array2 is at ' + indexOfArr2))
        for(i=indexOfArr1;i<array1.length;i++){
            console.log(('index of Array2 is at ' + indexOfArr2))
            mergedArray.push(array1[i]);
        }
    }else{
        console.log(('fired array1.length > array2.length'))
        for(i=indexOfArr2;i<array2.length;i++){
            console.log(('index of Array1 is at ' + indexOfArr1))
            mergedArray.push(array2[i]);
        }
    }//|n-m| times


    /**
     *  The sum of the number of operations should be min(n,m)+|n-m| = n+m - min(n,m)
     * 
     *  it’s still linear. We just tend to write O(n + m) to make it clear the work depends on both arrays, not just one of them. 
     * If you bundle them together under a single N, it becomes O(N); same idea, different wording.
     */
    return mergedArray;
}