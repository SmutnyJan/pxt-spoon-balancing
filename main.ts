input.onButtonPressed(Button.B, function () {
    Balancovani.SpustitHru(50)
})
basic.forever(function () {
    Balancovani.Aktualizace()
})
