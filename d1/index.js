import { readFileSync } from "node:fs";

const elves = readFileSync("input.txt", "utf-8").trim().split("\n\n");
function part1() {
  const calories = elves.map((elf) => {
    return elf
      .split("\n")
      .map(Number)
      .reduce((prev, curr) => prev + curr, 0);
  });
  const part1Result = Math.max(...calories);
  console.log({ part1Result });
}

function part2() {
  const calories = elves.map((elf) =>
    elf
      .split("\n")
      .map(Number)
      .reduce((prev, curr) => prev + curr, 0)
  );

  calories.sort((a, b) => b - a);
  const part2Result = calories.slice(0, 3).reduce((prev, curr) => prev + curr);
  console.log({ part2Result });
}

part1();
part2();
