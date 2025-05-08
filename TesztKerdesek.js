import TesztKerdes from "./TesztKerdes.js";

export default class TesztKerdesek {
  #lista = [];

  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    console.log("kérdés megjelenítés");
    this.szuloElem.innerHTML = ""; 

    if (!this.#lista || this.#lista.length <= 2) {
      console.error("Nincsenek elérhető kérdések!");
      return;
    }

    for (let i = 2; i < this.#lista.length; i++) {
      console.log(`A ${i}. kérdés megjelenítése`);
      new TesztKerdes(this.szuloElem, this.#lista[i], i);
    }
  }
}
