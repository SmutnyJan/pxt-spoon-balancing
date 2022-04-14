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
