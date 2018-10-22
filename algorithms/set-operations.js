// Set Algorithms in JS

/**
 *
 * Union algorithm
 * @param {*} setA type array
 * @param {*} setB type array
 * @returns Union set
 */
const union = (setA, setB) => {
  const totalSet = setA.concat(setB);
  return totalSet.filter((value, i, self) => self.indexOf(value) === i);
};

/**
 *
 * Intersection algorithm
 * @param {*} setA type array
 * @param {*} setB type array
 * @returns Intersection set
 */
const intersection = (setA, setB) => {
  const totalSet = setA.concat(setB);
  return totalSet.filter((value, i, self) => self.indexOf(value) !== i);
};

/**
 *
 * Difference algorithm
 * @param {*} setA type array
 * @param {*} setB type array
 * @returns Difference set
 */
const difference = (setA, setB) => {
  const totalSet = union(setA, setB);

  const a = totalSet.filter(value => !setA.includes(value));
  const b = totalSet.filter(value => !setB.includes(value));
  return union(a, b);
};

/**
 *
 * Symmetric Difference algorithm
 * @param {*} setA type array
 * @param {*} setB type array
 * @returns Difference set
 */
const symmetricDifference = (setA, setB) => {
  const intsct = intersection(setA, setB);
  const unn = union(setA, setB);
  return difference(intsct, unn);
};
