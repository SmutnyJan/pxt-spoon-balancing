input.onButtonPressed(Button.B, function () {
    Balancovani.spustitHru(50)
})
Balancovani.kdyzSpadneVejce(function () {
    soundExpression.giggle.play()
})
basic.forever(function () {
    Balancovani.aktualizace()
})
