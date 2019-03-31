export default function dairyFileName (date) {
  const today = new Date(date)
  if (today.getDay() !== 1) today.setDate(today.getDate() - today.getDay() + 1)
  const howWeek = Math.floor((today.getDate() - today.getDay() + 12) / 7)
  const fileName =
    today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + howWeek + '.csv'
  return fileName
}
