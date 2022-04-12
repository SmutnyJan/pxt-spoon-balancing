let jeHraSpustena = false
let souradnice: number[] = []
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    jeHraSpustena = !(jeHraSpustena)
})
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
/*
balancing.onEggDrop(function () {
    if (jeHraSpustena) {
        jeHraSpustena = false
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    jeHraSpustena = !(jeHraSpustena)
})
let jeHraSpustena = false
balancing.setDifficulty(Difficulty.Easy)
basic.forever(function () {
    if (jeHraSpustena) {
        balancing.tick()
    }
})

*/