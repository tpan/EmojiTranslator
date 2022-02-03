function slackTranslate(string){
  return string.split("").map((char)=>{
    return `:alphabet-white-${char}:`
  }).join("")
}

console.log(slackTranslate("yeet"))