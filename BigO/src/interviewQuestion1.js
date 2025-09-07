//Suppose two arrays, create a function that let a user know if these two arrays contain any 
// common  items

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
};

//Quaradic approach