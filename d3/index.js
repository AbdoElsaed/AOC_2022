import { readFileSync } from "node:fs";

const data = readFileSync("input.txt", "utf-8").split("\n");
const str = "abcdefghijklmnopqrstuvwxyz";

const letters = str.concat(str.toUpperCase());
let i = 1;
const priorities = letters
  .split("")
  .reduce((prev, curr) => ({ ...prev, [curr]: { priority: i++ } }), {});

// part 1

function getCommonItems(c1, c2) {
  let result = "";
  for (let j in c1) {
    if (c2.includes(c1[j]) && !result.includes(c1[j])) {
      result += c1[j];
    }
  }
  return result;
}

function getPriorityValue(rucksack) {
  const mid = rucksack.length / 2;
  const compartment1 = rucksack.slice(0, mid);
  const compartment2 = rucksack.slice(mid);
  const commonItems = getCommonItems(compartment1, compartment2);
  const res = commonItems
    .split("")
    .reduce((prev, curr) => prev + priorities[curr].priority, 0);
  return res;
}

function part1() {
  const part1Result = data.reduce(
    (prev, curr) => prev + getPriorityValue(curr),
    0
  );
  console.log({ part1Result });
}

// part2

function getElvesGroups() {
  const elves = [...data];
  let groups = [];

  while (!!elves.length) {
    groups = [...groups, [...elves.splice(0, 3)]];
  }

  return groups;
}

function getGroupBadgePriority(group) {
  const elf1 = group[0];
  const elf2 = group[1];
  const elf3 = group[2];

  for (let j in elf1) {
    if (elf2.includes(elf1[j]) && elf3.includes(elf1[j])) {
      return priorities[elf1[j]].priority;
    }
  }
}

function part2() {
  const groups = getElvesGroups();
  const part2Result = groups.reduce(
    (prev, curr) => prev + getGroupBadgePriority(curr),
    0
  );

  console.log({ part2Result });
}

part1();
part2();
