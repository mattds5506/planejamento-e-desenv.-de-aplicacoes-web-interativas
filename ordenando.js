const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};


const shuffle = (array, swaps) => {
  let len = array.length;
  
  if (len < 2) return array;

  for (let i = 0; i < swaps; i++) {
    const first = Math.floor(Math.random() * len);
    const second = Math.floor(Math.random() * len);

    [array[first], array[second]] = [array[second], array[first]];
  };
  
  return array;

};


const bubbleSort = (vetor) => {
  let ordenado = false;
  while (!ordenado) {
    ordenado = true;
    for (let i=1; i < vetor.length; i++)
      if (vetor[i-1] > vetor[i]) {
        const aux = vetor[i]; vetor[i] = vetor[i-1];
        vetor[i-1] = aux; ordenado = false;
        
      }   
  }
}


const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i],arr[lowest]] = [arr[lowest], arr[i]];
    }
  }

  return arr;
}


const quickSort = (array, esquerda = 0, direita = array.length - 1) => {
    if (array.length > 1) {
        let indiceParticao = particionar(array, esquerda, direita);

        if (esquerda < indiceParticao - 1) {
            quickSort(array, esquerda, indiceParticao - 1);
        }
        if (indiceParticao < direita) {
            quickSort(array, indiceParticao, direita);
        }
    }
    return array;
}


const particionar = (array, esquerda, direita) => {
    // Escolhendo o elemento do meio como pivô
    let pivo = array[Math.floor((direita + esquerda) / 2)];
    let i = esquerda;
    let j = direita;

    while (i <= j) {
        while (array[i] < pivo) {
            i++;
        }
        while (array[j] > pivo) {
            j--;
        }
        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }
    return i;
}
