export default function dairyFileName (date) {
  var today = date
  var howWeek = Math.floor((today.getDate() - today.getDay() + 12) / 7)
  var fileName =
    today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + howWeek + '.csv'
  return fileName
}
