console.log("<------------------------------>");
console.log(new Date().toDateString());

let counter =100;
let response = 100 == "100"; //Comparacion
console.log(`${counter}`== `100 => ${response}`);

//Estrictamente que  ===
let responseB = 100 === "100";
console.log(`${counter} === 100 => ${responseB}`);

//Diferente !=
let brand = "mazda";
let responseC = brand != "chevrolet";
console.log(`${brand} != 'chevrolet' = ${responseC}`);
console.log(brand != "Mazda"); //True

//Estrictamente diferente !==
let numberA = 10;
let responseA = numberA != "10";
// Saldra TRUE porque es el mismo valor
console.log(`${numberA} != 10=> ${responseA}`);
// Saldra falso porque los datos son diferentes, uno es int y el otro string
let responseD = numberA !== "10";
console.log(`${numberA} !== 10 => ${responseD}` );
