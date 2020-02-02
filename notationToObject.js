const stringToArrayBySeparator = (needle, separator) => needle.split(separator).filter(value=>value.length);

const _notationToObjectProvider = (needle, value, obj={}, separator='.', mergeValue=true) => {
    const parts = stringToArrayBySeparator(needle, separator);
    let partLast = parts.pop(),
        objMule = obj,
        part;
    while ((part = parts.shift())) {
        if (!(objMule[part] instanceof Object)) objMule[part] = {};
        objMule = objMule[part];
    };

    if(mergeValue &&
        objMule.hasOwnProperty(partLast)) {
            
        if(objMule[partLast] instanceof Array) objMule[partLast].push(value);
        else if(objMule[partLast] instanceof Object
                && value instanceof Object) {
                    objMule[partLast] = Object.keys(value).reduce((accumulator,current)=>
                    _notationToObjectProvider(current, value[current], accumulator), objMule[partLast]);
                }
        else objMule[partLast] = [objMule[partLast], value];
    } else objMule[partLast] = value;
    return obj;
};


export const generateSlashNotationToObject = (string,value,obj={}) => _notationToObjectProvider(string,value,obj,"/");