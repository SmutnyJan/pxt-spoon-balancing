enum Difficulty {
    Jednoducha = 100,
    Stredni = 50,
    Tezka = 25,
}

//% weight=100 color=#1d1f1d icon="\uf24e" block="Balancování"
namespace Balancovani {

    let okraje = 30
    let probihaHra = false
    let x = 0
    let y = 0
    let predchoziX = 0
    let predchoziY = 0
    
    /**
    * Spustí hru a nastaví toleranci
    */
    //% block="Spusť hru s obtížností %obtiznost"
    export function spustitHru(obtiznost: Difficulty): void {
        okraje = obtiznost
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)

        x = Math.floor(Math.floor(Math.map(input.rotation(Rotation.Roll), -180 + (180 - okraje), 180 - (180 - okraje), -1, 5) / 0.8))
        y = Math.floor(Math.floor(Math.map(input.rotation(Rotation.Pitch), -180 + (180 - okraje), 180 - (180 - okraje), -1, 5) / 0.8))
        led.plot(x, y)    
        probihaHra = true

    }

    /**
    * Aktualizuje LEDky
    */
    //% block="Aktualizuj"
    export function aktualizace(): void {
        if (probihaHra) {
            predchoziX = x
            predchoziY = y
            x = Math.floor(Math.map(input.rotation(Rotation.Roll), -180 + (180 - okraje), 180 - (180 - okraje), -1, 5) / 0.8)
            y = Math.floor(Math.map(input.rotation(Rotation.Pitch), -180 + (180 - okraje), 180 - (180 - okraje), -1, 5) / 0.8)
            if (x != predchoziX || y != predchoziY) {
                led.unplot(predchoziX, predchoziY)
                led.plot(x, y)
            }

        }
    }

    /**
    * Zkontroluje, jestli vejce nespadlo
    * @akce Příkazy, které se provedou, pokud dojde k pádu vejce
    */
    //% block="Při pádu vejce"
    export function kdyzSpadneVejce(akce: () => void) {
        const eventId = 111 + Math.randomRange(0, 100);

        control.onEvent(eventId, 0, function () {
            control.inBackground(() => {
                akce()
            })
        })

        control.inBackground(() => {
            while (true) {
                if (probihaHra && (x == 0 || x == 4 || y == 0 || y == 4)) {
                    probihaHra = false
                    control.raiseEvent(eventId, 1)
                }
                basic.pause(20)
            }
        })
    }






}