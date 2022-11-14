//Задание 4.
//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

//План:
//Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
//Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//Создайте экземпляры каждого прибора.
//Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

//Общие требования:
//Имена функций, свойств и методов должны быть информативными
//Соблюдайте best practices:
//использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//информативные имена (а не a, b);
//четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
//использование синтаксиса es6 (кроме функции-конструкторов) и так далее.


function Device(device) {  
  this.name = device,             
  this.model = 'new',            
  this.year = 2021,
  this.electrical = 'network',
  this.signal = 'plm',
  this.switch = 'on/off or a hammer',
  this.color = 'gray',
  this.price = 50000         
}                      
   
Device.prototype.showWatts = function(electricity) { 
  console.log(`The device consumes ${electricity} watts of electricity`);  
}

function ElectricDevice(device) {
  this.name = device,         
  this.wired = 'cocket', 
  this.light = 'bright',
  this.color = 'white',
  this.price = 1000
}

ElectricDevice.prototype = new Device()
const lamp = new ElectricDevice('lamp', 'light');
const comp = new ElectricDevice('comp', 'wired');

lamp.showWatts(20)
comp.showWatts(100)


console.log(lamp);
console.log(comp);
