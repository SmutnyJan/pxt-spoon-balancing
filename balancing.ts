/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#1d1f1d icon="\uf24e"
namespace Balancovani {

    let boundary = 30
    let isGameInProgress = false
    let x = 0
    let y = 0
    let prevX = 0
    let prevY = 0
    
    /**
    * Spustí hru a nastaví toleranci
    */
    //% block="Spusť hru s tolerancí %tolerance"
    export function SpustitHru(tolerance: number): void {
        boundary = tolerance
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
        isGameInProgress = true

    }

    /**
    * Aktualizuje LEDky
    */
    //% block="Aktualizuj"
    export function Aktualizace(): void {
        if (isGameInProgress) {
            prevX = x
            prevY = y
            x = Math.floor(Math.map(input.rotation(Rotation.Roll), 0 - boundary, boundary, 0, 4) / 0.8)
            y = Math.floor(Math.map(input.rotation(Rotation.Pitch), 0 - boundary, boundary, 0, 4) / 0.8)
            if (x != prevX || y != prevY) {
                led.unplot(prevX, prevY)
                led.plot(x, y)
            }

        }
    }

    /**
    * Zkontroluje, jestli vejce nespadlo
    */
    //% block="Při pádu vejce"
    export function onEggDrop(action: () => void) {
        const myEventID = 111 + Math.randomRange(0, 100); // semi-unique

        control.onEvent(myEventID, 0, function () {
            control.inBackground(() => {
                action()
            })
        })

        control.inBackground(() => {
            while (true) {
                if (isGameInProgress && (x == 0 || x == 4 || y == 0 || y == 4)) {
                    isGameInProgress = false
                    control.raiseEvent(myEventID, 1)
                }
                basic.pause(20)
            }
        })
    }






}