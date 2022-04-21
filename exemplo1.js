console.log("Início")

for(let i = 1; i <= 50; i++){
console.log(i);
}
console.log("1 a 50")

for(let n = 1; n <= 50; n++){
if (n == 25){
    break;
    }
    console.log(n);
}
console.log("Aconteceu o break")

for(let m = 1; m <= 50; m++){
    if (m == 10){
    continue;
    }
    console.log(m);
}


console.log("Fim")
