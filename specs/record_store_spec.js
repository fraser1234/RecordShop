const assert = require("assert");
const Record = require("../record.js");
const RecordStore = require("../record_store.js");

describe("RecordStore", function(){

  let testRecordStore;
  let testRecord;

  beforeEach(function(){
    testRecord = new Record("McSong", "McArtist", "McGenre", 500);
    testRecordStore = new RecordStore("McRecordStore", "McCity");
    testRecordStore.addItem(testRecord);
  })

  it("can add item", function(){
    assert.strictEqual(testRecordStore.checkInventory(), 1);
  })

  it("can print out properties", function(){
    assert.strictEqual(testRecord.checkProperties(), "Title: McSong, Artist: McArtist, Genre: McGenre, Price: 500")
  })

  it("can list the inventory", function(){
    assert.deepEqual(testRecordStore.listInventory(), [testRecord]);
  })

  it("can sell an item", function(){
    testRecordStore.sellRecord(testRecord);
    assert.deepEqual(testRecordStore.checkInventory(), 0);
    assert.deepEqual(testRecordStore.balance, 500);
  })

  it("get financial situation", function(){
    testRecordStore.balance = 1000;
    assert.strictEqual(testRecordStore.inventoryValue(), 500);
    assert.strictEqual(testRecordStore.overallAssets(), 1500);
  })

  it("allow to view by genre", function(){
    assert.deepEqual(testRecordStore.recordByGenre("McGenre"), [testRecord]);
    assert.deepEqual(testRecordStore.recordByGenre("Pop"), []);
  })





})
