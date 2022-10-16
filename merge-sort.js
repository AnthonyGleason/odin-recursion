function mergeCompare (lhalf, rhalf){
    if (lhalf[0]==undefined) return rhalf;
    if (rhalf[0]==undefined) return lhalf;
    if (lhalf.length==1 & rhalf.length==1){
        if (lhalf[0]>rhalf[0]){
            return rhalf.concat(lhalf);
        }else{
            return lhalf.concat(rhalf);
        }
    }else{
        let newArr=[];  
        while (lhalf.length>0 || rhalf.length>0){
            if (lhalf[0]==undefined){
                newArr.push(rhalf.shift());
            }else if(rhalf[0]==undefined){
                newArr.push(lhalf.shift());
            }else if (lhalf[0]>rhalf[0]){
                newArr.push(rhalf.shift());
            }else if (lhalf[0]<=rhalf[0]){
                newArr.push(lhalf.shift());
            }else{
                console.log('something went wrong, an array element is invalid!');
            }
        }
        return newArr;
    }
};

function mergeSort(arr){
    if (arr.length==0) return [];
    if (arr.length==1) return arr;
    let lhalf = arr.slice(0, arr.length/2);
    let rhalf = arr.slice(arr.length/2, arr.length);
    return (mergeCompare(mergeSort(lhalf),mergeSort(rhalf)));
};

console.log(mergeSort([4,3,7,3,11,4,1,55,33,2]))