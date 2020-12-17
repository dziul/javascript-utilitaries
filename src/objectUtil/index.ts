const isEquals = (...objs: {[k:string]:any}[]) => {
    const reference = JSON.stringify(objs.shift());
    return objs.every(obj => {
      return reference === JSON.stringify(obj);
    });
  }

const isObject = (needle: any) => needle !== null && typeof needle === 'object';

const values = <T extends { [key: string]: any }>(obj: T): ValueOf<T>[] => Object.values(obj);

const keys = <T extends { [key: string]: any }>(obj: T): (keyof T)[] => Object.keys(obj);
