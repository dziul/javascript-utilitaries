/**
 * 
 *
 * @param {object} objParams
 * @returns {string}
 */
export const buildHttpQuery = (objParams:any, encode:boolean = true)=>{
    return Object.keys(objParams).map(key => {
        if(encode) return `${encodeURIComponent(key)}=${encodeURIComponent(objParams[key])}`;
        return `${key}=${objParams[key]}`;
    }).join('&');
};


/**
 * Converte http query string in object
 * @param {string} query   @examples "a=true&b=false&c=[1,2,4,88]"
 * @returns {object}
 */
export const httpQueryToObject = (query:string) => {
    return query.split('&').reduce((accumulator, valueCurrent)=>{
        const [key,value] = valueCurrent.split('=');
        accumulator[key] = value;
        return accumulator;
    }, {});
};
