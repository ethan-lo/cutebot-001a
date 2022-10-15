radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        xValue = value
    }
    if (name == "Y") {
        yValue = value
    }
})
let yValue = 0
let xValue = 0
radio.setGroup(2)
basic.showString("Hello")
basic.showIcon(IconNames.Yes)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    cuteBot.motors(yValue + xValue, yValue - xValue)
})
