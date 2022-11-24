let i = 0;

input.onButtonPressed(Button.B, function () {
    i += 1;
    if (i > 10) {
        i = 10;
    }
    basic.showNumber(i);
})

input.onButtonPressed(Button.A, function () {
    i -= 1;
    if (i < 0) {
        i = 0;
    }
    basic.showNumber(i);
})

basic.forever(function () {
})