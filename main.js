// 1. Booleanos

const booleano1 = true;
const booleano2 = false;

const booleanoAnd = booleano1 && booleano2;
console.log(booleanoAnd);
const booleanoOr = booleano1 || booleano2;
console.log(booleanoOr);
const booleanoNot = !booleano1;
console.log(booleanoNot);
const booleanoMix0 = (booleano1 || booleano2) && ( booleano1 || (!booleano1 && booleano2));
console.log(booleanoMix0);


// 2. Operadores

const valorDivision = (17/3).toFixed(2);
console.log(valorDivision);
const valorResto = 17 % 7;
console.log(valorResto);

// 3. Lógica de programación

const A = 9;
const B = '9';
if( A == B ) {
    console.log("Con dos iguales es true");
} else if( A === B ) {
    console.log("Aquí no debería entrar");
} else {
    console.log("Con tres iguales es false porque no son del mismo tipo")
}

const mochila = [1,2,3,4,5,6]
if(mochila.length > 10) {
    console.log("No puedo cargar tantos elementos");
} else if(mochila.length <= 10 && mochila.length >= 2) {
    console.log("Que bien voy con mochila");
} else {
    console.log("Creo que no necesito una mochila");
}

let contarHasta10 = 0;
while(contarHasta10 !== 10)
    contarHasta10++;
console.log(contarHasta10);

const diaFestivo = false;
diaFestivo ? console.log("Hoy no trabajo") : console.log("Hoy trabajo");

const arrayBucle = [];
for(let i = 4; i < 19; i++) {
    arrayBucle.push(i);
}
console.log(arrayBucle);

let resultado = 0;
for (const x of arrayBucle) {
    resultado += x;
}
console.log(resultado);

const array =  ['Con', 'Sofia', 'aprendiendo', 'bucles'];
for (const element of array) {
   console.log(element); 
}
for (const key in array) {
    console.log(key); 
}

let j = 0;
while(j < 20) {
    if(j % 3 === 0) {
        console.log("Patata");
    }
    j++;
}


// Extras
let gente = [{
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

const array4Letras = gente.filter(persona => persona.nombre.length === 4);
console.log(array4Letras);

const arrayEmpiezaPorJ = gente.filter(persona => persona.nombre[0] === 'J');
console.log(arrayEmpiezaPorJ);

const ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: ["ratón", "touchPad", "auriculares"],
    almacenamiento: {
        discos: ["SSD", "HDD"],
        maestro: 0
    }
}
console.log("Pruebas con el objeto ordenador");
// TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}



const arr = 
[
    {
        name: "pepito",
        age: 25
    },
    {
        name: "pepito",
        age: 10
    }, 
    {
        name: "Jaime",
        age: 2
    }
];
console.log("Pruebas con la variable arr");
// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 8
if (arr[0].age === 25) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}


