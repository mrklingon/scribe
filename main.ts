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
    disptxt(i23)
})
input.onButtonPressed(Button.B, function () {
    disptxt(j316)
})
let vocab: string[] = []
let j316: string[] = []
let i23: string[] = []
verses()
basic.forever(function () {
	
})
