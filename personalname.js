var personName = " ahmed rAZa AbId";
function toTitlesase(str) {
    var words = str.split(" ");
    var finalstring = "";
    console.log("words;", words);
    for (var i = 0; i < words.length; i++) {
        var word = words[1];
        console.log("word:", word);
        var firstCharInUpperCase = word.charAt(0).toUpperCase();
        console.log("firstChar:", firstCharInUpperCase);
        var charsInLowerCase = word.slice(1).toLowerCase();
        console.log("charsInLowerCase:", charsInLowerCase);
        var titleCaseString = firstCharInUpperCase + charsInLowerCase;
        finalstring += titleCaseString + "";
    }
    return finalstring;
}
personName = toTitlesase(personName);
console.log(personName);
