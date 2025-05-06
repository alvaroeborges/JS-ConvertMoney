/*

CONST XXXX - ESSE XXXX É COMO SE FOSSE O APELIDO DA CONSTANTE



    Toda vez que vc quiser buscar uma informação do HTML começa o codigo por (document)

        getElementById -> Trás UM elemento pelo ID.  
        const xxxx = document.getElementById( " e coloca o nome do Id 'o id vc colocar no HTML' ")

        getElementByClassName -> Trás TODOS os elementos com aquela Class.
        const xxxx = document.getElementByClassName ("Nome da Classe que colocou na HTML") 

        getElementtagName -> Trás TODOS os elementos com aquela TAG.
        const xxxx = document.getElementTagName (" as TAG's que colocamos no HTML Ex: p, h1, h2 ...")

        get.ElementName -> Trás TODOS os elementos com aquele NAME.
        const xxxx = document.getElementname (" Nome do elemento no HTML.")
    _________________________________________________________________________________________________________________________


        querySelector -> Trás UM elemento, o PRIMEIRO que encontrar.
        const xxxx = document.querySelector("")

            obs:
            para procurar uma classe (.xxxx)-> pode ter mais de um elemento com a msma classe.
            para procurar um ID (#xxxx) ->ID apenas um item pode ter o ID.
            para procurar o segundo item com a msm classe (button.xxxx)


        querySelectorAll -> Trás TODOS os elementos que encontrar.
        const xxxx = document.querySelectorAll("")
    _________________________________________________________________________________________________________________________



        Alterando e Acessando textos

        textContent-> Pega todo o conteúdo. -> apenas o HTML.
        innerText -> pega APENAS o Texto. -> Leva em conta o CSS.
        innerHTML -> Permite adicionar HTML e texto -> trás tudo.

*/