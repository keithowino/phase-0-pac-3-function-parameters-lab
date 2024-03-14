
// Defining a function that uses a parameter

function introduction(name){
  return `Hi, my name is ${name}.`;
};

let resultOne = introduction("John");

console.log(resultOne);

// Defining a function that uses a two parameters

function introductionWithLanguage(name, language){
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};

let resultTwo = introductionWithLanguage ("John", "Python");

console.log(resultTwo);

// Defining a function that uses an optional parameter

function introductionWithLanguageOptional(name, language="JavaScript"){
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};

let resultThree = introductionWithLanguageOptional("John");

console.log(resultThree);