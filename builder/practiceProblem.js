// ============ Product ============
class Car {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = false;
    this.transmission = null;
    this.sunroof = false;
    this.seats = "Tecido";
  }

  showDetails() {
    console.log(`
==============================
 ${this.year} ${this.brand} ${this.model}
 Motor: ${this.engine}
 Cor: ${this.color}
 GPS: ${this.gps ? "Sim" : "Não"}
 Câmbio: ${this.transmission}
 Teto solar: ${this.sunroof ? "Sim" : "Não"}
 Bancos: ${this.seats}
==============================
`);
  }
}

// ============ Builder ============
class CarBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.car = new Car();
  }

  setBrand(brand) { this.car.brand = brand; return this; }
  setModel(model) { this.car.model = model; return this; }
  setYear(year) { 
    if (year > new Date().getFullYear() + 1) throw new Error("Ano inválido!");
    this.car.year = year; 
    return this; 
  }
  setEngine(engine) { 
    if (!engine) throw new Error("O carro precisa ter motor!");
    this.car.engine = engine; 
    return this; 
  }
  setColor(color) { this.car.color = color; return this; }
  setGPS(gps) { this.car.gps = gps; return this; }
  setTransmission(transmission) { this.car.transmission = transmission; return this; }
  setSunroof(sunroof) { this.car.sunroof = sunroof; return this; }
  setSeats(seats) { this.car.seats = seats; return this; }

  build() {
    const builtCar = this.car;
    this.reset();
    return builtCar;
  }
}

// ============ Director ============
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
      .setTransmission("Automático")
      .setSunroof(true)
      .setSeats("Couro Premium")
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
      .setTransmission("Manual")
      .setSeats("Tecido")
      .build();
  }

  buildSUV() {
    return this.builder
      .setBrand("Jeep")
      .setModel("Compass")
      .setYear(2024)
      .setEngine("2.0 Turbo Diesel")
      .setColor("Preto")
      .setGPS(true)
      .setTransmission("Automático")
      .setSunroof(true)
      .setSeats("Couro")
      .build();
  }

  buildElectricCar() {
    return this.builder
      .setBrand("Tesla")
      .setModel("Model 3")
      .setYear(2024)
      .setEngine("Elétrico 350cv")
      .setColor("Cinza")
      .setGPS(true)
      .setTransmission("Automático")
      .setSunroof(true)
      .setSeats("Couro Ecológico")
      .build();
  }

  buildLuxuryCar() {
    return this.builder
      .setBrand("Mercedes-Benz")
      .setModel("Classe S")
      .setYear(2024)
      .setEngine("4.0 V8 Biturbo")
      .setColor("Preto Fosco")
      .setGPS(true)
      .setTransmission("Automático")
      .setSunroof(true)
      .setSeats("Couro Premium com massagem")
      .build();
  }

  buildPickup() {
    return this.builder
      .setBrand("Ford")
      .setModel("F-150 Raptor")
      .setYear(2024)
      .setEngine("3.5 V6 Ecoboost")
      .setColor("Azul Metálico")
      .setGPS(true)
      .setTransmission("Automático")
      .setSunroof(false)
      .setSeats("Couro")
      .build();
  }

  buildHatchCompact() {
    return this.builder
      .setBrand("Volkswagen")
      .setModel("Gol")
      .setYear(2023)
      .setEngine("1.6 MSI")
      .setColor("Prata")
      .setGPS(false)
      .setTransmission("Manual")
      .setSunroof(false)
      .setSeats("Tecido")
      .build();
  }

  buildUtilityVan() {
    return this.builder
      .setBrand("Renault")
      .setModel("Kangoo")
      .setYear(2023)
      .setEngine("1.6 SCe")
      .setColor("Branco")
      .setGPS(false)
      .setTransmission("Manual")
      .setSunroof(false)
      .setSeats("Tecido")
      .build();
  }

  // Catálogo pronto
  getCatalog() {
    return [
      this.buildSportsCar(),
      this.buildEconomicCar(),
      this.buildSUV(),
      this.buildElectricCar(),
      this.buildLuxuryCar(),
      this.buildPickup(),
      this.buildHatchCompact(),
      this.buildUtilityVan()
    ];
  }
}

// ============ Cliente ============
const builder = new CarBuilder();
const director = new CarDirector(builder);

console.log("===== CATÁLOGO COMPLETO =====");
const catalog = director.getCatalog();
catalog.forEach(car => car.showDetails());

console.log("===== PERSONALIZADO =====");
const customCar = builder
  .setBrand("Toyota")
  .setModel("Corolla Cross")
  .setYear(2024)
  .setEngine("2.0 Híbrido")
  .setColor("Azul")
  .setGPS(true)
  .setTransmission("Automático")
  .setSunroof(false)
  .setSeats("Couro")
  .build();

customCar.showDetails();
