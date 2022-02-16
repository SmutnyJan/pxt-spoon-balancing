input.onButtonPressed(Button.A, function () {
    isGameInProgress = true
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    x = Math.floor(Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4) / 0.8)
    y = Math.floor(Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4) / 0.8)
    led.plot(x, y)
})
let y = 0
let x = 0
let isGameInProgress = false
let boundary = 0
boundary = 30
isGameInProgress = true
x = Math.floor(Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4) / 0.8)
y = Math.floor(Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4) / 0.8)
let prevX = x
let prevY = y
led.plot(x, y)
basic.forever(function () {
    if (isGameInProgress) {
        prevX = x
        prevY = y
        x = Math.floor(Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4) / 0.8)
        y = Math.floor(Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4) / 0.8)
        if (x != prevX || y != prevY) {
            led.unplot(prevX, prevY)
            led.plot(x, y)
        }
        if (x == 0 || x == 4 || y == 0 || y == 4) {
            basic.showIcon(IconNames.Angry)
            isGameInProgress = false
            soundExpression.sad.playUntilDone()
            music.setVolume(255)
        }
        serial.writeLine("" + (x))
    }
})
