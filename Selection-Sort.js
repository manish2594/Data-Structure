
function selectionSort(arr){

for(let i=0;i<arr.length;i++){
 let min = i;
   for(let j=i+1;j<arr.length;j++){
       if(arr[min]>arr[j]){
           min=j;
       }
   }

   console.log('swapped',arr,arr[i],arr[min]);

  
   let temp = arr[i];
      arr[i]=arr[min];
       arr[min]=temp;
      
}

return arr;


}

//swapping = length of aaray but in bublle sort ,on every compare swap is done

selectionSort([3,5,1,4,2]);
