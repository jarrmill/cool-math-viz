const getQuality = (seconds) => {
  // 5 - perfect response
  // 4 - correct response after a hesitation
  // 3 - correct response recalled with serious difficulty
  // 2 - incorrect response; where the correct one seemed easy to recall
  // 1 - incorrect response; the correct one remembered
  // 0 - complete blackout.

  if (seconds <= 1) {
    return 5;
  }
  else if (seconds <= 2) {
    return 4;
  }
  else if (seconds <= 4) {
    return 3;
  }
  else if (seconds <=7) {
    return 2;
  }
  else if (seconds <=10) {
    return 1;
  } else {
    return 0;
  }
};

module.exports = { getQuality };
