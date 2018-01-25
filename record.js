function Record(title, artist, genre, price){
  this.title = title;
  this.artist = artist;
  this.genre = genre;
  this.price = price;
}

Record.prototype.checkProperties = function(){
  return `Title: ${this.title}, Artist: ${this.artist}, Genre: ${this.genre}, Price: ${this.price}`;
}

module.exports = Record;
