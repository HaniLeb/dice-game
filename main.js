let vainqueur = document.querySelector("h1");

const btn = document.querySelector("button");

let imgP1 = document.querySelectorAll("img")[0];
let imgP2 = document.querySelectorAll("img")[1];

const player1 = document.querySelectorAll("h2")[0];
const player2 = document.querySelectorAll("h2")[1];


// btn.addEventListener('click', () =>{
// let aleatoireP1 = Math.floor(Math.random() * 6) + 1;
// let aleatoireP2 = Math.floor(Math.random() * 6) + 1;

//     imgP1.src = `dice${aleatoireP1}.png`
//     imgP2.src = `dice${aleatoireP2}.png`

//     if (aleatoireP1 > aleatoireP2) {
//         vainqueur.innerText = `Victoire du Joueur 1`
//         player1.style.color = "green";
//         player2.style.color = "red";
//     }else if (aleatoireP1 < aleatoireP2) {
//         vainqueur.innerText = `Victoire du Joueur 2`
//         player2.style.color = "green";
//         player1.style.color = "red";
//     }else{
//         vainqueur.innerText = `Egalité !`
//     }
// })

// OU

const play = () =>{
    let aleatoireP1 = Math.floor(Math.random() * 6) + 1;
    let aleatoireP2 = Math.floor(Math.random() * 6) + 1;

    imgP1.src = `dice${aleatoireP1}.png`
    imgP2.src = `dice${aleatoireP2}.png`

    if (aleatoireP1 > aleatoireP2) {
        vainqueur.innerText = `Victoire du Joueur 1`
        player1.style.color = "green";
        player2.style.color = "red";
    }else if (aleatoireP1 < aleatoireP2) {
        vainqueur.innerText = `Victoire du Joueur 2`
        player2.style.color = "green";
        player1.style.color = "red";
    }else{
        vainqueur.innerText = `Egalité !`
    }
}

btn.addEventListener('click', play);
