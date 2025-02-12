const fruits=['Apple','Banana','Jackfruit','Orange','Mango'];
/*First Technique for array Traversing */
for(const fruit of fruits){
    console.log(fruit);
}

/*Second Technique for array Traversing */
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

/*Third Technique for array Traversing using while loop */
i=0;
while(i<fruits.length)
{
    console.log(fruits[i]);
    i++;
}