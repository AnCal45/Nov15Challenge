// 1. getVowelSubstrings() and getConstantSubstrings()

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function getVowelSubstrings(str){
    
    str = str.split("");
    let word = [];

    //add the vowels to the list
    for(let i = 0; i < str.length; i++){
        let newWord = "";

        if(vowels.includes(str[i])){
            if(!word.includes(str[i])){
                word.push(str[i]);
            }
            newWord += str[i];

            for(let j = i + 1; j < str.length; j++){
                if(!vowels.includes(str[j])){
                    newWord += str[j];
                }else{
                    newWord += str[j];
                    break;
                }
            }
            if(newWord.length > 1 && !word.includes(newWord)){
                if(vowels.includes(newWord[0]) && vowels.includes(newWord[newWord.length-1]))
                    word.push(newWord);
            }

        }
    }

    word.sort();

    return word;
  }
  
  console.log(getVowelSubstrings("apple"));
  console.log(getVowelSubstrings("hmmm"));




  function getConsonantSubstrings(str){
    str = str.split("");
    let word = [];

    //add the vowels to the list
    for(let i = 0; i < str.length; i++){
        let newWord = "";

        if(!vowels.includes(str[i])){
            if(!word.includes(str[i])){
                word.push(str[i]);
            }
            newWord += str[i];

            for(let j = i + 1; j < str.length; j++){
                if(vowels.includes(str[j])){
                    newWord += str[j];
                }else{
                    newWord += str[j];
                    break;
                }
            }
            if(newWord.length > 1 && !word.includes(newWord)){
                if(!vowels.includes(newWord[0]) && !vowels.includes(newWord[newWord.length-1]))
                    word.push(newWord);
            }

        }
    }
    word.sort();

    return word;
  }

  console.log(getConsonantSubstrings("aviation"));
  console.log(getConsonantSubstrings("motor"));
