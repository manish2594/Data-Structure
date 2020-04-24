// Binary Search
function binarySearch(arr,num){
    let left= 0;
    let right = arr.length;

    while(left<=right){
        let middle = Math.floor((left+right)/2);

        if(arr[middle]>num){
            right=middle-1;
        }else if(arr[middle]<num){
            left=middle+1;
        }else{
            return middle;
        }

    }
    return -1;
}


binarySearch([1,3,4,5,6],1) 
//result 0


Time complexity ----O(logN)
Space complexity----O(1)
