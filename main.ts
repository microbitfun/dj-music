let sound = 0
basic.forever(function () {
    sound = pins.analogReadPin(AnalogPin.P1) * 2
    if (sound < 300) {
        music.playTone(sound, 100)
    }
    if (sound > 300) {
        music.playTone(0, 0)
    }
})
