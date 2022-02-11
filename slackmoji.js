const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Provide a string to translate: `, (input) => {
  pbcopy(slackTranslate(input));
  rl.close();
});

function pbcopy(data) {
    var proc = require('child_process').spawn('pbcopy'); 
    proc.stdin.write(data); proc.stdin.end();
}

function slackTranslate(string, color='yellow') {
  return string
    .split("")
    .map((char) => {
      if (/^\s*$/.test(char)) return ":panpog:";
      else return `:alphabet-${color}-${char}:`;
    })
    .join("");
}
