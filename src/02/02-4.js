const arr2 = [];
arr2.push(1);
console.log(arr2);
arr2.splice(0, 0, 0);
console.log(arr2);
arr2.pop();
console.log(arr2);

const obj2 = {};
obj2['name'] = '내이름';
console.log(obj2);
Object.assign(obj2, {name: '새이름'});
console.log(obj2);
delete obj2.name;
console.log(obj2);