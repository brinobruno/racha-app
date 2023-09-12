// Bronze: 64 or below
// Silver: 65 until 74
// Gold: 75 or above
const breakpoints = {
  orange: 0,
  yellow: 64,
  green: 74,
}

export function getColorBreakpoint(value: number): string {
  if (value <= breakpoints.yellow) {
    return '#dd680f'
  } else if (value <= breakpoints.green) {
    return '#e1bf00'
  } else {
    return '#17a607'
  }
}
