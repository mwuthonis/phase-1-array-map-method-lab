const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between StopPropagation and PreventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // List of special cases
  const specialCases = {
    'nan': 'NaN',
    'jsonp?': 'JSONP?',
    'oo': 'OO',
    'api': 'API',
    'stoppropagation': 'StopPropagation',
    'preventdefault?': 'PreventDefault?',
    'constructor': 'Constructor'
  };
  
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')//splits the string into words
      .map(word => {
        
        // check if the word in lowercase matches any special case
        const lowercaseWord = word.toLowerCase();
        // Check for acronyms first
        if (specialCases[lowercaseWord]) {
          return specialCases[lowercaseWord];
        }
        // Handles regular title casing
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
      
  });
};

module.exports = { titleCased };

console.log(titleCased());