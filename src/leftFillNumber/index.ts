// [pad2 Formatar numero para dois digitos]
export const pad2 = (number: number) => (number < 10 ? '0' : '') + number;

const leftFillNumber = (number: number, fillLength = 2) => number.toString().padStart(fillLength, '0');

export default leftFillNumber;
