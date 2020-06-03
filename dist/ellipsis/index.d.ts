export declare const hasNeedEllipsis: (paragraph: string, maxCharacters: number) => boolean;
export declare const formatterEllipsis: (paragraph: string, maxCharacters: number, suffix?: string) => string;
declare const ellipsis: (paragraph: string, maxCharacters: number) => string;
export declare const reachedMaxWords: (paragraph: string, maxWords: number) => boolean;
export declare const wordEllipsis: (paragraph: string, maxWords: number, suffix?: string) => string;
export default ellipsis;
