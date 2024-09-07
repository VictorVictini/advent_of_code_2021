let list = [4, 1, 1, 1, 5, 1, 3, 1, 5, 3, 4, 3, 3, 1, 3, 3, 1, 5, 3, 2, 4, 4, 3, 4, 1, 4, 2, 2, 1, 3, 5, 1, 1, 3, 2, 5, 1, 1, 4, 2, 5, 4, 3, 2, 5, 3, 3, 4, 5, 4, 3, 5, 4, 2, 5, 5, 2, 2, 2, 3, 5, 5, 4, 2, 1, 1, 5, 1, 4, 3, 2, 2, 1, 2, 1, 5, 3, 3, 3, 5, 1, 5, 4, 2, 2, 2, 1, 4, 2, 5, 2, 3, 3, 2, 3, 4, 4, 1, 4, 4, 3, 1, 1, 1, 1, 1, 4, 4, 5, 4, 2, 5, 1, 5, 4, 4, 5, 2, 3, 5, 4, 1, 4, 5, 2, 1, 1, 2, 5, 4, 5, 5, 1, 1, 1, 1, 1, 4, 5, 3, 1, 3, 4, 3, 3, 1, 5, 4, 2, 1, 4, 4, 4, 1, 1, 3, 1, 3, 5, 3, 1, 4, 5, 3, 5, 1, 1, 2, 2, 4, 4, 1, 4, 1, 3, 1, 1, 3, 1, 3, 3, 5, 4, 2, 1, 1, 2, 1, 2, 3, 3, 5, 4, 1, 1, 2, 1, 2, 5, 3, 1, 5, 4, 3, 1, 5, 2, 3, 4, 4, 3, 1, 1, 1, 2, 1, 1, 2, 1, 5, 4, 2, 2, 1, 4, 3, 1, 1, 1, 1, 3, 1, 5, 2, 4, 1, 3, 2, 3, 4, 3, 4, 2, 1, 2, 1, 2, 4, 2, 1, 5, 2, 2, 5, 5, 1, 1, 2, 3, 1, 1, 1, 3, 5, 1, 3, 5, 1, 3, 3, 2, 4, 5, 5, 3, 1, 4, 1, 5, 2, 4, 5, 5, 5, 2, 4, 2, 2, 5, 2, 4, 1, 3, 2, 1, 1, 4, 4, 1, 5];

// creates object from list
let counter = {}
list.forEach(days => {
    if (!counter[days]) counter[days] = 0;
    counter[days] += 1;
});

// general algorithm, thanks https://chaudhary1337.com/advent-of-code-2021-day-6-solutions-in-python3/ for logic
for (let i = 0; i < 256; i++) {
    let new_counter = {};

    Object.keys(counter).forEach(days => {
        if (days == 0) {
            // for each fish when reaching 0, they duplicate at 6 and 8
            if (!new_counter[8]) new_counter[8] = 0;
            if (!new_counter[6]) new_counter[6] = 0;
            new_counter[8] += counter[0];
            new_counter[6] += counter[0];
        } else {
            // just moving fishes back one in days
            if (!new_counter[days - 1]) new_counter[days - 1] = 0;
            new_counter[days - 1] += counter[days];
        }
    });

    counter = new_counter;
}

// adds fishes up
let totalFishes = 0;
Object.values(counter).forEach(fishes => totalFishes += fishes);

console.log(JSON.stringify(totalFishes));