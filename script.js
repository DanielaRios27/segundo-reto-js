function mayorArray(arrayNumeros) {
  //retornar null si tiene cero elementos el array
  if (arrayNumeros.length == 0) {
    return null;
  } else if (arrayNumeros.length == 1) {
    //retornar el mismo valor si solo tiene un elemento el array
    return arrayNumeros[0];
  } else {
    //imprimir los elementos del array con ciclo while
    let j = 0;
    while (j < arrayNumeros.length) {
      console.log(arrayNumeros[j]);
      j++;
    }
    //imprimir cantidad de números impares con do-while
    let contador = 0;
    let k = 0;
    do {
      if (arrayNumeros[k] % 2 !== 0) {
        contador++;
      }
      k++;
    } while (k < arrayNumeros.length);
    console.log("La cantidad de números impares es " + contador);
    //variable para guardar el número mayor
    let numeroMayor = 0;
    //bucle para recorrer el array de números
    for (let i = 0; i < arrayNumeros.length; i++) {
      //Se valida si la posición actual es mayor a la variable numeroMayor
      if (arrayNumeros[i] > numeroMayor) {
        numeroMayor = arrayNumeros[i];
      }
    }
    return "El numero mayor es " + numeroMayor;
  }
}
// poniéndolo a prueba
console.log(mayorArray([7, 2, 5, 27, 14]));
