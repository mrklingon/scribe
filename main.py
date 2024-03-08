def verses():
    global i23, j316, vocab
    i23 = ["Thou",
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
        "thee"]
    j316 = ["For",
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
        "life"]
    vocab = ["because",
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
        "world"]
def disptxt(txt: List[any]):
    for value in txt:
        basic.show_string("" + str(value))

def on_button_pressed_a():
    disptxt(i23)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    disptxt(j316)
input.on_button_pressed(Button.B, on_button_pressed_b)

vocab: List[str] = []
j316: List[str] = []
i23: List[str] = []
verses()

def on_forever():
    pass
basic.forever(on_forever)
