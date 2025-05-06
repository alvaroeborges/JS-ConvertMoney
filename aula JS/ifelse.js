
/* controlador de fluxo
    IF (se) 
    Else (Se não) 

Operadores de comparação

    > maior que
    < menor que
    == igual que

O ELSE não é obrigatorio o uso dele, IF pode ser usado quantas vezes for necessário, mas o ELSE é opcional.

 */


const notaDoAluno = 5
const notaDeCorte = 5

if (notaDoAluno > notaDeCorte) {
    console.log("Parabéns, você passou de ano!")
} 

if (notaDoAluno < notaDeCorte) {
    console.log("Você foi reprovado!")
}

if (notaDoAluno == notaDeCorte){
    console.log("Passou na risca! Tem espaço para melhorar!")
}