input.onButtonPressed(Button.B, function () {
    Balancovani.spustitHru(50)
})
Balancovani.onEggDrop(function () {
    soundExpression.giggle.play()
})
basic.forever(function () {
    Balancovani.aktualizace()
})
