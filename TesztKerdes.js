export default class TesztKerdes {
    #obj;
    #index;
    #szuloElem;
    #Zaroltvalasz = false;
  
    constructor(szuloElem, obj, index) {
      this.#szuloElem = szuloElem;
      this.#obj = obj;
      this.#index = index;
      
   
      if (!this.#obj.valasztas || !Array.isArray(this.#obj.valasztas)) {
        console.error(`Hiányzó vagy hibás 'valasztas' az index ${this.#index} kérdésnél.`);
        return;
      }
  
      const kerdesElem = this.megjelenites();
      this.valaszEllenorzes(kerdesElem);
    }
  
    megjelenites() {
      let html = `
                <div class="kerdes">
                  <p class="kerdesSzoveg">${this.#obj.mondat}</p>
                  <div class="valaszok">
                    <p class="valasz">${this.#obj.valasztas[0]}</p>
                    <p class="valasz">${this.#obj.valasztas[1]}</p>
                    <p class="valasz">${this.#obj.valasztas[2]}</p>
                    <p class="valasz">${this.#obj.valasztas[3]}</p>
                  </div>           
                </div>  
              `;
      this.#szuloElem.insertAdjacentHTML("beforeend", html);
  
      const utolsoKerdesElem = this.#szuloElem.querySelector(".kerdes:last-child");
      return utolsoKerdesElem;
    }
  
    valaszEllenorzes(kerdesElem) {
      const valaszok = kerdesElem.querySelectorAll("p.valasz");
      const helyesValasz = this.#obj.valasztas[0];
  
      valaszok.forEach((elem) => {
        elem.addEventListener("click", () => {
          if (this.#Zaroltvalasz) return;
  
          if (elem.textContent === helyesValasz) {
            elem.style.backgroundColor = "lightgreen";
          } else {
            elem.style.backgroundColor = "lightcoral";
          }
  
          this.#Zaroltvalasz = true;
        });
      });
    }
  }
  