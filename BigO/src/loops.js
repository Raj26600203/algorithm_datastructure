const fishes = [
    'dory','bruce','martin','nemo','gill','bloat','nigel','squirt','darla','hank'
];

function findNemo (array){
    for (let i=0; i<array.length;i++){
        if(array[i] == 'nemo'){
            console.log('Found Nemo');
        }
    }
};

findNemo(fishes);

/**
 * This function takes the parameter named array
 */
const findNemo2 = array => {
    array.forEach(element => {
        if (element == 'nemo'){
            console.log('Found Nemo');
        }
    });
};

findNemo2(fishes);

const findNemo3 = array => {
    for(let i of array){
        if(i == 'nemo'){
            console.log('Found Nemo');
        }
    }
};

findNemo3(fishes);