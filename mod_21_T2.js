//Check if a number is odd multiply by 2 and return result. if even ,divide it by 2 and return result.

function check_even_odd(num)
{
    if(num%2==0)
    {
        return num/2;

    }
    else
    {
        return num*2;
    }
}

let result=check_even_odd(10);
console.log(result);