function load(n) {
	for (i = 1; i < n; i++) {
		var card = cards.splice(Math.floor(Math.random() * cards.length), 1)
		opponent_cards.push(card)
		document.getElementById("opponents1").innerHTML += "<div class=\"card\" id=\"card1" + i + "\">" + mark[Math.floor((card - 1) / 10)] + ((card - 1) % 10 + 1) + "</div>"
		document.getElementById("opponents2").innerHTML += "<div class=\"card\" id=\"card2" + i + "\"></div>"
	}

	var card = cards.splice(Math.floor(Math.random() * cards.length), 1)
	player_card = card
	document.getElementById("player2").innerHTML += "<div class=\"card\" id=\"card\">" + mark[Math.floor((card - 1) / 10)] + ((card - 1) % 10 + 1) + "</div>"
	document.getElementById("player1").innerHTML += "<div class=\"card\" id=\"card2\"></div>"
	calculate(card, cards)
}
