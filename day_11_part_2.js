const input = `5421451741
3877321568
7583273864
3451717778
2651615156
6377167526
5182852831
4766856676
3437187583
3633371586`;

function addOrReset(x, y) {
    let found = copyData[y];
    if (typeof(found) == "undefined") return;

    found = found[x];
    if (typeof(found) == "undefined") return;
    
    if (data[y][x] == 9) {
        data[y][x] = 0;
        addAround(x, y);
    } else if (data[y][x] != 0) {
        data[y][x]++;
    }
}

// function to add point if co-ordinates exist
function addAround(x, y) {
    for (let newY = (y - 1); newY <= (y + 1); newY++) {
        for (let newX = (x - 1); newX <= (x + 1); newX++) {
            if (newX == x && newY == y) continue;
            addOrReset(newX, newY);
        }
    }
}

// formats input into usable data
let data = [];
input.split("\n").forEach(line => {
    let arr = [];
    line.split("").forEach(num => {
        arr.push(parseInt(num));
    });
    data.push(arr);
});

let step = 0;
let condition = true;
while (condition) {
    // increment for step number
    step ++;

    // add 1 to each data, set to 0 where needed
    let newData = [];
    data.forEach(line => {
        let newLine = [];
        line.forEach(num => {
            if (num == 9) {
                newLine.push(0);
            } else {
                newLine.push(num + 1)
            }
        });
        newData.push(newLine);
    });
    data = newData;

    // creates a copy to avoid "under the hood" pointers logic, allows this to be referenced instead of the current updated data
    copyData = JSON.parse(JSON.stringify(data));

    // find where 0, add 1 to adjacent points (around) where the point is not equal to 0
    copyData.forEach((line, lineIndex) => {
        line.forEach((num, numIndex) => {
            if (num != 0) return;
            addAround(numIndex, lineIndex);
        });
    });

    // counts flashes, if all are flashed, end loop
    let counter = 0;
    data.forEach(line => {
        line.forEach(num => {
            if (num == 0) counter++;
        });
    });
    if (counter == (data.length * data[0].length)) condition = false;
}
console.log(step);