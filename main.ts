let control2 = 0
led.enable(false)
control2 += 1
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    basic.pause(100)
    while (control2 > 0) {
        control2 += 1
        pins.analogWritePin(AnalogPin.P0, control2)
        basic.pause(1000)
    }
    while (control2 > 0) {
        control2 += 1
        pins.analogWritePin(AnalogPin.P0, control2)
        basic.pause(1000)
    }
})
