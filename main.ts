input.onButtonPressed(Button.A, function () {
    isGameInProgress = true
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plot(Math.round(Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4)), Math.round(Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4)))
})
let y = 0
let prevY = 0
let x = 0
let prevX = 0
let isGameInProgress = false
let boundary = 0
boundary = 60
isGameInProgress = true
led.plot(Math.round(Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4)), Math.round(Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4)))
basic.forever(function () {
    if (isGameInProgress) {
        prevX = x
        prevY = y
        x = Math.round(Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4))
        y = Math.round(Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4))
        if (x != prevX || y != prevY) {
            led.unplot(prevX, prevY)
            led.plot(x, y)
        }
        if (x == 0 || x == 4 || y == 0 || y == 4) {
            basic.showIcon(IconNames.Angry)
            soundExpression.sad.playUntilDone()
            music.setVolume(255)
            isGameInProgress = false
        }
    }
})
