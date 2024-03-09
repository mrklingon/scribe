function verses () {
    i23 = [
    "Thou",
    "wilt",
    "keep",
    "him",
    "in",
    "perfect",
    "peace",
    "whose",
    "mind",
    "is",
    "stayed",
    "on",
    "thee:",
    "because",
    "he",
    "trusteth",
    "in",
    "thee"
    ]
    j316 = [
    "For",
    "God",
    "so",
    "loved",
    "the",
    "world",
    "that",
    "he",
    "gave",
    "his",
    "only",
    "begotten",
    "Son",
    "that",
    "whosoever",
    "believeth",
    "in",
    "him",
    "should",
    "not",
    "perish",
    "but",
    "have",
    "everlasting",
    "life"
    ]
    vocab = [
    "because",
    "begotten",
    "believeth",
    "but",
    "everlasting",
    "For",
    "gave",
    "God",
    "have",
    "he",
    "him",
    "his",
    "in",
    "is",
    "keep",
    "life",
    "loved",
    "mind",
    "not",
    "on",
    "only",
    "peace",
    "perfect",
    "perish",
    "should",
    "so",
    "Son",
    "stayed",
    "that",
    "the",
    "thee",
    "thee:",
    "Thou",
    "trusteth",
    "whose",
    "whosoever",
    "wilt",
    "world"
    ]
}
function disptxt (txt: any[]) {
    for (let value of txt) {
        basic.showString("" + value)
    }
}
input.onButtonPressed(Button.A, function () {
    mode += 1
    if (mode > 4) {
        mode = 0
    }
    basic.showString("" + (modes[mode]))
})
function mkRules () {
    for (let index = 0; index <= 4; index++) {
        r = ""
        for (let r1 = 0; r1 <= randint(2, 6); r1++) {
            if (3 < randint(0, 9)) {
                r = "" + r + "V"
            } else {
                r = "" + r + "C"
            }
        }
        rules[index] = r
    }
}
function mkWord () {
    r = rules[randint(0, 4)]
    word = ""
    for (let index = 0; index <= r.length - 1; index++) {
        if ("C" == r.substr(index, 110)) {
            word = "" + word + consonants.substr(randint(0 - consonants.length, 10), 1)
        } else {
            word = "" + word + vowels.substr(randint(0 - vowels.length, 10), 1)
        }
    }
    return word
}
function makeBASE () {
    vowels = "aeiouy"
    consonants = "bcdfghjklmnpqrstvwxyz"
    rules = [
    "",
    "",
    "",
    "",
    ""
    ]
    mkRules()
}
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        disptxt(i23)
    }
    if (mode == 1) {
        disptxt(j316)
    }
    if (mode == 2) {
        basic.showString("Make Language")
    }
    if (mode == 3) {
        basic.showString("Translate Isaiah")
    }
    if (mode == 4) {
        basic.showString("Translate John")
    }
})
let vowels = ""
let consonants = ""
let word = ""
let rules: string[] = []
let r = ""
let vocab: string[] = []
let j316: string[] = []
let i23: string[] = []
let mode = 0
let modes: string[] = []
verses()
modes = [
"SI",
"SJ",
"MX",
"TI",
"TJ"
]
mode = 4
makeBASE()
basic.forever(function () {
	
})
