class AccountB {
  constructor(login, email) {
    this.login = login;
    this.email = email;
  }

  getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}

const account = new AccountB("indozer", "indozer@proton.me");
account.getInfo();

class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const user = new User("Indozer", 24, 1000);
user.getInfo();

class Storage {
  constructor(items = ["iPhone X", "iPad Pro", "MacBook Pro"]) {
    this.items = items;
  }

  getItem() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}

const storage = new Storage();
console.log(storage.getItem());
storage.addItem("Apple Watch");
console.log(storage.getItem());
storage.removeItem("iPad Pro");
console.log(storage.getItem());

class StringBuilder {
  constructor(value = "") {
    this.value = value;
  }

  append(value) {
    this.value += value;
  }

  prepend(value) {
    this.value = value + this.value;
  }

  pad(value) {
    this.value = value + this.value + value;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);

class Car {
  constructor(maxSpeed, speed, isOn, distance, price) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = price;
  }
  getspecs() {
    return `Max Speed: ${this.maxSpeed} km/h, Speed: ${this.speed} km/h, is On: ${this.isOn}, Distance: ${this.distance} km, Price: $${this.price}`;
  }
  getprice() {
    return this.price;
  }
  setprice(newprice) {
    this.price = newprice;
  }
  turnon() {
    this.isOn = true;
    console.log("Car on");
  }
  turnoff() {
    this.isOn = false;
    this.speed = 0;
    console.log("Car off");
  }
  accelerate(value) {
    if (this.isOn || this.speed < this.maxSpeed) {
      this.speed += value;
      console.log(`Speed is ${this.speed} km/h`);
    } else {
      console.log("Car is off or max speed reached");
    }
  }

  decelerate(value) {
    if (this.isOn && this.speed > 0) {
      this.speed -= value;
      console.log(`Speed is ${this.speed} km/h`);
    }
  }

  drive(hours) {
    if (this.isOn) {
       this.distance = hours * this.speed
    }
  }
}

const mustang = new Car(250, 0, false, 0, 150);
console.log(mustang.getspecs());
mustang.turnon();
mustang.getprice();
console.log(mustang.getspecs());
mustang.setprice(200);
console.log(mustang.getspecs());
mustang.turnoff();
console.log(mustang.getspecs());
mustang.turnon();
console.log(mustang.getspecs());
mustang.accelerate(150);
mustang.decelerate(15);
console.log(mustang.getspecs());
mustang.drive(2);
console.log(mustang.getspecs());
mustang.turnoff();
console.log(mustang.getspecs());