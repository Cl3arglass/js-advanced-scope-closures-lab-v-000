function createDriver() {
  let DriverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }


  };
  function produceDrivingRange(blockRange) {
    return blockRange;
  }
}
