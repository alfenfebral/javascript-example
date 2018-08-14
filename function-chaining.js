const calculate = function() {
  this.value = 0;

  this.add = function(val) {
    this.value += val;
    return this; // return object
  }

  this.sub = function(val) {
    this.value -= val;
    return this;
  }

  this.print = function() {
    console.log(this.value);
  }
};

const obj = new calculate(); // create new object

obj.add(5).sub(3).print(); // function chaining