// Code your solution here
function findMatching(array, string) {
  const drivers = array.filter((element) => {
    return element.toLowerCase() === string.toLowerCase();
  });
  return drivers;
}

function fuzzyMatch(array, string) {
  const drivers = array.filter((element) => {
    return element.startsWith(string);
  });
  return drivers;
}

function matchName(array, string) {
  const drivers = array.filter((element) => {
    return element["name"] === string;
  });
  return drivers;
}
