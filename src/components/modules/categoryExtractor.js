export default function (rowObj) {
  const categoryArray = []
  for (let i = 0; i < rowObj.length; i++) {
    const categoryPlace = categoryArray.indexOf(rowObj[i].category)
    if (categoryPlace === -1) {
      categoryArray.push(rowObj[i].category)
    }
  }
  return categoryArray
}
