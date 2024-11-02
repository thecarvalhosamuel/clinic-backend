export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export function permissionfy(text: string): string {
  return text
    .toString()
    .toUpperCase()
    .trim()
    .replace(/\s+/g, '_') // Substitui espaços em branco por underscore
    .replace(/[^\w\_]+/g, '') // Remove caracteres não alfanuméricos exceto underscore
    .replace(/\_\_+/g, '_') // Substitui múltiplos underscore por um único hífen
    .substring(0, 100) // Limita o slug a 100 caracteres (opcional)
}

export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

