export function NotBeEmpty(key: string) {
  return `${key} must not be empty.`
}

export function LassThan(key: string, minimum: number | 0) {
  return `${key} must not have lass than ${minimum} ${minimum === 0 || minimum === 1 ? 'character' : 'characters'}.`
}

export function MoreThan(key: string, maximum: number | 0) {
  return `${key} must not have more than ${maximum} characters.`
}
