

function RecordStore(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.checkInventory = function(){
  return this.inventory.length;
}

RecordStore.prototype.addItem = function(item){
  this.inventory.push(item)
}
RecordStore.prototype.listInventory = function(){
  return this.inventory.map(item => item);
}

RecordStore.prototype.sellRecord = function(record){
  if(this.inventory.includes(record)){
    var index = this.inventory.indexOf(record);
    this.inventory.splice(index, 1);
    this.balance += record.price;
  }
}

RecordStore.prototype.inventoryValue = function(){
  var value = 0;

  this.inventory.forEach(function(item){
    value += item.price;
  })

  return value;
}

RecordStore.prototype.overallAssets = function(){
  return this.inventoryValue() + this.balance;
}

RecordStore.prototype.recordByGenre = function(genre){
  return this.inventory.filter(record => record.genre === genre);
}

RecordStore.prototype.removeRecord = function(record){
  var index = this.inventory.indexOf(record);
  this.inventory.splice(index, 1);
}


module.exports = RecordStore;
