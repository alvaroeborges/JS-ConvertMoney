 /*




 */
  
 
 
 
 
 const contacts = [
        { name: "Álvaro", age: 35, number: "(34) 99227-6929" },
        { name: "Flávio",age: 65, number: "(34) 98819-7356" },
        { name: "Edna",age: 60, number: "(34) 99122-7991" },
        { name: "Laucilene",age: 42, number: "(34) 99769-2289" },
 ]

 contacts.forEach(function (item) {
    console.log(`Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.number}`)
    
    
 });