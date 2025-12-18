let base = parseInt(prompt("entrer la base"));
let exposant = parseInt(prompt("entrer l'exposant"));

// let result = 1;
// for(let i = 0 ; i < exposant ; i++){
//     result = result*base;
// }

let result = Math.pow(base,exposant);

console.log("la puissance des nombre entrer est :" +result)