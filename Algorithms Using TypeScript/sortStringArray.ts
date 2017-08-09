// to sort an array in a case insensitive manner

const foo = [
  'Aplha',
  'beta',
  'Gamma',
  'delta'
];

foo.sort((a,b) =>a.toLowerCase().localeCompare(b.toLowerCase()));

foo.forEach(x => console.log(x))
