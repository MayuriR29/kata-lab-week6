const initCap = stringInput => {
  let newStr = stringInput
    .split(" ")
    .map(
      eachString =>
        eachString[0].toUpperCase() + eachString.substr(1).toLowerCase()
    );
  return newStr;
};
//need to handle for empty originalString
const titleCase = (originalString, minorWords) => {
  let result = "";
  if (minorWords === undefined) {
    result = initCap(originalString);
  } else {
    let splitMinor = minorWords.split(" ");
    result = initCap(originalString);
    for (let i = 1; i < result.length; i++) {
      for (let j = 0; j < splitMinor.length; j++) {
        if (result[i].toLowerCase() === splitMinor[j].toLowerCase()) {
          result[i] = splitMinor[j].toLowerCase();
        }
      }
    }
  }
  return result.join(" ");
};

module.exports = titleCase;
