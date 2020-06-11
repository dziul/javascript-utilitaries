export class TimeDelay {
  protected timeout: number | void | undefined;

  public cancel() {
    if (typeof this.timeout === 'number') this.timeout = window.clearTimeout(this.timeout);
  }

  public set(callback: CallableFunction, millisecond: number) {
    this.cancel();
    this.timeout = window.setTimeout(callback, millisecond);
  }
}

const timeDelay = () => new TimeDelay();

export default timeDelay;
