function points(card1, card2) {
	var number1 = (card1 - 1) % 10 + 1
	var symbol1 = Math.floor((card1 - 1) / 10)
	var number2 = (card2 - 1) % 10 + 1
	var symbol2 = Math.floor((card2 - 1) / 10)

	if (number1 == number2) {
		return 20 + number1
	}
	if (symbol1 == symbol2) {
		return 10 + Math.max(number1, number2)
	}
	return Math.max(number1, number2)
}
