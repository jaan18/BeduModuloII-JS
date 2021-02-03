// Add an element
// Delete an element
// Tell me if the element exists
// Print the content of all the list

let array = [];

console.log(
  "Menu\n 1. Agregar elemento \n 2. Eliminar elemento \n 3. Decirme si el elemento existe \n 4.Imprimir el arreglo"
);

let answer = Number(prompt("Que opcion deseas?"));

switch (answer) {
  case 1:
    let valor = prompt("Dame un valor para agregar");
    array.push(valor);
    console.log(array);
    break;

  case 2:
    let valor2 = prompt("Dame un valor para eliminar");
    if (array.includes(valor2)) {
      // si el valor existe en el array
      let pos = array.indexOf(valor2); // pos del valor buscado es igual al index del array
      array.splice(pos, 1); // eliminamos la pos un elemento
    }
    console.log(array);
    break;
  case 3:
    let valor3 = prompt("Dame un valor para comprobar si existe");
    console.log(array.includes(valor3));
    break;
  case 4:
    console.log("Imprime el arreglo");
    console.table(array);
    break;

  default:
    console.log("Opcion invalida");
    break;
}

function regresar() {
  prompt("Opc deseada?");
  console.log(array);
}
