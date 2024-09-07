const inputPairs = `HH -> N
CO -> F
BC -> O
HN -> V
SV -> S
FS -> F
CV -> F
KN -> F
OP -> H
VN -> P
PF -> P
HP -> H
FK -> K
BS -> F
FP -> H
FN -> V
VV -> O
PS -> S
SK -> N
FF -> K
PK -> V
OF -> N
VP -> K
KB -> H
OV -> B
CH -> F
SF -> F
NH -> O
NC -> N
SP -> N
NN -> F
OK -> S
BB -> S
NK -> S
FH -> P
FC -> S
OB -> P
VS -> P
BF -> S
HC -> V
CK -> O
NP -> K
KV -> S
OS -> V
CF -> V
FB -> C
HO -> S
BV -> V
KS -> C
HB -> S
SO -> N
PH -> C
PN -> F
OC -> F
KO -> F
VF -> V
CS -> O
VK -> O
FV -> N
OO -> K
NS -> S
KK -> C
FO -> S
PV -> S
CN -> O
VC -> P
SS -> C
PO -> P
BN -> N
PB -> N
PC -> H
SH -> K
BH -> F
HK -> O
VB -> P
NV -> O
NB -> C
CP -> H
NO -> K
PP -> N
CC -> S
CB -> K
VH -> H
SC -> C
KC -> N
SB -> B
BP -> P
KP -> K
SN -> H
KF -> K
KH -> B
HV -> V
HS -> K
NF -> B
ON -> H
BO -> P
VO -> K
OH -> C
HF -> O
BK -> H`;
let polymer = `BNSOSBBKPCSCPKPOPNNK`;

function incrementPair(pos, pair, pairIncrement, pairCounter) { // only accepts 1 or 0 for pos
    if (!pairs[pair]) return;
    // let set = pair[pos].concat(pairs[pair]);
    let set = pos == 0 ? pair[pos].concat(pairs[pair]) : pairs[pair].concat(pair[pos]);
    if (!pairIncrement[set]) pairIncrement[set] = 0;
    if (!pairCounter[pair]) return;
    pairIncrement[set] += pairCounter[pair];
}

// format pairs
let pairs = {};
inputPairs.split("\n").forEach(pair => {
    pair = pair.split(" -> ");
    pairs[pair[0]] = pair[1];
});

// count initial pairs
const pairCounter = {};
Object.keys(pairs).forEach(key => {
    const count = polymer.split("").filter((char, index) => {
        if (index == (polymer.length - 1)) return;
        return char.concat(polymer[index + 1]) == key;
    }).length;
    pairCounter[key] = count;
});

// count initial elements
const elementCounter = {};
polymer.split("").forEach(element => {
    if (!elementCounter[element]) elementCounter[element] = 0;
    elementCounter[element]++;
});

for (let i = 0; i < 40; i++) { // max 1022, or 1023 if we count "infinity"
    // make copies to be referenced to, since values changing cause weird results while in the loop
    const elementCounterCopy = JSON.parse(JSON.stringify(elementCounter));
    const pairCounterCopy = JSON.parse(JSON.stringify(pairCounter));
    const pairIncrement = {};

    Object.keys(pairCounterCopy).forEach(pair => {
        // increment relevant element
        if (pairs[pair]) {
            if (!elementCounter[pairs[pair]]) elementCounter[pairs[pair]] = 0;
            elementCounter[pairs[pair]] += pairCounterCopy[pair];
        }

        // increment relevant pairs
        incrementPair(0, pair, pairIncrement, pairCounterCopy);
        incrementPair(1, pair, pairIncrement, pairCounterCopy);
    });

    // resets relevant pairs
    Object.keys(pairCounterCopy).forEach(pair => {
        pairCounter[pair] = 0;
    });

    // adds to relevant pairs
    Object.keys(pairIncrement).forEach(pair => {
        if (!pairCounter[pair]) pairCounter[pair] = 0;
        pairCounter[pair] += pairIncrement[pair];
    });
}

let arr = Object.values(elementCounter);
console.log(Math.max(...arr) - Math.min(...arr));