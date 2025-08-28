'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  sourceString
    .split(';') // split by semicolons
    .map((line) => line.trim()) // trim whitespace
    .filter((line) => line.length > 0) // remove empty entries
    .forEach((decl) => {
      const [property, ...valueParts] = decl.split(':');

      if (!property || valueParts.length === 0) {
        return;
      }

      const key = property.trim();
      const value = valueParts.join(':').trim(); // in case value contains `:`

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
