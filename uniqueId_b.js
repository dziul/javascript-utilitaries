
const uniqueIdSimple = () => Math.random().toString(36).slice(2);

const uniqueId = (strictLevel=1)=>{
    const arrayUniqueId = [];
    do arrayUniqueId.push(uniqueIdSimple());
    while(strictLevel > arrayUniqueId.length);
    return arrayUniqueId.map(value=> value.slice(2)).join('');
};

const charRandomLowerOrUpperCase = (chars) => chars.split('').map(char=>Math.round(Math.random()) ? char.toLowerCase() : char.toUpperCase()).join('');

const uniqueIdUntilProvider = (maxChar=6, namespace='', randomCharFormat=false) => {
    let valueId = '';
    do valueId += uniqueIdSimple();
    while (maxChar > valueId.length);
    valueId = valueId.substr(0,maxChar); //or slice?
    return namespace + (!randomCharFormat ?  valueId : charRandomLowerOrUpperCase(valueId));
};

export const uniqueIdUntil = (maxChar=6, namespace='') => uniqueIdUntilProvider(maxChar,namespace);
export const uniqueIdStrictUntil = (maxChar=6, namespace='') => uniqueIdUntilProvider(maxChar,namespace,true);

export const hash = (strictLevel=6, splitInto=5, separator='-') => {
    const valueHash =   charRandomLowerOrUpperCase(uniqueId(strictLevel))
                        .split('')
                        .map((char,index)=> index&&index%splitInto===0 ? separator+char : char)
                        .join('');
    
    return valueHash.split(separator)
                    .filter(chars=> chars.length===splitInto)
                    .join(separator);
};

export default uniqueId;