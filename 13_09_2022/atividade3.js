var idade = 0
var idadeJovem = 0
var idadeSenhor = 0

while (idade > -99){
    var idade = Number(prompt("Digite sua idade...:"))
    if (idade > 0 && idade <=21){
        idadeJovem ++
    }
    else if (idade >= 50){
        idadeSenhor ++
    }
}
alert("Encerrando.")
alert(`Idades Jovens : ${idadeJovem}`)
alert(`Idades Sennhor: ${idadeSenhor}`)