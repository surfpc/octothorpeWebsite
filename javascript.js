$( function() {
  var initialCardStyle = `
  font-family: "Russo One", sans-serif;
  text-align: center;
  color: white;
  margin-top: 50px;
  margin-left: 80px;
  margin-right: 80px;
  padding: 250px 0;
  border: solid 2px #2980B9;
  background-color: #2980B9;`
  var initialCard = new Card('This is a card', 'card1', initialCardStyle);
  initialCard.displayCard()

});

function Card(bodyText, cardId, cardStyle) {
  this.bodyText = bodyText;
  this.cardId = cardId;
  this.cardStyle = cardStyle;

  this.displayCard = function() {
    var cardTemplate = (
      `<h1 id="${cardId}"class="card" onmouseup='handleDrag()' style='${cardStyle}'>${bodyText}</h1>`
    )
    $('.gamePlaceholder').append(cardTemplate);
    $('.card').draggable({axis: 'x'});
  }
}

function cardStyle(color) {
  return (
    `
    font-family: "Russo One", sans-serif;
    text-align: center;
    color: white;
    margin-top: 50px;
    margin-left: 80px;
    margin-right: 80px;
    padding: 250px 0;
    border: solid 2px ${color};
    background-color: ${color};`
  )
}

function handleDrag() {
  var maxLeft = 120;
  console.log('mouseUp');
  var positionOnX = parseInt($('.card').css('left'));
  if(positionOnX < -120){
    nextCard({direction: 'left'})
  } else if (positionOnX > 120){
    nextCard({direction: 'right'})
  } else {
    $('.card').css('left', 0)
  }

}

function hi() {
  console.log('test completed');

}

function nextCard(options) {
  $('.card').remove();
  if(options.direction === 'left'){
      var newCard = new Card('This is left card', 'card2', cardStyle("#3498DB"))
      newCard.displayCard()
  }else if(options.direction === 'right'){
    var newCard = new Card('This is right card', 'card2', cardStyle("#3498DB"))
    newCard.displayCard()
  }

}
