/**
 * Demo of Proportional font extension by Bill Siever
 * 
 * https://github.com/bsiever/pxt-proportional-font
 */
proportionalFont.setDirection(proportionalFont.DIRECTION.Normal)
let Words = "  Frank Is The Greatest!!!  `"
basic.forever(function () {
    proportionalFont.showNumber(randint(111, 999), 150)
    proportionalFont.showString(Words, 150)
})
