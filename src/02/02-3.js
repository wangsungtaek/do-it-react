var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

const combined = [...array1, ...array2];

const [ first, second, three = 'empty', ...others ] = array1;

function func(...args) {
  var [first, ...others] = args;
  console.log('##first: ', first);
  console.log('##others: ', others);
}

func(11, 22, 33, 44);