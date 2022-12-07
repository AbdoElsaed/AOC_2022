import { readFileSync } from "node:fs";

const data = readFileSync("input.txt", "utf-8").split("\n");

// part 1

function isFullyContained(pairs) {
  const pairsArr = pairs.split(",");
  const [p1, p2] = pairsArr[0].split("-").map(Number);
  const [r1, r2] = pairsArr[1].split("-").map(Number);
  return (p1 <= r1 && p2 >= r2) || (r1 <= p1 && r2 >= p2);
}

function part1() {
  const filteredPairs = data.filter((d) => isFullyContained(d));
  return filteredPairs.length;
}

// part 2

function isOverlapped(pairs) {
  const pairsArr = pairs.split(",");
  const [p1, p2] = pairsArr[0].split("-").map(Number);
  const [r1, r2] = pairsArr[1].split("-").map(Number);
  return p1 <= r2 && r1 <= p2;
}

function part2() {
  const overlappedPairs = data.filter((d) => isOverlapped(d));
  return overlappedPairs.length;
}

console.log(part1());
console.log(part2());
