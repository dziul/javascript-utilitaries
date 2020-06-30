declare const searchFilter: <T extends SearchFilterData>(
  data: T[],
  needle: string,
  target?: string | undefined
) => T[];
declare type SearchFilterData = {
  toString(): string;
};
export default searchFilter;
