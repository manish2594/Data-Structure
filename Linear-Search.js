//Linear Search 
function linearSearch(arr,num){
  for(let i=0;i<arr.length;i++){
  if(arr[i]===num){
    return i;
  }
  }
  return -1
}

Time complexity --- O(n)
Space complexity----O(1)
