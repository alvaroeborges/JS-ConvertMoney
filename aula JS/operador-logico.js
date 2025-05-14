/*
    Operadores Lógicos

    && -> E -> Pessoa Exigente

        true && true = true
        true && false = false
        false && false = false


    || -> OU -> Tanto faz

        true || true = true
        true || false = true
        false || false = false

    ! -> Negação

        !true = false
        !false = true


*/

const digitarASenha = true
const digitarOToken = true
const numeroDaConta = false


if(digitarASenha || digitarOToken || numeroDaConta){
 console.log("Logado")

}else{
 console.log("erro")

}
 