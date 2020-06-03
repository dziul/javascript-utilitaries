export const pad2 = (number) => (number < 10 ? '0' : '') + number;
const leftFillNumber = (number, fillLength = 2) => number.toString().padStart(fillLength, '0');
export default leftFillNumber;
