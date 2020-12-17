export const getMetadataFromRepetitions = (message:string) : {[k:string]: number} => {
  return [...message].reduce((accumulator, value)=>{
    accumulator[value] =  accumulator[value] ? ++accumulator[value]: 1
    return accumulator;
  }, {})
  
}

export const containsMoreRepetitionThanAllowed = (message:string, limitAllowed = 2): boolean => {
  return Object.values(getMetadataFromRepetitions(message)).some((value)=>value >limitAllowed);
}
