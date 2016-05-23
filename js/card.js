exports.Card = function(cardImgPath){
  this.cardImgPath = cardImgPath;
}


exports.Card.prototype.matches = function(otherCard) {
  return this.cardImgPath === otherCard.cardImgPath;
}

// exports.Card.prototype.flipFaceUp = function() {
//   return this.subject + "\nDear " + this.to + ", " + this.messageText + " Yours truly, " + this.from;
// }
//
// exports.Card.prototype.flipFaceDown = function() {
//   return this.subject + "\nDear " + this.to + ", " + this.messageText + " Yours truly, " + this.from;
// }
