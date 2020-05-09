// function getDigit(num,place){

// let tempString= num.toString();
// let lastString = tempString[tempString.length-1-place];

// return parseInt(lastString)
// }
function getDigit(num,place){
    return Math.floor(num/Math.pow(10,place)) %10;
}

function getCount(num){
    if(num == 0) return 1;
    return Math.floor(Math.log10(num))+1;
}
 
 function mostDigitCount(arr){
     let maxDigit=0;
     for(let i=0;i<arr.length;i++){
         maxDigit = Math.max(maxDigit,getCount(arr[i]));
     }

     return maxDigit;
 }

//getDigit(1234,2);

function redixSort(nums){
    let maxDigitCount = mostDigitCount(nums);
    //console.log(maxDigitCount);


    for(let k=0;k<maxDigitCount;k++){
    let digitBuckets = Array.from({length:10},()=>[]);
    for(let j=0;j<nums.length;j++){
        let digit = getDigit(nums[j],k);
        digitBuckets[digit].push(nums[j]);
        
    }
    nums = [].concat(...digitBuckets);
    console.log(digitBuckets);
    }
    return nums
}

redixSort([2,10,100,30,22,9]);
