export default function omit(obj: { [key: string]: any }, key: string) {
  const { [key]: value, ...rest } = obj;
  return rest;
}
