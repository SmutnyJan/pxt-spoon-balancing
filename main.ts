input.onButtonPressed(Button.B, function () {
    Balancovani.SpustitHru(0)
})
basic.forever(function () {
    Balancovani.Aktualizace()
})
