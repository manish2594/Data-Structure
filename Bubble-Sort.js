//Bubble Sort

function bubble(arr){

    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
                if(arr[j]>arr[j+1]){
                    let temp =arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    //swap(arr,j,j+1);
                }

        }
    }
    return arr;
}

bubble([3,8,1,6])

// swap function
const swap=(arr,indx1,indx2)=>{
 [arr[indx1],arr[indx2]]=[arr[indx2],arr[indx1]];
}








//optimised code


function bubble(arr){
  let noSwap;
    for(let i=arr.length;i>0;i--){
        noSwap=true;
        for(let j=0;j<i-1;j++){
                if(arr[j]>arr[j+1]){
                    let temp =arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                     noSwap=false
                    //swap(arr,j,j+1);
                }
        
        }
          if(noSwap){
              break;
          }
    }
    return arr;
}
