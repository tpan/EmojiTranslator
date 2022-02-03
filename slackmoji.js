const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Provide a string to translate: `, (input) => {
  console.log(slackTranslate(input));
  rl.close();
});

function slackTranslate(string) {
  return string
    .split("")
    .map((char) => {
      if (/^\s*$/.test(char)) return ":white_square:";
      else return `:alphabet-white-${char}:`;
    })
    .join("");
}
