function check() {
	document.getElementById("show").innerHTML = ""

	var card = cards.splice(Math.floor(Math.random() * cards.length), 1)
	document.getElementById("card2").innerHTML = mark[Math.floor((card - 1) / 10)] + ((card - 1) % 10 + 1)
	p1 = points(card, player_card)

	var card = cards.splice(Math.floor(Math.random() * cards.length), 1)
	document.getElementById("card21").innerHTML = mark[Math.floor((card - 1) / 10)] + ((card - 1) % 10 + 1)
	p2 = points(card, opponent_cards[0])

	var card = cards.splice(Math.floor(Math.random() * cards.length), 1)
	document.getElementById("card22").innerHTML = mark[Math.floor((card - 1) / 10)] + ((card - 1) % 10 + 1)
	p3 = points(card, opponent_cards[1])

	document.getElementById("won").innerHTML = ""
	document.getElementById("draw").innerHTML = ""

	if (Math.max(p1, p2, p3) == p1) {
		if (p1 == Math.max(p2, p3)) {
			document.getElementById("won").innerHTML = "It's a draw!"
			return
		}
		document.getElementById("won").innerHTML = "You won!"
		return
	}
	document.getElementById("won").innerHTML = "You lost!"
}

