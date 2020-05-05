       function insertionSort(arr){
for(var i=1;i<arr.length;i++){
    var currentVal=arr[i];
    for(var j=i-1;j>=0 && arr[j]>currentVal;j--){
        console.log('swap',i,j,arr,arr[j],currentVal);
        arr[j+1]=arr[j];
    }
     arr[j+1]=currentVal;
}
//console.log(arr);
return arr;

}

insertionSort([5,1,2,3,4])
