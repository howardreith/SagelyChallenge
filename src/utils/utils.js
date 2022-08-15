export function toCamelCase(string) {
  return string.replace(/^\w|[A-Z]|\b\w/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, '');
}

export function convertCsvDataToJson(csvArray) {
  const resultArray = [];
  for (let i = 1; i < csvArray.length; i += 1) {
    const newEntry = {};
    for (let j = 0; j < csvArray[i].length; j += 1) {
      newEntry[toCamelCase(csvArray[0][j])] = csvArray[i][j];
    }
    resultArray.push(newEntry);
  }
  return resultArray;
}
