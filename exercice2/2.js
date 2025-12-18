let chaine = prompt("entrer le mot");
let caractere = prompt("entrer le caractere ");

function countCharacter(chaine,caractere){
    let chaineMini = chaine.toLowerCase();
    let caractereMini = caractere.toLowerCase();
    let count = 0;
    for(let i = 0 ; i < chaineMini.length ; i++){
        if(chaineMini[i]===caractereMini){
            count++;
        }
    }
    console.log("Le caractère "+caractere+ " apparait " +count + " fois")
};