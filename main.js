if (Meteor.isClient) {
    // Return a random entry from the array
    function pick(cards) {
	return cards[Math.floor(Math.random()*cards.length)];
    }
    
    // pick the first card
    Session.set("card", pick(strategies));
    
    // display the current card
    Template.card_text.card_text = function(){
	return Session.get("card");
    }
    
    // handle "card" click events
    Template.card.events = {
	'tap .flip-container, click .flip-container': function() {
	    $(".flip-container").toggleClass("hover");
	    if($(".flip-container").hasClass("hover")) {
		Session.set("card", pick(strategies));
	    }
	}
    }
}
