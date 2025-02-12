const numbers=[4,7,12,3,45,56,33];

const assending=[...numbers].sort(function(a,b){return a-b})
const desending=[...numbers].sort(function(a,b){return b-a})

console.log(assending);
console.log(desending)
