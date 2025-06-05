/*
    MAP:  Mapear o Array
     - Cria uma novo array, a partir do array percorrido (array original)
     - Cria um novo aray, com a mesma quantidade de itens do array original
     - Aceita 3 parametros
        - Item do array
        - index
        - array completo
*/


 
const students = [ 

    {name: 'Álvaro', testGrade: 7},
    {name: 'Lucas', testGrade: 4},
    {name: 'Mara', testGrade: 6},
    {name: 'João', testGrade: 3},
    {name: 'Gustavo', testGrade: 8},
]


const newStudents = students.map (students => {
        return {
            name: students.name,
            Status: students.testGrade >= 5 ? 'Aprovado' : 'Reprovado'               

        }        
}) 

console.log (newStudents)

