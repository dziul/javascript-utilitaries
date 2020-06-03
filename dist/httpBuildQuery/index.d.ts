interface GenericObject extends Object {
  [key: string]: any;
}
export declare const httpQueryObjectToString: (parameters: GenericObject, encode?: boolean) => string;
export declare const httpQueryToObject: (query: string) => GenericObject;
export {};
