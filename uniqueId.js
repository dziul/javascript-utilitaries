/**
 *
 *
 * @param {number} [maxChar=6]
 * @param {string} [namespace='']
 * @returns Ex: [maxChar=6][namespace='__']  => __Yq3wE4
 */
const uniqueId = (maxChar=6, namespace='') => {
    const base = '0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
    const baseLength = base.length-1;
    let result='';
    while(maxChar){
        let index = Math.round(Math.random()*baseLength);
        result += base[index];
        maxChar--;
    }
    return namespace+result;
};

/**
 *
 *
 * @param {number} [strictLevel=6]
 * @param {number} [splitInto=5]
 * @param {string} [separator='-']
 * @returns    Ex:  [strictLevel=6][splitInto=5][separator='-'] => xxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxxx
 */
export const hash = (strictLevel=6, splitInto=5, separator='-') => {
    const result = [];
    while(splitInto){
        result.push(uniqueId(strictLevel));
        splitInto--;
    }
    return result.join(separator);
};

export default uniqueId;