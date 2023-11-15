// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
      return 1.5;
      break;
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedge = wedgesNeeded;

  let limeCount = 0;
  let count = 0;
  // let limesThread= limes;

  while (wedge >= 0) {
    let size = limes[count];
    switch (size) {
      case "small":
        wedge = wedge - 6;
        limeCount++;
        break;
      case "medium":
        wedge = wedge - 8;
        limeCount++;
        break;
      case "large":
        wedge = wedge - 10;
        limeCount++;
        break;
    }

    console.log(wedge);
    console.log(limeCount);
    count++;
  }

  return limeCount;
}

/*
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = timeLeft;
  let count = 0;
  let returnArray = orders;
  let len = orders.length;
  while (time > 0) {
    let juice = timeToMixJuice(returnArray[0]);

    time = time - juice;

    returnArray.shift();
    console.log(juice);
  }
  console.log(returnArray);
  return returnArray;
}
