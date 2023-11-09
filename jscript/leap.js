export const isLeap = (leapYear) => {
  let leap = false;

  if (leapYear % 4 == 0) {
    leap = true;
    if (leapYear % 100 == 0) {
      leap = false;
    } 
     if (leapYear % 100 == 0 && leapYear % 400 == 0) {
      leap = true;
    }
     
  }
  else{
    leap = false;
  }

  return leap;
};
