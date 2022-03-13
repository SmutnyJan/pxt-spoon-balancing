input.onButtonPressed(Button.B, function () {
    Balancovani.spustitHru(Difficulty.Stredni)
})
Balancovani.kdyzSpadneVejce(function () {
    soundExpression.giggle.play()
})
basic.forever(function () {
    Balancovani.aktualizace()
})
