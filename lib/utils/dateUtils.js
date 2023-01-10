export const currentDayName = () => {
  const date = new Date()
  return date.toLocaleString('default', { weekday: 'long' })
}

export const currentYear = () => {
  const date = new Date()
  return String(date.getFullYear())
}
