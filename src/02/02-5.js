class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function(first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;

    console.log(addThis2(1,2));
    console.log(addThis3(2,3));
  }
}

const myClass = new MyClass();