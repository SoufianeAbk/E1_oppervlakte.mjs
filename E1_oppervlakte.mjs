import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});
;


let zijde1 = parseFloat(await userInput.question('Geef een getal in: '));
let zijde2 = parseFloat(await userInput.question('Geef een getal in: '));

let oppervlakte = (zijde1 * zijde2);
console.log("De oppervlakte van zijde1 en zijde2 is " + oppervlakte);

process.exit()
