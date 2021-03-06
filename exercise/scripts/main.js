window.addEventListener('DOMContentLoaded', function() {
  var cards = document.querySelectorAll('.card');
  var selectedCards = [];
  var matchedCards = [];

  cards.forEach(function(card) {
    card.addEventListener('click', function() {

      // If the card has already been matched or selected, ignore it.
      if (card.classList.contains('is-matched') || card.classList.contains('is-selected')) {
        return;
      }

      // If we haven't selected 2 cards yet, add the current card to the
      // collection of selected cards and apply the correct CSS class.
      if (selectedCards.length < 2) {
        card.classList.add('is-selected');
        selectedCards.push(card);
      }

      // If we have selected two cards, see if they match.
       if (selectedCards.length === 2) {           
        var card1 = selectedCards[0];
        var card2 = selectedCards[1]; //The function was assigning the position 0 to both of the cards inside the array;
       }

        // If the cards match, add them to the collection of matched cards and
        // apply the correct CSS class.
        if (card1.innerText === card2.innerText) {
          matchedCards.push(card1, card2);
          card1.classList.add('is-matched');
          card2.classList.add('is-matched');
        }

        // Regardless of whether or not the cards match, deselect them and reset
        // the collection of matched cards.      
          card1.classList.remove('is-selected');
          card2.classList.remove('is-selected'); //Variable name was incorrect, card3. There is no variable card3 inside the array.
          selectedCards = [];    

      // If we've matched all the cards, display a message.
      if (matchedCards.length >= cards.length) {  //Conditional was expecting values greater than 6, added = to match 6 or greater (would not happen as long as the game has only 6 cards.)
        alert('You matched all the cards, nice job!');
        document.getElementById("overlay").style.display = "flex";
      }
    });
  });
});
