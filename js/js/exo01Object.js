class Bike{
  #brand
  #model
  constructor(brand,model,weight){
      this.brand = brand;
      this.model = model;
      this.weight = weight;

  }
  get brand(){
      return this.#brand;
  }
  set brand(value){
      console.log(`dans set brand`);
      this.#brand = value;
  }
  get model(){
      return this.#model;
  }
  set model(value){
      this.#model = value;
  }
  pedal(){
      console.log(`Je pedal`);
  }
}

class Tandem extends Bike{
  static seatNumber = 2;
  
  pedal(){
      console.log(`Nous sommes ${Tandem.seatNumber} a pédaler`);
    
  }
}
c1 = new Bike();
c2 = new Tandem();
c1.pedal();
c2.pedal();