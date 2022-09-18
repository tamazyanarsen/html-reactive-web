export function notEmptyLine(line: string, index: number, array: string[]): boolean {
    return line.replaceAll(' ', '').length > 0;
}
