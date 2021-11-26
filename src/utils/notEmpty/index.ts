// ARRAY.filter(notEmpty).map(normalize)
export function notEmpty<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  return value !== null && value !== undefined;
}
