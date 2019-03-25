export default function dairyFileName (date) {
  const today = date
  const howWeek = Math.floor((today.getDate() - today.getDay() + 12) / 7)
  const fileName =
    today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + howWeek + '.csv'
  return fileName
}
