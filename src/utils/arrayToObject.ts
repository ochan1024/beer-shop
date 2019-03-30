export default function arrayToObject<T extends { id: number }>(arr: T[]) {
  return arr.reduce(
    (acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    },
    {} as { [key: number]: T }
  );
}
