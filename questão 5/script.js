let str = "Exemplo de string"; // string definida previamente
let reversedStr = ""; // string vazia para armazenar a string invertida

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr); // imprime "gnirts ed olpmxE"
