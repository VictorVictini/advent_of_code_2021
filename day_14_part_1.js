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

// format pairs
let pairs = {};
inputPairs.split("\n").forEach(pair => {
    pair = pair.split(" -> ");
    pairs[pair[0]] = pair[1];
});

// building polymer for next step
for (let i = 0; i < 10; i++) {
    let lastUsed = -999;
    let copy = polymer;
    polymer = "";
    copy.split("").forEach((char, index) => {
        if (index == (copy.length - 1)) return;
        let insert = pairs[char.concat(copy[index + 1])];
        if (!insert) return;
        if (lastUsed == (index - 1)) {
            polymer = polymer.concat(insert, copy[index + 1]);
        } else {
            polymer = polymer.concat(copy[index], insert, copy[index + 1]);
        }
        lastUsed = index;
    });
}

// counting each element's occurrences
let counter = {};
polymer.split("").forEach(element => {
    if (!counter[element]) counter[element] = 0;
    counter[element]++;
});

console.log(Math.max(...Object.values(counter)) - Math.min(...Object.values(counter)));