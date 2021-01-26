export const isEquals = (...objs: {[k:string]:any}[]) => {
    const reference = JSON.stringify(objs.shift());
    return objs.every(obj => {
      return reference === JSON.stringify(obj);
    });
  }

export const isObject = (needle: any) => needle !== null && typeof needle === 'object';

export const values = <T extends { [key: string]: any }>(obj: T): ValueOf<T>[] => Object.values(obj);

export const keys = <T extends { [key: string]: any }>(obj: T): (keyof T)[] => Object.keys(obj);

export const containsKeyInObject = (obj: {[k:string]:any}, ...keys: string[]) => keys.every(key => obj.hasOwnProperty(key));


type ValueOf<T> = T[keyof T];
