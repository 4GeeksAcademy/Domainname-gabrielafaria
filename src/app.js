import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let suffixes = ['.com', '.net'];
//function definition
function generateDomain(pronouns, adjs, nouns, suffixes) {
 // empty array to store results
  const generatedDomains = [];
//Nested loops to combine words
  for (let i = 0; i < pronouns.length; i++) {
    const pronoun = pronouns[i];
    for (let j = 0; j < adjs.length; j++) {
      const adj = adjs[j];
      for (let k = 0; k < nouns.length; k++) {
        const noun = nouns[k];
        for (let l = 0; l < suffixes.length; l++) {
          const suffix = suffixes[l];
          //build the domain name
          const domain = pronoun + adj + noun + suffix;
          generatedDomains.push(domain);
        }
      }
    }
  }
//return the result
  return generatedDomains;
}
//calling the function
console.log(generateDomain(pronouns, adjs, nouns, suffixes));
}