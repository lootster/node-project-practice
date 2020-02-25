module.exports.stringsFormatter = path => {
  const characters = path.split("");

  const charCountStore = {
    "?": 0,
    l: 0,
    r: 0,
    u: 0,
    d: 0
  };

  characters.forEach(char => charCountStore[char]++);

  let countOfL = charCountStore["l"];
  let countOfR = charCountStore["r"];
  let countOfU = charCountStore["u"];
  let countOfD = charCountStore["d"];

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === "?") {
      if (isBeforeBottomGrid(countOfD, countOfU)) {
        characters[i] = "d";
        countOfD++;
      } 
      else if (isBeforeRightGrid(countOfR, countOfL)) {
        characters[i] = "r";
        countOfR++;
      } 
      else if (isBeyondBottomGrid(countOfD, countOfU)) {
        characters[i] = "u";
        countOfU++;
      } 
      else if (isBeyondRightGrid(countOfR, countOfL)) {
        characters[i] = "l";
        countOfL++;
      } 
      else if (isAtBottomGrid(countOfD, countOfU)) {
        characters[i] = "u";
        countOfU++;
      } 
      else if (isAtBottomGrid(countOfD, countOfU)) {
        characters[i] = "r";
        countOfR++;
      } 
      else if (isAtRightGrid(countOfR, countOfL)) {
        characters[i] = "l";
        countOfL++;
      } 
      else if (isAtRightGrid(countOfR, countOfL)) {
        characters[i] = "d";
        countOfR++;
      }
    }
  }
  const string = characters.join("");
  return string.length < 8 ? null : string;
};

const END_OF_GRID = 4;

function isBeforeBottomGrid(totalNumOfD, totalNumOfU) {
  return totalNumOfD - totalNumOfU < END_OF_GRID;
}

function isBeforeRightGrid(totalNumOfR, totalNumOfL) {
  return totalNumOfR - totalNumOfL < END_OF_GRID;
}

function isBeyondRightGrid(totalNumOfR, totalNumOfL) {
  return totalNumOfR - totalNumOfL > END_OF_GRID;
}

function isBeyondBottomGrid(totalNumOfD, totalNumOfU) {
  return totalNumOfD - totalNumOfU > END_OF_GRID;
}

function isAtBottomGrid(totalNumOfD, totalNumOfU) {
  return totalNumOfD - totalNumOfU === END_OF_GRID;
}

function isAtRightGrid(totalNumOfR, totalNumOfL) {
  return totalNumOfR - totalNumOfL === END_OF_GRID;
}
