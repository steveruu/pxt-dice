let i = 0;
let wasPressed_A: boolean = false;
let wasPressed_B: boolean = false;

basic.forever(function () {
    if (input.buttonIsPressed(Button.B) && (i < 10)) {
        i += 1;

    }
    
    if (input.buttonIsPressed(Button.A) && (i > 0)) {
        i -= 1;
    }

    basic.pause(300);
    whaleysans.showNumber(i);
})

// loops.everyInterval(300, function() {
//     if (input.buttonIsPressed(Button.A)) {
//         wasPressed_A = true;
//     }
//     if (input.buttonIsPressed(Button.B))
//         wasPressed_B = true;
// })