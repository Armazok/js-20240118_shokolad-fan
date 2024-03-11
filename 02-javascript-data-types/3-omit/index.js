/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const result = [];
  const currentArr = Object.entries(obj);

  for (const [key, value] of currentArr) {
    if (!~fields.indexOf(key)) {
      result.push([key, value]);
    }
  }

  return Object.fromEntries(result);
};

const omitForOf = (obj, ...fields) => {
  const result = [];
  const currentArr = Object.entries(obj);

  for (let i = 0; i < currentArr.length; i++) {
    const [key, value] = currentArr[i];
    if (!fields.includes(key)) {
      result.push([key, value]);
    }
  }

  return Object.fromEntries(result);
};
