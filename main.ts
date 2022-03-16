balancing.onEggDrop(function () {
    soundExpression.giggle.play()
})
input.onButtonPressed(Button.B, function () {
    balancing.playGame(Difficulty.Tezka)
})
basic.forever(function () {
    balancing.tick()
})
