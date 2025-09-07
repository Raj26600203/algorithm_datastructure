// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1) : Whether to consider assignment as BigO should be dependent on person.
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); //Big(?) -> O(n)
    let stranger = true;//Big(?) -> O(n)
    a++;//Big(?) -> O(n)
  }
  return a;//O(1)
}

//BIG O (3+4n);

/*
* The scalability of this function would be Big(n). This is because the function
* goes through the elements in the input in the for loop, executing several lines
* that may take a certain amount of time per iteration.
* Therefore, the total amount of BigO should change linearly.
*/

function bigOConstants(items){
    console.log(items[0]);
    
    //O(1) - If we care about constants
    var middleIndex = Math.floor(items.length/2);
    var index = 0;
    
    
    //O(n/2) - If we care about constants. 
    while (index < middleIndex){
        console.log(items[index]);
        index ++;
    }
    
    //O(100) - If we cared about constants, the number of operations executed
    for(var i = 0; i < 100; 1++){
        console.log('hi');
    }
    
    
}
//O(n/2+101) - This would be the outcome when we cared about constants in the Big O notation.
//However, this is still liner, thus the scalability of the algorithm itself is O(n)


function bigOConstants(items,items2){
    items.forEach(function(item) {
       console.log(item);
   });
    
    items2.forEach(function(item) {
       console.log(item);
   });
    
    //The number of operations should be N(items) + N(items2)
    //This is because each funtion depends on the size of each parameter it takes
    //Therefore, BigO notation should be O(a+b)
}

function nestedLoop (numbers){
    numbers.forEach(function(number1) {
        //O(N)
        numbers.forEach(
            //O(N)
            function(number2)
            {
                console.log(`A pair of ${number1} & ${number2}`);
                
            }
            );
    });
    //O(N*N) thus O(n^2)
}
nestedLoop([0,1,2,3,4,5]);