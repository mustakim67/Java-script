//write a function called count_zero() which will take a binary string as parameters and count how many  0's are there in the string?

function count_zero(binary_str) {
    let count = 0;
    for (let i = 0; i < binary_str.length; i++) {
        if (binary_str[i] === '0') 
        {
            count++;
        }
    }
    return count;
}

let binary_str = '01001111101';
let result = count_zero(binary_str);
console.log(result);