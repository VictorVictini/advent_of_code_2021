const input = `lg-GW
pt-start
pt-uq
nx-lg
ve-GW
start-nx
GW-start
GW-nx
pt-SM
sx-GW
lg-end
nx-SM
lg-SM
pt-nx
end-ve
ve-SM
TG-uq
end-SM
SM-uq`;

// manages relationships between first and second
function manageRelation(first, second) {
    if (first == "end" || second == "start") return;
    if (!newRelationships[first]) newRelationships[first] = [];
    if (!newRelationships[first].includes(second)) newRelationships[first].push(second);
}

function determinePaths(path) {
    next = relationships[path[path.length - 1]];

    next.forEach(set => {
        let copy = JSON.parse(JSON.stringify(path));
        if (copy.includes(set) && set.toLowerCase() == set) return;
        copy.push(set);
        if (set == "end") return paths.push(copy);
        determinePaths(copy);
    });
}

// formatting input into "relationships" between paths
let relationships = input.split("\n");
const newRelationships = {};
relationships.forEach(relation => {
    let data = relation.split("-");
    manageRelation(data[0], data[1]);
    manageRelation(data[1], data[0]);
});
relationships = newRelationships;
const paths = []; // array of path arrays
determinePaths(["start"]);
console.log(paths.length);