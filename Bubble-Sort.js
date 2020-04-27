//Bubble Sort

function bubble(arr){

    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
                if(arr[j]>arr[j+1]){
                    let temp =arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }

        }
    }
    return arr;
}

bubble([3,8,1,6])
