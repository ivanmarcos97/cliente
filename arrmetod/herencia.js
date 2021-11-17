class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} corre a una velocidad de ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} se queda quieto.`);
    }
  }
  
  let animal = new Animal("Mi animal");
  ////////////////////////////////
  class Rabbit extends Animal {
    hide() {
      alert(`¡${this.name} se esconde!`);
    }
  }
  
  let rabbit = new Rabbit("Conejo Blanco");
  
  rabbit.run(5); // Conejo Blanco corre a una velocidad de 5.
  rabbit.hide(); // ¡Conejo Blanco se esconde!

  ///////////////////////////////////////////////
  class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name} corre a una velocidad de ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} se queda quieto.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      alert(`¡${this.name} se esconde!`);
    }
  
    stop() {
      super.stop(); // llama el stop padre
      this.hide(); // y luego hide
    }
  }
  
  let rabbit = new Rabbit("Conejo Blanco");
  
  rabbit.run(5); // Conejo Blanco corre a una velocidad de 5.
  rabbit.stop(); // Conejo Blanco se queda quieto. ¡Conejo Blanco se esconde!