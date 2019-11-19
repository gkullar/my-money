export const toDateTime = (value: string): string =>
  new Date(value).toLocaleString();
