// sort arrays in TypeScript

const arr = ['foo', 'bar'];

arr.sort();
console.log(arr);




const arr1 = [1, 222, 4, 5, 3];

arr1.sort((a,b) => a-b );
console.log(arr1);

const movies = [
  {
    name: 'The Shawshank Redemption',
    year: 1994
  },
  {
    name: 'The Godfather',
    year: 1972
  },
  {
    name: 'The Godfather : Part II',
    year: 1974
  },
  {
    name: 'The Dark Knight',
    year: 2008
  }
];

movies.sort((a,b) => a.year -b.year); //O(n logn)
console.log(movies.map(movie => movie.name));
