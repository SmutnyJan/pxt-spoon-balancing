input.onButtonPressed(Button.B, function () {
    Balancovani.SpustitHru(50)
})
Balancovani.onEggDrop(function () {
    soundExpression.giggle.play()
})
basic.forever(function () {
    Balancovani.Aktualizace()
})
