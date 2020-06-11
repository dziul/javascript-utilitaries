// ref https://jwt.io/

const jwtParse = async <P = object, H = object>(jwt: string) => {
  return new Promise<JwtParseResponse<P, H>>((resolve, reject) => {
    const jwtDissipated = jwt.trim().split('.');
    if (jwtDissipated.length !== 3) reject(new Error('Not a valid jwt token. Look https://jwt.io/'));
    const header = atob(jwtDissipated[0].replace(/bearer/i, '').trim());
    const payload = atob(jwtDissipated[1]);
    const regexTestJson = /^{.*?}$/;
    if (!regexTestJson.test(payload) || !regexTestJson.test(header))
      reject(new Error('Target is not a valid json'));
    resolve({
      header: JSON.parse(header),
      payload: JSON.parse(payload),
      signature: jwtDissipated[2],
    });
  });
};

export type JwtParseResponse<P, H> = {
  header: H;
  payload: P;
  signature: string;
};
export default jwtParse;
