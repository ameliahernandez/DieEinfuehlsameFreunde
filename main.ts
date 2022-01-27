input.onPinPressed(TouchPin.P0, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    VFunkgruppe += 1
    radio.setGroup(VFunkgruppe)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(VFunkgruppe)
})
input.onButtonPressed(Button.B, function () {
    VFunkgruppe += -1
    radio.setGroup(VFunkgruppe)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Sad)
})
let VFunkgruppe = 0
VFunkgruppe = 1
radio.setGroup(VFunkgruppe)
