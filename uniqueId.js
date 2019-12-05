/**
 * Criar um ID único
 * @param {string|number} prefix 
 * @param {int} length
 * @param {boolean} randomlyUC  randomly UpperCase
 * @return {string}
 */
const uniqueId = (prefix = '', length = 0, randomlyUC=true) => {
    let g = Math.random().toString(32)
    length = length || g.length - 1
    if (length > 10) g += Math.random().toString(16).substr(2) //caso length for maior que 10

    const out = prefix + (g.substr(2, length))
    if(randomlyUC)
        return out.split('').map(n=>{
            const does = Math.round(Math.random())
            return does ? n.toUpperCase() : n
        }).join('')
    else return out
}


// console.log(uniqueId()) //return string random de max.12 (lowercase + uppercaseRandomly)
// console.log(uniqueId('',0,false)) //return string random de max.12 (lowercase)
// console.log(uniqueId('--')) //return string random de max.12 (lowercase) prefix '--'