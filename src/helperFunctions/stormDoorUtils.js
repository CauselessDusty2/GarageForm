import data from "../data/stormDoor.json"

const HIGH_COLOURS = [
  "Almond", "Brown", "Sandstone", "White"
]

export const getViewList = state => {
  let list = data.view

  if (state.ventilation === "None" || state.ventilation === "Seasonal") {
    list = data.viewFull
  } else if (state.colour && !HIGH_COLOURS.includes(state.colour) || state.features.includes("Built-in Keyed Lock")) {
    list = data.viewExcludeHigh
  }

  return list
}

export const getVentilationList = state => {
  let list = null

  if (!state.view || state.view === "Full View"){
    list = data.ventilation
  } else {
    list = data.ventilationHighView
  }

  return list
}

export const getColourList = state => {
  let list = data.colour

  if (state.view === "High View"){
    list = data.colourHighView
  }

  return list
}

export const getHandleColourList = state => {
  let list = data.handleColour



  return list
}

export const getFeaturesList = state => {
  let list = data.features

  if (state.view === "High View"){
    list = data.featuresHigh
  }

  return list
}
