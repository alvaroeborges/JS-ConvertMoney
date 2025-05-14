/*
    IF (se)
    Else (Se não)

    else if
*/


const temperature = 30


    if( temperature === 36) {
        console.log ("Está saudável") 

    } else if ( temperature > 36 && temperature <= 40 ){
        console.log("Vocês está com febre")

    } else if ( temperature > 40){
        console.log( " Ir ao médico com urgência")

    } else {
        console.log( "Você está com hipotermia ")
    }
    