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

  // if(name== "Pure Strawberry Joy"){
  //     return .5;
  //   }else if(name=='Energizer' ||name== 'Green Garden'){
  //     return 1.5;
  //   }else if(name=='Tropical Island'){
  //     return 3;
  //   }else if(name=='All or Nothing'){
  //     return 5;
  //   }else{
  //     return 2.5;
  //   }
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
  let len = limes.length;

  while (wedge >= 0) {
    switch (limes[count]) {
      case "small":
        wedge -= 6;
        limeCount++;
        break;
      case "medium":
        wedge -= 8;
        limeCount++;
        break;
      case "large":
        wedge -= 0;
        limeCount++;
        break;
    }
    count++;
    console.log(wedge);
  }
  return limeCount;
}

/**
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
  while (0 <= time) {
    let juice = timeToMixJuice(returnArray[count]);

    time = time - juice;

    returnArray.shift();

    count++;
    console.log(time);
  }
  return returnArray;
}
