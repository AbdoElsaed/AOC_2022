import { readFileSync } from "node:fs";
const line = readFileSync("input.txt", "utf-8").trim();

function part1() {
  let output = "";
  for (let i = 0; i < line.length; i++) {
    if (output.length < 4) {
      if (output.includes(line[i])) {
        output = output.substring(output.indexOf(line[i]) + 1);
      }
      output += line[i];
    } else {
      return console.log(line.indexOf(output) + 4);
    }
  }
}

function part2() {
  let output = "";
  for (let i = 0; i < line.length; i++) {
    if (output.length < 14) {
      if (output.includes(line[i])) {
        output = output.substring(output.indexOf(line[i]) + 1);
      }
      output += line[i];
    } else {
      return console.log(line.indexOf(output) + 14);
    }
  }
}

part1();
part2();
