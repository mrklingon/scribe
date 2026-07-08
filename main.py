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
def tranWrd(src: str):
    return tmax[vocab.index_of(src)]
def disptxt(txt: List[any]):
    for value in txt:
        basic.show_string("" + str(value))

def on_button_pressed_a():
    global mode
    mode += 1
    if mode > 4:
        mode = 0
    basic.show_string("" + (modes[mode]))
input.on_button_pressed(Button.A, on_button_pressed_a)

def mkWord():
    global rules, cons, vow, r, wrd, z
    rules = ["CVC", "CV", "CVCVC"]
    cons = "tdkp"
    vow = "aeiouy"
    r = rules._pick_random()
    wrd = ""
    index = 0
    while index <= len(r) - 1:
        z = r.substr(index, 1)
        if z == "C":
            wrd = "" + wrd + randLtr(cons)
        else:
            wrd = "" + wrd + randLtr(vow)
        index += 1
    return wrd

def on_button_pressed_ab():
    basic.show_string("" + (mkWord()))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if mode == 0:
        disptxt(i23)
    if mode == 1:
        disptxt(j316)
    if mode == 2:
        basic.show_string("Make Language")
        mkLang()
    if mode == 3:
        for value2 in i23:
            basic.show_string("" + (tranWrd(value2)))
    if mode == 4:
        for value3 in j316:
            basic.show_string("" + (tranWrd(value3)))
input.on_button_pressed(Button.B, on_button_pressed_b)

def randLtr(rl: str):
    global l
    l = len(rl)
    return rl.substr(randint(0, l - 1), 1)
def mkLang():
    global tmax
    tmax = []
    for value4 in vocab:
        tmax.append(mkWord())
l = 0
z = ""
wrd = ""
r = ""
vow = ""
cons = ""
rules: List[str] = []
tmax: List[str] = []
vocab: List[str] = []
j316: List[str] = []
i23: List[str] = []
mode = 0
modes: List[str] = []
verses()
modes = ["SI", "SJ", "MX", "TI", "TJ"]
mode = 4
mkLang()