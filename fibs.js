//for loop

function fibs(n){
    let arr=[];
    for (let i=0; i<n; i++){
        (i==0) ? arr[i]=0 : (i==1) ? arr[i]=1 : arr.push(arr[i-2]+arr[i-1]);
    };
    return arr;
}

console.log(fibs(8));

//recursion

function fibsRec(n, arr=[]){
    console.log(n);
    if (n==0){
        return arr;
    }else if (arr.length==0){
        arr.push(0);
    }else if (arr.length==1){
        arr.push(1);
    }else{
        arr.push(arr[arr.length-2]+arr[arr.length-1])
    }
    return fibsRec(n-1, arr);
};
console.log(fibsRec(8));