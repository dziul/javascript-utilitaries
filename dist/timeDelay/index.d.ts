export declare class TimeDelay {
  protected timeout: number | void | undefined;
  cancel(): void;
  set(callback: CallableFunction, millisecond: number): void;
}
declare const timeDelay: () => TimeDelay;
export default timeDelay;
