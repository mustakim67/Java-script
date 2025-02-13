function average(array,size)
{
    let sum=0;
    for(i=0;i<size;i++)
    {
        sum+=array[i];
    }
    
    return sum/size;
}

let array=[2,4,6,8,10,12,14,16,18,20]
let size=array.length;

let result=average(array,size);
console.log(result);