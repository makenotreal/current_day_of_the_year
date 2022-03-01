// Возвращает текущий день в году/Returns the current day of the year
function getDayOfYear() {
  const now = new Date()
  const beginOfYear = new Date(now.getFullYear(), 0, 1)
  const millisecondsElapsedSinceYearBegan = now.getTime() - beginOfYear.getTime()
  const millisecondsInOneDay = 1000 * 60 * 60 * 24
  return Math.ceil(millisecondsElapsedSinceYearBegan / millisecondsInOneDay)
}

console.log(getDayOfYear())