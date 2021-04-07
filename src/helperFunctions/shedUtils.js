import data from "../data/shed.json"

export const getWidthList = length => {
  let list = data.widthThree

  if(length === "12" || length === "14" || length === "16") {
    list = data.widthTwo
  } else if(length === "20"){
    list = data.widthOne
  }

  return list
}

export const getLengthList = width => {
  let list = data.lengthThree

  if (width ===  "6"){
    list = data.lengthOne
  } else if(width === "8" || width === "10") {
    list = data.lengthTwo
  }

  return list
}
