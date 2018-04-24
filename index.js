function theBeatlesPlay(musicianArray, instrumentArray) {
  let resultArray = []
  for (let i = 0; i < musicianArray.length; i++) {
    let resultString = `${musicianArray[i]} plays ${instrumentArray[i]}`
    resultArray.push(resultString)
  }
  return resultArray
}