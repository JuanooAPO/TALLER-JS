// PUNTO 1 - VARIABLES
// Ejercicio 1.1
var nombre = "Juano";
console.log(nombre);

nombre = "Juan Andrés Alzate";
console.log(nombre);

// Ejercicio 1.2
const nombreConst = "Juano";
console.log(nombreConst);
// Esto genera error porque const no se puede reasignar
// nombreConst = "Juan Andrés";
// console.log(nombreConst);

// Ejercicio 1.3
if (false) {
    let edad = 20;
}// Esto genera error porque edad solo existe dentro del bloque
// console.log(edad);

// =====================
// PUNTO 2 - TIPOS DE DATOS
// =====================

// Ejercicio 2.1

let ciudad = "Pereira";
console.log(typeof ciudad);

let numero = 11;
console.log(typeof numero);

let estudiante = true;
console.log(typeof estudiante);

let dato = null;
console.log(typeof dato);

let resultado;
console.log(typeof resultado);

// Ejercicio 2.2

let persona = {
    nombre: "Juano",
    edad: 20
};

console.log(typeof persona);

let hobbies = ["Fútbol", "Música", "Crear contenido"];

console.log(hobbies);
console.log(typeof hobbies);

// =====================
// PUNTO 3 - CONVERSIÓN DE TIPOS
// =====================

// Ejercicio 3.1

let numero1 = 10;
let numero2 = "5";

console.log(numero1 + numero2); // 105
console.log(numero1 * numero2); // 50

// Ejercicio 3.2

let numero25 = 25;
let texto25 = String(numero25);

console.log(texto25);
console.log(typeof texto25);


let texto100 = "100";
let numero100 = Number(texto100);

console.log(numero100);
console.log(typeof numero100);


let vacio = Boolean("");
console.log(vacio); // false

let saludo = Boolean("hola");
console.log(saludo); // true

// PUNTO 4
// OPERADORES, CONDICIONALES, CICLOS Y EXCEPCIONES
// =====================


// Ejercicio 4.1

console.log(10 === "10"); // false
console.log(10 == "10");  // true

// Ejercicio 4.2

let numeroPar = 10;

if (numeroPar % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
// Ejercicio 4.3

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Ejercicio 4.4

try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Ocurrió un error:", error.message);
}

// PUNTO 5
// FUNCIONES Y ARROW FUNCTIONS
// =====================


// Ejercicio 5.1

function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(5, 4));

// Ejercicio 5.2

const multiplicarFlecha = (a, b) => a * b;

console.log(multiplicarFlecha(5, 4));

// Ejercicio 5.3

const saludar = () => "¡Que onda pibes!";

console.log(saludar());

// PUNTO 6
// SCOPE Y CONTEXTOS
// =====================


// Ejercicio 6.1

let equipoGlobal = "River";

function mostrarEquipo() {
    let jugadorLocal = "Quintero";

    console.log(equipoGlobal);
    console.log(jugadorLocal);
}

mostrarEquipo();

console.log(equipoGlobal);

// No funciona porque jugadorLocal es una variable local
// console.log(jugadorLocal);

// Ejercicio 6.2

let coche = {
    marca: "Mercedes AMG",

    mostrarMarca: function() {
        console.log(this.marca);
    }
};

coche.mostrarMarca();

// PUNTO 7
// ARRAYS
// =====================


// Ejercicio 7.1

let frutas = ["Manzana", "Banana"];

console.log(frutas);

frutas.push("Naranja");
console.log(frutas);

frutas.pop();
console.log(frutas);

// Ejercicio 7.2

let numeros = [1, 2, 3];

let numerosDobles = numeros.map(numero => numero * 2);
console.log(numerosDobles);

let numerosMayores = numeros.filter(numero => numero > 1);
console.log(numerosMayores);


// Ejercicio 7.3

frutas.forEach(fruta => {
    console.log(fruta);
});

let frutaEncontrada = frutas.find(fruta => fruta === "Banana");
console.log(frutaEncontrada);

let indiceManzana = frutas.findIndex(fruta => fruta === "Manzana");
console.log(indiceManzana);

// PUNTO 8
// OBJETOS Y CLASES
// =====================


// Ejercicio 8.1

let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",

    mostrarInfo: function() {
        console.log(this.titulo);
        console.log(this.autor);
    }
};

libro.mostrarInfo();

// Ejercicio 8.2

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return "Hola, soy " + this.nombre;
    }
}

let animal1 = new Animal("Rupert");

console.log(animal1.saludar());


// Ejercicio 8.3

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
}

let perro1 = new Perro("Rupert", "Labrador");

console.log(perro1.saludar());