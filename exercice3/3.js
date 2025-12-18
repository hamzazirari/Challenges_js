let n = parseInt(prompt("entrer la taille de tableau"));

let tab = [];

for(let i = 0 ;i < n ; i++){
    let valeur = parseInt(prompt("Entrer la valeur numero"+(i+1)));
    tab.push(valeur);
}
console.log("table non trier"+tab);

// function sortArray(tab){
//     let temp;
//     for(let i = 0 ; i< tab.length ; i++){
//         for(let j = 0 ; j< tab.length-i-1 ; j++){
//              if(tab[j]>tab[j+1]){
//                 temp = tab[j];
//                 tab[j] = tab[j+1];
//                 tab[j+1] = temp;
//              }
//         }
//     }
//     return tab;
// }

 tab.sort((a, b) => a - b);
 console.log("tableau trier"+tab);