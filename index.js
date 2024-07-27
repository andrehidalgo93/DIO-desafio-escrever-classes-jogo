class hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let tipoAtaque = "";
    switch (this.tipo) {
      case "guerreiro":
        tipoAtaque = "espada";
        break;
      case "mago":
        tipoAtaque = "magia";
        break;
      case "monge":
        tipoAtaque = "artes marciais";
        break;
      case "ninja":
        tipoAtaque = "shuriken";
        break;
      default:
        tipoAtaque = "ataque não encontrado!";
    }

    console.log(`o ${this.tipo} atacou usando ${tipoAtaque}`);
  }
}

let guerreiro = new hero("Claudio", "25", "guerreiro");
let mago = new hero("Almir", "26", "mago");
let monge = new hero("Vanderson", "27", "monge");
let ninja = new hero("Francisco", "28", "ninja");

guerreiro.atacar();
mago.atacar();
monge.atacar();
ninja.atacar();
