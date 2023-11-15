// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
   let birdTotal = 0;
    for(let count=0;count<birdsPerDay.length;count++){
     birdTotal=+birdsPerDay[count];
   }
   return(birdTotal);
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let count = 7*week;
    let weekTotal=0;
    let newWeek= birdsPerDay.slice(count-7, count);
    for(let counter =0; counter<newWeek.length; counter++){
      weekTotal=weekTotal+newWeek[counter];
    }
    return (weekTotal);
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for( let count=0; count< birdsPerDay.length; count++){
      birdsPerDay[count]=birdsPerDay[count]+1;
    
count++;
    }
    return (birdsPerDay);
  }
  