function salut () {
    piedGauche()
    brasGauche()
    robotbit.Servo(robotbit.Servos.S4, 30)
    piedDroit()
    brasDroit()
    robotbit.Servo(robotbit.Servos.S5, 90)
}
function brasDroit () {
    robotbit.Servo(robotbit.Servos.S7, 20)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S8, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S8, 135)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S7, 80)
    basic.pause(100)
}
function danse2 () {
    robotbit.Servo(robotbit.Servos.S4, 105)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S5, 30)
    robotbit.Servo(robotbit.Servos.S7, 30)
    robotbit.Servo(robotbit.Servos.S2, 30)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S4, 45)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S5, 90)
    robotbit.Servo(robotbit.Servos.S7, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    basic.pause(500)
}
function brasGauche () {
    robotbit.Servo(robotbit.Servos.S2, 20)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S1, 45)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S1, 135)
    basic.pause(100)
    robotbit.Servo(robotbit.Servos.S2, 80)
    basic.pause(100)
}
function danse1 () {
    robotbit.Servo(robotbit.Servos.S4, 0)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S4, 45)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S5, 45)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S5, 90)
    basic.pause(200)
}
function marche () {
    robotbit.Servo(robotbit.Servos.S4, 0)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S3, 100)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S4, 45)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S5, 45)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S6, 100)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S5, 90)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S6, 80)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S3, 80)
    basic.pause(200)
}
function merci () {
    marche()
    salut()
    danse1()
}
function piedDroit () {
    robotbit.Servo(robotbit.Servos.S5, 0)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S5, 45)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S5, 90)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S5, 135)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S5, 180)
    basic.pause(500)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "marche") {
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S8, 90)
        for (let index = 0; index < 5; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            marche()
        }
    } else if (receivedString == "dance") {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        for (let index = 0; index < 5; index++) {
            danse1()
        }
        for (let index = 0; index < 5; index++) {
            danse2()
        }
        danse3()
    } else if (receivedString == "salut") {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        salut()
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        reset()
        merci()
    }
})
function piedGauche () {
    robotbit.Servo(robotbit.Servos.S4, 0)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S4, 45)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S4, 90)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S4, 135)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S4, 180)
    basic.pause(500)
}
function danse3 () {
    for (let index = 0; index < 4; index++) {
        piedDroit()
    }
    robotbit.Servo(robotbit.Servos.S5, 90)
    for (let index = 0; index < 4; index++) {
        piedGauche()
    }
    robotbit.Servo(robotbit.Servos.S4, 45)
}
function reset () {
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S4, 30)
    robotbit.Servo(robotbit.Servos.S5, 90)
    robotbit.Servo(robotbit.Servos.S6, 90)
    robotbit.Servo(robotbit.Servos.S7, 90)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 0)
    robotbit.Servo(robotbit.Servos.S8, 180)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S8, 90)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 180)
    robotbit.Servo(robotbit.Servos.S8, 0)
}
let strip: neopixel.Strip = null
radio.setGroup(2)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
basic.showLeds(`
    . # # # .
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    `)
reset()
