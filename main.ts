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
function mkWord () {
    rules = ["CVC", "CV", "CVCVC"]
    cons = "tdkp"
    vow = "aeiouy"
    r = rules._pickRandom()
    wrd = ""
    for (let index = 0; index <= r.length - 1; index++) {
        z = r.substr(index, 1)
        if (z == "C") {
            wrd = "" + wrd + randLtr(cons)
        } else {
            wrd = "" + wrd + randLtr(vow)
        }
    }
    return wrd
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (mkWord()))
})
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
})
function randLtr (rl: string) {
    l = rl.length
    return rl.substr(randint(0, l - 1), 1)
}
function mkLang () {
    tmax = []
}
let l = 0
let z = ""
let wrd = ""
let r = ""
let vow = ""
let cons = ""
let rules: string[] = []
let vocab: string[] = []
let j316: string[] = []
let i23: string[] = []
let tmax: number[] = []
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
tmax = []
