export declare const logMeta: () => void;
export declare const createMeta: (config: SetMetaProps) => void;
export declare const findMetaCreated: () => void;
export declare const setMeta: (config: SetMetaProps) => void;
declare type SetMetaProps = {
  attrName: 'name' | 'property';
  attrValue: string;
  content: string;
};
export {};
