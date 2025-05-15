/*
    Swtich Case - Controlador de Fluxo
    Só vai verificar valores exatos, não vai variar entre um parametro e outro.
    
*/
const temperature = 10

switch (temperature) {
    case 10:
        console.log("Ta Frio")
        break;

    case 20:
    console.log("Ta meio quente")
        break;

    case 30:
    console.log("Ta quente")
        break;

    default:
        console.log("Não sei")
        break;
}