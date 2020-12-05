const getPassportID = (boardingPass) => {
  let rowMin = 0;
  let rowMax = 127;

  let columnMin = 0;
  let columnMax = 7;

  let rowResult = 0;
  let columnResult = 0;

  for (let i = 0; i <= 6; i++) {
    const partitioning = boardingPass[i];
    const range = rowMax - rowMin;

    if (i == 6) {
      rowResult = partitioning === "F" ? rowMin : rowMax;
      break;
    }

    if (partitioning === "F") {
      rowMax = Math.floor(rowMax - range / 2);
    } else if (partitioning === "B") {
      rowMin = Math.ceil(rowMax - range / 2);
    }
  }

  for (let i = 7; i < boardingPass.length; i++) {
    const partitioning = boardingPass[i];
    const range = columnMax - columnMin;

    if (i == boardingPass.length - 1) {
      columnResult = partitioning === "L" ? columnMin : columnMax;
      break;
    }

    if (partitioning === "L") {
      columnMax = Math.floor(columnMax - range / 2);
    } else if (partitioning === "R") {
      columnMin = Math.ceil(columnMax - range / 2);
    }
  }

  return rowResult * 8 + columnResult;
};

module.exports = getPassportID;
