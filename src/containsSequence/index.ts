const numericList = (numbers: string | number) => numbers.toString().split('').map(Number);

const containsSequence = (entry: string | number, limitAllowed = 2, shift = 1) => {
    const max = limitAllowed;
    let contains = false;
    let count = 0;

    if (!entry) {
      return false;
    }

    const numericList = numericList(entry);

    numericList.reduce((prev, current) => {
      if (prev + shift === current || prev - shift === current) {
        count += 1;
      } else {
        count = 0;
      }
      if (count === max) {
        contains = true;
      }
      return current;
    });

    return contains;
  }
  
 export default containsSequence;
