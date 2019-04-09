// Regular
console.log('Hello!');

// Interpolated
console.log("Hello! I'm a %s string!");


// Styled
console.log('%c I am some great text',
'font-size: 25px; background: red; color: rgb(98, 45, 210); text-shadow: 5px 3px 0 blue');

// warning!
console.warn('OH FUUUUUUCK!');

// error
console.error('Shit!');

// info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');

console.assert(1 === 2, 'That is wrong!');

// Clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

const dogs = [{name: 'Snickers', age: 2}, {name: 'hugo', age: 8}];



// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age *7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// Counting
console.count('Wes')
console.count('Max')
console.count('Steve')
console.count('Michelle')
console.count('Mike')
console.count('Nike')

// timing
console.time('fetching data');
fetch('https://api.github.com/users/webos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });
console.table(dogs)
