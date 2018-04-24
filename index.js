function theBeatlesPlay(musicianArray, instrumentArray) {
  let resultArray = []
  for (i = 0; i < musicianArray.length(); i++) {
    resultString = `${musicianArray[i]} plays ${instrumentArray[i]}`
    resultArray.push(resultString)
  }
  return resultArray
}