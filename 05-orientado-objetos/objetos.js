// Object

function Humano(nombre, genero, edad = 30) {
  // Default al final de la lista
  // atributos o propiedades
  this.genero = genero;
  this.edad = edad;
  this.nombre = nombre;

  // Metodos
  this.describete = () => {
    console.log(
      `Hola soy ${this.nombre} y soy ${
        this.genero === "M" ? "Hombre" : "Mujer"
      }`
    ); // If anidado primera condicion hombre y else mujer
  };
  this.caminar = () => {};
  this.hablar = () => {};
  this.comer = () => {};
}

let Pedro = new Humano("Pedro", "M");
Pedro.describete();

let humano = {
  genero: "",
  nombre: "",
  edad: "",
};

// Herencia

automovil;
marca;
modelo;
año;
asientos;
color;
llantas;
km;
nivel;

manejar();
viajar();
encender();
prenderLuces();

class Automovil {
  constructor(marca, modelo, anio, asientos, color, llantas, km, nivel) {
    this.marca = marca;
    // Automovil.marca
    this.modelo = modelo;
    this.anio = anio;
    this.asientos = asientos;
    this.color = color;
    this.llantas = llantas;
    this.km = km;
    this.nivel = nivel;
    console.log("Atributos inicializados");
  }

  manejar() {
    this.encender();
  }
  viajar() {
    this.encender();
  }
  encender() {}
  prenderLuces() {
    this.encender();
  }
}

class Camioneta extends Automovil {
  constructor(
    marca,
    modelo,
    anio,
    asientos,
    color,
    llantas,
    km,
    nivel,
    es4x4,
    tamanio,
    esCerrada,
    cilindros
  ) {
    super(marca, modelo, anio, asientos, color, llantas, km, nivel);
    //new automovil es parecido
    this.es4x4 = es4x4;
    this.tamanio = tamanio;
    this.esCerrada = esCerrada;
    this.cilindros = cilindros;
  }
}

let tacoma = new Camioneta();

// poliformismo hacer algo de diferentes maneras pero con el mismo nombre
// encapnsulamiento ver donde se puede ejecutar las cosas