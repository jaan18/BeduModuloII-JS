// nombre
// edad
// genero
// telefono
let humano = {
  genero: "",
  nombre: "",
  edad: "",
  telefono: "",
};

let listaHumanos = [];

let Pedro = new Humano("Pedro", "H", 3333, 20);
let Diana = new Humano("Diana", "M", 2222);
// Menu
var menu =
  "Seleccione una opción: \n" +
  "1. Añadir un nuevo contacto \n" +
  "2. Mostrar contacto \n" +
  "3. Salir \n";
var respuesta = 0;
do {
  respuesta = Number(prompt(menu));
  alert(`Tu opción es: ${respuesta}`);
  switch (respuesta) {
    case 1:
      listaHumanos.push(Diana);
      listaHumanos.push(Pedro);
      break;
    case 2:
      var answer = Number(prompt("cual quieres ver?"));
      console.log(listaHumanos[answer]);
      break;

    default:
      alert("Saliendo del menú");
      break;
  }
} while (respuesta != 3);

function Humano(nombre, genero, telefono, edad = 30) {
  // Default al final de la lista
  // atributos o propiedades
  this.nombre = nombre;
  this.genero = genero;
  this.telefono = telefono;
  this.edad = edad;
}

function agregarHumano(humanito) {
  prompt("Introduce el nombre");
  prompt("Introduce el genero");
  prompt("Introduce el telefono");
  prompt("Introduce la edad");
  let contacto = new Humano();
  listaContactos.push(contacto);
}
