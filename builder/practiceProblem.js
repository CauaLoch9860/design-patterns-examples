
class Car {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = false;
  }

  showDetails() {
    console.log(
      `${this.year} ${this.brand} ${this.model} - Motor: ${this.engine}, Cor: ${this.color}, GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

class CarBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setGPS(gps) {
    this.car.gps = gps;
    return this;
  }

  build() {
    const builtCar = this.car;
    this.reset(); 
    return builtCar;
  }
}

class CarDirector {
  constructor(builder) {
    this.builder = builder;
  }

  buildSportsCar() {
    return this.builder
      .setBrand("Porsche")
      .setModel("911 Turbo")
      .setYear(2024)
      .setEngine("3.0 Twin-Turbo")
      .setColor("Vermelho")
      .setGPS(true)
      .build();
  }

  buildEconomicCar() {
    return this.builder
      .setBrand("Fiat")
      .setModel("Argo")
      .setYear(2023)
      .setEngine("1.0 Firefly")
      .setColor("Branco")
      .setGPS(false)
      .build();
  }
}

const builder = new CarBuilder();
const director = new CarDirector(builder);

const sportsCar = director.buildSportsCar();
const economicCar = director.buildEconomicCar();
const customCar = builder
  .setBrand("Toyota")
  .setModel("Corolla")
  .setYear(2024)
  .setEngine("2.0")
  .setColor("Preto")
  .setGPS(true)
  .build();

sportsCar.showDetails();
economicCar.showDetails();
customCar.showDetails();
