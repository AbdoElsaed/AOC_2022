import { readFileSync } from "node:fs";
const data = readFileSync("input.txt", "utf-8").split("\n");

const points = {
  X: 1,
  Y: 2,
  Z: 3,
};

const getScore = (opponentMove, counterMove) => {
  const move = opponentMove + counterMove;
  if (move === "AX" || move === "BY" || move === "CZ") {
    return 3 + points[counterMove];
  }
  if (move === "AY" || move === "BZ" || move === "CX") {
    return 6 + points[counterMove];
  }
  return 0 + points[counterMove];
};

const part1 = () => {
  const games = data.map((d) => d.split(" "));
  const part1Result = games.reduce(
    (acc, game) => acc + getScore(game[0], game[1]),
    0
  );
  console.log({ part1Result });
};

// part 2

const scores = {
  A: 1,
  B: 2,
  C: 3,
};
const WIN_SCORE = 6;
const DRAW_SCORE = 3;

const beats = {
  A: "C",
  B: "A",
  C: "B",
};

const beatenBy = {
  C: "A",
  A: "B",
  B: "C",
};

const part2 = () => {
  const part2Result = data.reduce((acc, round) => {
    const otherMove = round.charAt(0);
    const expectedResult = round.charAt(2);

    let moveScore;
    let moveToPlay;

    switch (expectedResult) {
      case "X":
        moveToPlay = beats[otherMove];
        moveScore = scores[moveToPlay];
        return acc + moveScore;
      case "Y":
        moveScore = scores[otherMove];
        return acc + DRAW_SCORE + moveScore;
      case "Z":
        moveToPlay = beatenBy[otherMove];
        moveScore = scores[moveToPlay];
        return acc + WIN_SCORE + moveScore;
      default:
        return acc;
    }
  }, 0);

  console.log({ part2Result });
};

part1();
part2();
