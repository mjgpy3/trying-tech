// @flow

const examplePossible = new Map([
  ['dairy', [ 'abc' ]],
  ['eggs', [ 'abc', 'def' ]],
  ['fish', [ 'abc', 'def', 'ghi' ]],
]);

const findOneToOne = possible => {
  const reduced = new Map();

  while (reduced.size !== possible.size) {
    [...possible.entries()].forEach(([k, v]) => {
      const single = v.filter(item => ![...reduced.values()].includes(item));

      if (single.length === 1) {
        reduced.set(k, single[0]);
      }
    });
  }

  return reduced;
};

console.log(findOneToOne(examplePossible));
