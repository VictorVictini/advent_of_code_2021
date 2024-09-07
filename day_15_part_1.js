const input = `19999
19111
11191`;

function findKnownCost(x, y) {
    let found = known[x];
//    console.log(found, x, y);
    if (isNaN(found)) return Infinity;
    found = found[y];
    console.log(found, x, y);
    if (isNaN(found)) return Infinity;
    return found;
}

function insert(x, y, cost) {
    if (!finding[x]) finding[x] = {};
    finding[x][y] = cost;
}

// formatting input
let riskLevels = [];
const lines = input.split("\n");
lines[0].split("").forEach((num, x) => {
    riskLevels[x] = [];
    lines.forEach((line, y) => {
        riskLevels[x][y] = parseInt(lines[y][x]);
    });
});
console.log(riskLevels);


const test = {0:{0:0}}
delete test[0][0];
console.log(Object.keys(test[0]).length);

// ugly implementation of dijkstra's algorithm
let finding = {0:{0:0}};
let known = {};
while (finding.length != 0) {
    Object.keys(finding).forEach(x => {
        Object.keys(finding[x]).forEach(y => {
            x = parseInt(x);
            y = parseInt(y);
            let cost = finding[x][y] + riskLevels[x][y];
            console.log(x, y, cost, findKnownCost(x, y));
            if (findKnownCost(x, y) <= cost) return delete finding[x][y];
            if (!known[x]) known[x] = {};
            known[x][y] = cost;
            if (x > 0) insert(x - 1, y, cost);
            if (y > 0) insert(x, y - 1, cost);
            if (x < (riskLevels.length - 1)) insert (x + 1, y, cost);
            if (y < (riskLevels[0].length - 1)) insert (x, y + 1, cost);
            delete finding[x][y];
        });
    });

    Object.keys(finding).forEach(x => {
        if (Object.keys(finding[x]).length == 0) delete finding[x.toString];
    })
    console.log(finding, known);
}

console.log(known);
//console.log(known[riskLevels.length - 1][riskLevels[0].length - 1] - riskLevels[0][0]);