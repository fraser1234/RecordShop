const assert = require("assert");
const Record = require("../record.js");
const RecordStore = require("../record_store.js");
const Collector = require("../collector.js");

describe("Collector", function(){


  let keith;
  let sandy;
  let recordStore;
  let record1;
  let record2;
  let record3;


  beforeEach(function(){
    keith = new Collector("Keith", 2000);
    sandy = new Collector("Sandy", 1500);
    recordStore = new RecordStore("Classic Records", "Glasgow");
    record1 = new Record("The Chain", "Fleetwood Mac", "Genius", 300);
    record2 = new Record("Teardrops", "Womack & Womack", "Disco", 200);
    record3 = new Record("Screamin", "MunchHouse", "Disco", 20000);
    record4 = new Record("Blam", "Wahoo", "Disco", 2);
    recordStore.addItem(record1);
    recordStore.addItem(record2);
  })

  it("collector can buy record", function(){
    keith.buyRecord(recordStore, record1);
    assert.strictEqual(keith.cash, 1700);
    assert.strictEqual(keith.collection.length, 1);
    assert.strictEqual(recordStore.checkInventory(), 1);
    assert.strictEqual(recordStore.inventoryValue(), 200 );
  })

  it('collector can\' buy expensive record', function(){
    keith.buyRecord(recordStore, record3);
    assert.strictEqual(keith.cash, 2000);
    assert.strictEqual(keith.collection.length, 0);
    assert.strictEqual(recordStore.checkInventory(), 2);
    assert.strictEqual(recordStore.inventoryValue(), 500 );
  })

  it('collector can get total value of collection', function(){
    keith.buyRecord(recordStore, record1);
    keith.buyRecord(recordStore, record2);
    assert.strictEqual(keith.collectionValue(), 500);
  })

  it("can view collection value by genre", function(){
    recordStore.addItem(record4);
    keith.buyRecord(recordStore, record2);
    keith.buyRecord(recordStore, record4);
    assert.strictEqual(keith.collectionValueByGenre("Disco"), 202);
  })

  it("can get most valuable record", function(){
    recordStore.addItem(record4);
    keith.buyRecord(recordStore, record2);
    keith.buyRecord(recordStore, record4);
    assert.strictEqual(keith.mostValuableRecord(), record2)
  })

  it("can sort", function(){
    recordStore.addItem(record4);
    keith.buyRecord(recordStore, record2);
    keith.buyRecord(recordStore, record4);
    // assert.strictEqual(keith.collection.length, 2);
    assert.deepEqual(keith.sortAscending(), [record4, record2]);
    assert.deepEqual(keith.sortDescending(), [record2, record4]);
  })

  it("can comapre value of collection", function(){
    sandy.buyRecord(recordStore, record1);
    recordStore.addItem(record4);
    keith.buyRecord(recordStore, record2);
    keith.buyRecord(recordStore, record4);
    assert.strictEqual(keith.compareCollection(sandy), sandy);
  })


})
