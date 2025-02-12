const numbers=[12,98,5,41,23,78,46];

const even_numbers=[];
for(let i=0;i<numbers.length;i++)
{
   if(numbers[i]%2==0)
   {
    even_numbers.push(numbers[i]);
   }
   else{
    continue;
   }
}
console.log(even_numbers);