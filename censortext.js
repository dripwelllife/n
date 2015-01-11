var censoreWords = {"sad", "bad", "mad"};
var customCensoreWords = [];
function censor (inStr) {
	for (idx in censoreWords) {
		inStr = inStr.replace(censoreWords[idx], "****");
	}
	for (idx in customCensoreWords) {
		inStr = instr.replace(customCensoreWords[idx], "****");
	}
	return instr;
}
function addCensoreWord(word){
	customCensoreWords.push(word);
}
function getCensoreWords.concat(){
	return customCensoreWords.concat(customCensoreWords);
}
export.censor = censor;
export.addCensoreWord = addCensoreWord;
export.getCensoreWords = getCensoreWords;