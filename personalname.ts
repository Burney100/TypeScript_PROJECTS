
let personName: string= " ahmed rAZa AbId";
function toTitlesase(str:string){
    const words = str.split(" ");
let finalstring: string = "";
console.log("words;" , words);
for (let i = 0; i < words.length; i++){
    let word = words[1];
    console.log("word:" , word);

    const firstCharInUpperCase: string = word.charAt(0).toUpperCase();
    console.log("firstChar:", firstCharInUpperCase);

    const charsInLowerCase: string = word.slice(1).toLowerCase();
    console.log("charsInLowerCase:", charsInLowerCase);
    const titleCaseString = firstCharInUpperCase + charsInLowerCase;
     
    finalstring += titleCaseString +"";

}
return finalstring;

}
personName = toTitlesase(personName);
console.log(personName);
