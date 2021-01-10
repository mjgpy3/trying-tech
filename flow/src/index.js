// @flow

const examplePossible: Map<string, Array<string>> = new Map([
  ['dairy', [ 'abc' ]],
  ['eggs', [ 'abc', 'def' ]],
  ['fish', [ 'abc', 'def', 'ghi' ]],
]);

const examplePossible2: Map<number, Array<string>> = new Map([
    [1, [ 'abc' ]],
    [2, [ 'abc', 'def' ]],
    [3, [ 'abc', 'def', 'ghi' ]],
]);

const examplePossible3: Map<number, string> = new Map();

function findOneToOne<T1, T2>(possible: Map<T1, Array<T2>>): Map<T1, T2> {
  const reduced: Map<T1, T2> = new Map();

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

console.log(findOneToOne(examplePossible2));
console.log(findOneToOne(examplePossible));
console.log(findOneToOne(examplePossible3));
