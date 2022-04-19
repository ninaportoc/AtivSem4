console.log("Início")
for(let i = 1; i < 50; i++){
console.log(i);

if (i === 10){
    console.log("CONTINUE");
   continue;
}
console.log("testando continue" + i);

if (i === 25){
    break;
}
}
console.log("Aconteceu o break")

console.log("Fim")