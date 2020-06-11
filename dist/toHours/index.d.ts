declare type MinutesToHours = {
  hours: number;
  minutes: number;
};
declare type SecondsToHours = MinutesToHours & {
  seconds: number;
};
export declare const minutesToHours: (time: number) => MinutesToHours;
export declare const secondsToHours: (time: number) => SecondsToHours;
export declare const formatterMinutesToHours: (time: number, pattern?: string) => string;
export declare const formatterSecondsToHours: (time: number, pattern?: string) => string;
export {};
