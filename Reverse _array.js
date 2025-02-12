const array=[1,2,3,4,5,6,7,8,9,10];
console.log(array)
// Reversing Array with reverse function
console.log(array.reverse());

// Reversing array using Unshift method
const rev_array=[];
for(i in array)
{
    rev_array.unshift(i);
}
console.log(rev_array);

//Reversing array using For loop
for(i=array.length;i>=0;i--)
{   
    console.log(array[i]);
}