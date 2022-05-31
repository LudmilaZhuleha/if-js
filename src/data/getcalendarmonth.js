//Create a function getCalendarMonth, which receives parameters:
//daysInMonth =30,
//daysInWeek =7,
//weeksInMonth=5,
//and any day in week from 0 to 6 to start the month from.
//The function should return the array of arrays illustrating calendar month.

const getCalendarMonth = (daysInMonth, daysInWeek, dayOfWeek) => {
  if (
    typeof daysInMonth !== 'number' ||
    typeof daysInWeek !== 'number' ||
    typeof dayOfWeek !== 'number' ||
    dayOfWeek > 7
  )
    return 'Data input failure';
  const arr = [];
  let counter = daysInMonth - dayOfWeek + 1;
  for (let i = 0; i < 5; i++) {
    arr[i] = [];
    for (let j = 0; j < daysInWeek; j++) {
      if (counter === 31) counter = 1;
      arr[i][j] = 1;
      arr[i][j] = counter++;
    }
  }
  return arr;
};

export { getCalendarMonth };
