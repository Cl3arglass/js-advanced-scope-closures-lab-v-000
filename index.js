function createDriver() {
  let DriverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }


  };
}

function produceDrivingRange(blockRange) {
  return function(start, end) {
    let blocks = parseInt(end.split('th')[0]) - parseInt(start.split('th')[0]);
    if (blocks <= this.blockRange) {
      return `within range by ${this.blockRange - blocks}`;
    } else {
      return `${blocks - this.blockRange}` blocks out of range`;
    }
  };
}
