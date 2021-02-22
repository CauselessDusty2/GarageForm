import data from "../data/shed.json"

export const getWidthList = length => {
  let list = null

  if (Object.keys(data.lengthOne).some(key => data.lengthOne[key].value === length) || length === '') {
    list = data.widthThree
  } else if (Object.keys(data.lengthTwo).some(key => data.lengthTwo[key].value === length)) {
    list = data.widthTwo
  } else if (Object.keys(data.lengthThree).some(key => data.lengthThree[key].value === length)) {
    list = data.widthOne
  }

  return list
}

export const getLengthList = width => {
  let list = null

  if (Object.keys(data.widthOne).some(key => data.widthOne[key].value === width) || width === '') {
    list = data.lengthThree
  } else if (Object.keys(data.widthTwo).some(key => data.widthTwo[key].value === width)) {
    list = data.lengthTwo
  } else if (Object.keys(data.widthThree).some(key => data.widthThree[key].value === width)) {
    list = data.lengthOne
  }

  return list
}
