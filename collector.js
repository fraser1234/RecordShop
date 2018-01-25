function Collector(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
}

Collector.prototype.buyRecord = function(recordStore, record){
  if(this.cash >= record.price && recordStore.inventory.includes(record)){
    recordStore.removeRecord(record);
    this.collection.push(record);
    this.cash -= record.price;
  }
}

Collector.prototype.collectionValue = function(){
  var total = 0
  this.collection.forEach(function(item){
    total += item.price;
  });
  return total;
}

Collector.prototype.collectionValueByGenre = function(genre){
  var only_genre = this.collection.filter(record => record.genre === genre);

  var total = 0
  only_genre.forEach(function(item){
    total += item.price;
  });
  return total;
}

Collector.prototype.mostValuableRecord = function(){
  var maxRecord = this.collection[0];

  this.collection.forEach(function(item){
    if (item.price > maxRecord.price){
      maxRecord = item;
    }
  })
  return maxRecord;
}

Collector.prototype.sortAscending = function(){
  function comparePrices(record1, record2){
    return record1.price - record2.price;
  }
  var sortedArray = this.collection.sort(comparePrices);
  return sortedArray;
}


Collector.prototype.sortDescending = function(){
  function comparePrices(record1, record2){
    return record2.price - record1.price;
  }
  var sortedArray = this.collection.sort(comparePrices);
  return sortedArray;
}

Collector.prototype.compareCollection = function(collector){
  return (this.collectionValue() > collector.collectionValue() ? this : collector);
}







module.exports = Collector;
