export function dayRate(ratePerHour) {
  const dayR = ratePerHour * 8;
  return dayR;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const avail = budget / ratePerHour;
  return Math.floor(avail);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const months = numDays / 22;
  let fullMonths = Math.floor(months);
  let fullDays = numDays%22;
  
  if (discount > 0) {
    if (fullDays > 0) {
      const newRate = ratePerHour * (1 - discount);
      const cost = newRate * fullMonths * 22 * 8 ;
      const fullCost = (fullDays * 8 *ratePerHour)+cost;
      return Math.ceil(fullCost);
    } else {
      const newRate = ratePerHour * (1 - discount);
      const cost = newRate * 8 * numDays;
      return Math.ceil(cost);
    }
  } 
  else {
    const noDisc = ratePerHour * 8 * numDays;
    return noDisc;
  }
}
