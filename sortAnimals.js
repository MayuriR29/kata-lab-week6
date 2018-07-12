const sortAnimals = animals => {
 
console.log(sortLegs);
  var sortNames = animals.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB ) {
      return -1;
    }
    if (nameA > nameB ) {
      return 1;
    }

    return 0;
  });
  console.log('names sort',sortNames);
  var sortLegs = sortNames.sort(function(a, b) {
    return a.numberOfLegs - b.numberOfLegs;
  });
  console.log("-->", sortLegs);
  return sortLegs;
};
module.exports = sortAnimals;
