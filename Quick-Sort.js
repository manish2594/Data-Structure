function pivot(arr,start=0,end=arr.length+1){
    var pivot = arr[start];
    var swapIndx=start;
//     const swap = (arr,i,j)=>{
//        [arr[i],arr[j]]=[arr[j],arr[i]];
//     }

   function swap(arr,i,j){
       let temp = arr[i];
       arr[i]=arr[j];
       arr[j]=temp;
   }

   for(var i=start+1;i<arr.length;i++){
       if(pivot>arr[i]){
        swapIndx++;
        swap(arr,swapIndx,i);
        console.log(arr)
       }
   }
   swap(arr,start,swapIndx);
console.log(arr)
   return swapIndx
}

//pivot([4,8,2,1,5,7,6,3])

function quickSort(arr,left=0,right=arr.length-1){
   if(left<right){
         var pivotIndex = pivot(arr,left,right);
    //left
    quickSort(arr,left,pivotIndex-1);
    //right
     quickSort(arr,pivotIndex+1,right);
   }
   return arr;
  
}

quickSort([4,8,2,1,5,7,6,3])
