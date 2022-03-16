enum Difficulty {
    Jednoducha = 100,
    Stredni = 50,
    Tezka = 25,
}

//% weight=100 color=#1d1f1d icon="\uf24e" block="Balancování"
namespace balancing {

    let boundary = 30
    let isGameInProgress = false
    let x = 0
    let y = 0
    let previousX = 0
    let previousY = 0
    
    /**
    * Spustí hru s obtížností
    * @difficulty Obtížnost hry
    */  
    //% block="Spusť hru s obtížností %difficulty"
    export function playGame(difficulty: Difficulty): void {
        boundary = difficulty
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)

        x = Math.floor(Math.floor(Math.map(input.rotation(Rotation.Roll), -180 + (180 - boundary), 180 - (180 - boundary), -1, 5) / 0.8))
        y = Math.floor(Math.floor(Math.map(input.rotation(Rotation.Pitch), -180 + (180 - boundary), 180 - (180 - boundary), -1, 5) / 0.8))
        led.plot(x, y)    
        isGameInProgress = true

    }

    /**
    * Aktualizuje LEDky
    */
    //% block="Aktualizuj"
    export function tick(): void {
        if (isGameInProgress) {
            previousX = x
            previousY = y
            x = Math.floor(Math.map(input.rotation(Rotation.Roll), -180 + (180 - boundary), 180 - (180 - boundary), -1, 5) / 0.8)
            y = Math.floor(Math.map(input.rotation(Rotation.Pitch), -180 + (180 - boundary), 180 - (180 - boundary), -1, 5) / 0.8)
            if (x != previousX || y != previousY) {
                led.unplot(previousX, previousY)
                led.plot(x, y)
            }

        }
    }

    /**
    * Zkontroluje, jestli vejce nespadlo
    * @akce Bloky, které se provedou, pokud dojde k pádu vejce
    */
    //% block="Při pádu vejce"
    export function onEggDrop(action: () => void) {
        const eventId = 111 + Math.randomRange(0, 100);

        control.onEvent(eventId, 0, function () {
            control.inBackground(() => {
                action()
            })
        })

        control.inBackground(() => {
            while (true) {
                if (isGameInProgress && (x == 0 || x == 4 || y == 0 || y == 4)) {
                    isGameInProgress = false
                    control.raiseEvent(eventId, 1)
                }
                basic.pause(20)
            }
        })
    }






}