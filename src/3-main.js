//Special Focus on String. String can be declared in three ways.
let firstName = "Shayan";
let lastName = 'Mondal';  //using '' single quotes.
let company = `Capgemini`;  //using backticks `` it is used for concatination
let languages = `Java
                   Python`; // `` batticks allow multi line String input.

console.log(firstName);
console.log(lastName);
console.log("works in" + " "+company);

//Printing with one console
console.log(firstName, lastName, company);

//Concatination ... ${}--> Path Variable.
let output = `ECE student of UEM named ${firstName} ${lastName} works in ${company}`;
console.log(output);