interface GenericObject extends Object {
  [key: string]: any;
}
export declare const slashNotationToObject: (
  slashNotation: string,
  value: any,
  targetObject?: GenericObject
) => GenericObject | null;
export declare const dotNotationToObject: (
  notation: string,
  value: any,
  targetObject?: GenericObject
) => GenericObject | null;
export declare const getValueByDotNotation: (
  objectTarget: GenericObject,
  notation: string,
  separator?: string
) => any;
export {};
