function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  
  Airplane.prototype.takeOff = function () {
    if (!this.isFlying) {
      this.isFlying = true;
      console.log(`${this.name} has taken off.`);
    } else {
      console.log(`${this.name} is already flying.`);
    }
  };
  
  Airplane.prototype.land = function () {
    if (this.isFlying) {
      this.isFlying = false;
      console.log(`${this.name} has landed.`);
    } else {
      console.log(`${this.name} is already on the ground.`);
    }
  };
  
  
  const airplane1 = new Airplane("Flight1");
  console.log(airplane1.isFlying); 
  
  airplane1.takeOff(); 
  console.log(airplane1.isFlying); 
  
  airplane1.land();
  console.log(airplane1.isFlying); 
  
  airplane1.takeOff(); 
  