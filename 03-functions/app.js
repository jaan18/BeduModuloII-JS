/* saludar("Jovani"); Function declaration 

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
 */

/* let saludar = (nombre) => `Hola ${nombre}`;
console.log(saludar("Jovani"));

let sumar = (a, b) => `Tu suma es: ${a + b}`;
console.log(sumar(4, 5));

let restar = (a, b) => `Tu resta es: ${a - b}`;
console.log(restar(4, 5)); */

/* let perimetro = (a, b) => `Tu perimetro del rectángulo es ${2 * a + 2 * b}`;
console.log(perimetro(2, 2));
 */
let election = prompt(
  "Dame una figura, circulo, triangulo, rectangulo, cuadrado"
);

switch (election) {
  case "circulo":
    break;

  case "triangulo":
    let lado1 = Number(prompt("Dame el lado 1 a calcular"));
    let lado2 = Number(prompt("Dame el lado 2 a calcular"));
    let lado3 = Number(prompt("Dame el lado 3 a calcular"));
    perimetroTriangulo(lado1, lado2, lado3);
    break;

  case "rectangulo":
    let lado1 = Number(prompt("Dame el lado 1 a calcular"));
    let lado2 = Number(prompt("Dame el lado 2 a calcular"));
    perimetrorectangulo(lado1, lado2);
    break;

  case "cuadrado":
    break;

  default:
    alert("figura incorrecta");
    break;
}

function perimetrorectangulo(a, b) {
  alert(`Tu perimetro del rectángulo es ${2 * a + 2 * b}`);
}

function perimetrorTriangulo(a, b, c) {
  alert(`Tu perimetro del triangulo es ${a + b + c}`);
}
