class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("Its on the last position of the list");
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
// console.log(myLinkedList.printList());

class ll {
  constructor(valor) {
    this.cabeza = {
      valor: valor,
      siguiente: null,
      anterior: null,
    };
    this.cola = this.cabeza;
    this.tamano = 1;
  }
  anadirAlFinal(valor) {
    const nuevoNodo = {
      valor: valor,
      siguiente: null,
      anterior: null,
    };
    nuevoNodo.anterior = this.cola;
    this.cola.siguiente = nuevoNodo;
    this.cola = nuevoNodo;
    this.tamano++;
    console.log(this, "\n\n");
  }
  anadirAlPrincipio(valor) {
    const nuevoNodo = {
      valor: valor,
      siguiente: null,
      anterior: null,
    };
    nuevoNodo.siguiente = this.cabeza;
    this.cabeza.anterior = nuevoNodo;
    this.cabeza = nuevoNodo;
    this.tamano++;
    console.log(this, "\n\n");
  }
  insertarPosicion(posicion, valor) {
    //Chec if the posicion is out of bounds
    //and if it is is gonna be the in the last position
    if (posicion >= this.tamano) {
      console.log(
        `La posicion ${posicion} esta fuera de rango\nSe asigna a la ultima`
      );
      this.anadirAlFinal(valor);
      return;
    }
    const nuevoNodo = {
      valor: valor,
      siguiente: null,
      anterior: null,
    };
    let x = this.moverseEnLista(posicion - 1);
    let nodoTemporal = x.siguiente;
    x.siguiente = nuevoNodo;
    nuevoNodo.anterior = x;
    nuevoNodo.siguiente = nodoTemporal;
    nodoTemporal.anterior = nuevoNodo;
    this.tamano++;
  }
  eliminarNodo(posicion) {
    if (posicion > this.tamano || posicion < 0) {
      console.log("Esto esta fuera de los limites");
      return;
    }
    let x = this.moverseEnLista(posicion - 1);
    let nodoTemporal = x.siguiente;
    x.siguiente = nodoTemporal.siguiente;
    x.siguiente.anterior = x;
    this.tamano--;
  }
  moverseEnLista(posicion) {
    let contador = 0;
    let nodoActual = this.cabeza;
    while (contador !== posicion) {
      nodoActual = nodoActual.siguiente;
      contador++;
    }
    return nodoActual;
  }
  print() {
    let array = [];
    let nodoActual = this.cabeza;
    while (nodoActual !== null) {
      array.push(nodoActual.valor);
      nodoActual = nodoActual.siguiente;
    }
    console.log(array);
  }
  Struct() {
    console.log("\n\nThis is the struct", this, "\n\n\n");
  }
}

let laLista = new ll(0);
laLista.anadirAlFinal(2);
laLista.anadirAlFinal(3);
laLista.anadirAlFinal(4);
laLista.anadirAlPrincipio(1);
laLista.insertarPosicion(10, 10);
laLista.print();
laLista.eliminarNodo(2);
laLista.Struct();
