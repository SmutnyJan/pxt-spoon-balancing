input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    jeHraSpustena = !(jeHraSpustena)
})
let souradnice: number[] = []
let jeHraSpustena = false
balancing.setDifficulty(Difficulty.Normal)
basic.forever(function () {
    if (jeHraSpustena) {
        balancing.tick()
        souradnice = balancing.coordinates()
    }
    if (jeHraSpustena && (souradnice[0] == 0 || souradnice[0] == 4 || souradnice[1] == 0 || souradnice[1] == 4)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # # # #
            # . . . #
            `)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        jeHraSpustena = false
    }
})
