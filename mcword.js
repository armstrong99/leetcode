const mostCommonWord = ( paragraph, banned) => {
    let validWordsFreq = {};
    let bannedWords = new Set();
    let mostCommon = '';

    let words = paragraph.split(/\W+/)

    for (const word of banned) {
        //add banned words to a set so that our lookup will be in constant time
        bannedWords.add(word)
    }

    for(let word of words) {

       let lowerCaseWord = word.toLowerCase()
       
       if(!bannedWords.has(lowerCaseWord)) {
            if(validWordsFreq[lowerCaseWord] === undefined) {
                validWordsFreq[lowerCaseWord] = 0
            }

            validWordsFreq[lowerCaseWord]++
            if(mostCommon === '' || validWordsFreq[lowerCaseWord] > validWordsFreq[mostCommon]){
                mostCommon = lowerCaseWord
            }
       }
    }

    return mostCommon;
}