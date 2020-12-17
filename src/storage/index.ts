interface Config {
  type: 'local' | 'session',
  prefix?:string;
}

class LocalStorageUtil {

  private prefix = '!';
  private storageSource = {local: window.localStorage, session: window.sessionStorage};
  private storage: Storage;
  
  constructor(config: Config){
  
    this.storage = storageSource[config.type];
    this.prefix =  config?.prefix || this.prefix;
  
  }

  protected generateName(key: string) {
    return this.prefix + key;
  }

  protected encode(data: any) {
    return JSON.stringify({ data });
  }

  protected decode(encode: string) {
    const decoded = JSON.parse(encode);
    if (decoded.data) {
      return decoded.data;
    }
    throw new RangeError(`Not found property 'data' in ${encode}`);
  }


  static containsItem(key: string) {
    return getItem(key) !== null;
  }

  static getItem(key: string) {
    const keyName = generateName(key);
    const data = this.storage.getItem(keyName);
    if (!data) {
      return null;
    }
    return decode(data);
  }

  static setItem(key: string, value: any) {
    const data = encode(value);
    const keyName = generateName(key);
    return this.storage.setItem(keyName, data);
  }

  removeItem(key: string) {
    const keyName = generateName(key);
    return this.storage.removeItem(keyName);
  }
}


const storage = (config: Config) => new LocalStorage(config);

export default storage;
