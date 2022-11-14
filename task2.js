//Задание 2.
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

//Функция принимает в качестве аргументов строку и объект
function checkPropInObj(str, obj) { 
  console.log(str, obj);   
  return (str in obj);  
}

const  str = 'hello';
const obj = {str: 'world'};
console.log('str' in obj); //проверяет свойство с данным именем, in возвращает true если свойство есть

checkPropInObj(str, obj); // будет true, т.к. у объекта есть свойство с именем str  
//Функция возвращает значение

/////////////////////////////////////////////////////////////////////////////////////////////////////

function checkPropInObj(str, obj) { 
  console.log(str, obj); 
  return (str in obj);  
}

let str ='hello';
let obj = {a: 'world'}
console.log('str' in obj);

checkPropInObj(str, obj); // будет false, т.к. у свойства объекта имя а, а не str
