import TesztKerdesek from "./TesztKerdesek.js";
import { szenvedoMondatok } from "./angol.js";

const szuloELem = document.querySelector(".feladatok");
console.log(szuloELem);
new TesztKerdesek(szenvedoMondatok, szuloELem);