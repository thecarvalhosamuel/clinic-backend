export function generateString(number: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < number; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export function generateNumber(number: number): Number {
  const characters = '0123456789'
  let result = ''
  for (let i = 0; i < number; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return Number(result)
}

export function generateBoolean(): boolean {
  return Math.random() < 0.5
}
