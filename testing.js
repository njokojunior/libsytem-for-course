const nesf = [1,3,5,6,9]

// console.log(nesf.indexOf(6));
const dind = nesf.findIndex(n => n ===6);

console.log(nesf.splice(dind,1)[0]);

console.log(nesf)

