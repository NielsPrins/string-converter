export function toCamelCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word: string, index: number) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

export function toPascalCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word: string) {
    return word.toUpperCase();
  }).replace(/\s+/g, '');
}

export function toSnakeCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word: string) {
    return word.toLowerCase();
  }).replace(/\s+/g, '_');
}

export function toKebabCase(str: string) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word: string) {
    return word.toLowerCase();
  }).replace(/\s+/g, '-');
}
