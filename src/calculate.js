function calculate(card, cards) {
	for (i = 0; i < cards.length; i++) {
		points1 = points(card, cards[i])
		for (j = 0; j < cards.length; j++) {
			if (j != i) {
				if (points(opponent_cards[0], cards[j]) == points1) {
					draw++
				}
				if (points(opponent_cards[0], cards[j]) >= points1) {
					won -= (cards.length - 2)
				}
				else {
					for (k = 0; k < cards.length; k++) {
						if (k != j && k != i) {
							if (points(opponent_cards[1], cards[k]) == points1) {
								draw++
							}
							if (points(opponent_cards[1], cards[k]) >= points1) {
								won--
							}
						}
					}
				}
			}
		}
	}
	document.getElementById("won").innerHTML = "Win chance: " + (won / apsolute * 100).toFixed(2) + "%"
	document.getElementById("draw").innerHTML = "Draw chance: " + (draw / apsolute * 100).toFixed(2) + "%"
}

