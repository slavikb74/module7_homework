//Задание 5.
//Переписать консольное приложение из предыдущего юнита на классы.

//Общие требования:
//Имена классов, свойств и методов должны быть информативными;
//Соблюдать best practices;
//Использовать синтаксис ES6.

class Parent { 
  constructor(ownDevice, ownDevices) { 
    this.ownDevice = ownDevice || 'on average 50 wt'
    this.ownDevices = ownDevices || 'on average 50 wt'
    this.fasFlat = true;
  } 
       
  getInfo() {
    return 'Table lamp consumes ' + this.ownDevice;
  }

  getInf() {
    return 'Personal comp consumes ' + this.ownDevices; 
  } 
}

class Child extends Parent { 
  constructor(isElectrical, light, ownDevice) {
    super(ownDevice); 
    this.isElectrical = isElectrical;
    this.light = isElectrical ? light : ownDevice;
  }
  
  getInfo() {
    if (this.isElectrical) {
      return 'The table lamp consumes ' + this.light
    } else {
      return super.getInfo()
    }
  }  
} 

class Child1 extends Parent { 
  constructor(isElectric, network, ownDevices) {
    super(ownDevices); 
    this.isElectric = isElectric;
    this.network = isElectric ? network : ownDevices;  
  } 

  getInf() {
    if (this.isElectric) {
      return 'The personal comp consumes ' + this.network
    } else {
      return super.getInf() 
    }
  }
}

const electrical = new Child(true, 'at least 40 wt'); 
console.log(electrical.getInfo());

const gas = new Child(false, 'max of 90 wt');
console.log(gas.getInfo(), gas.getInf());

const electric = new Child1(true, 'a max of 60 wt'); 
console.log(electric.getInf());

console.log(electrical instanceof Child);  
console.log(electrical instanceof Parent);

console.log(electric instanceof Child1);
console.log(electric instanceof Parent);

class Car {   
}
console.log(electrical instanceof Car);
console.log(electric instanceof Car);     
