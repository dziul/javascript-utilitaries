declare const jwtParse: <P = object, H = object>(jwt: string) => Promise<JwtParseResponse<P, H>>;
export declare type JwtParseResponse<P, H> = {
  header: H;
  payload: P;
  signature: string;
};
export default jwtParse;
