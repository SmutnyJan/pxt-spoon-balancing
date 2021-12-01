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
        x = Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4)
        y = Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4)
        if (x < 0.8) {
            x = 0
        } else if (x < 1.6) {
            x = 1
        } else if (x < 2.4) {
            x = 2
        } else if (x < 3.2) {
            x = 3
        } else {
            x = 4
        }

        if (y < 0.8) {
            y = 0
        } else if (y < 1.6) {
            y = 1
        } else if (y < 2.4) {
            y = 2
        } else if (y < 3.2) {
            y = 3
        } else {
            y = 4
        }
        
        if (x != prevX || y != prevY) {
            led.unplot(prevX, prevY)
            led.plot(x, y)
        }
        if (x == 0 || x == 4 || y == 0 || y == 4) {
            basic.showIcon(IconNames.Angry)
            // soundExpression.sad.playUntilDone()
            // music.setVolume(255)
            isGameInProgress = false
        }
    }
})
