export class TimeDelay {
  cancel() {
    if (typeof this.timeout === 'number') this.timeout = window.clearTimeout(this.timeout);
  }

  set(callback, millisecond) {
    this.cancel();
    this.timeout = window.setTimeout(callback, millisecond);
  }
}
const timeDelay = () => new TimeDelay();
export default timeDelay;
