import data from "../data/stormDoor.json"

const HIGH_COLOURS = [
  "Almond", "Brown", "Sandstone", "White"
]
const MID_COLOURS = [
  "Almond", "Black", "Brown", "Cranberry", "Green", "Sandstone", "White"
]

export const getViewList = state => {
  let list = JSON.parse(JSON.stringify(data.view))

  if (state.handleColour === "Black") {
    list.map(item => item.value === "Full View" ? item.disabled = true : null)
  }

  if ((state.colour && !HIGH_COLOURS.includes(state.colour)) || state.features.includes("Built-in Keyed Lock") || ["None", "Seasonal"].includes(state.ventilation)) {
    list.map(item => item.value === "High View" ? item.disabled = true : null)
  }

  if ((state.colour && !MID_COLOURS.includes(state.colour)) || state.features.includes("Pet Door") || ["None", "Seasonal"].includes(state.ventilation)) {
    list.map(item => item.value === "Mid View" ? item.disabled = true : null)
  }

  return list
}

export const getVentilationList = state => {
  let list = JSON.parse(JSON.stringify(data.ventilation))

  if (["Colour Matched", "Black"].includes(state.handleColour) || ["Mid View", "High View"].includes(state.view) || state.features.includes("Retractable Screen")) {
    list.map(item => item.value === "None" ? item.disabled = true : null)
  }

  if (["Pebblestone", "Woodland"].includes(state.colour)) {
    list.map(item => item.value === "On Demand" ? item.disabled = true : null)
  }

  if (state.features.includes("Pet Door") || ["Pebblestone", "Woodland", "Graphite"].includes(state.colour) || ["Mid View", "High View"].includes(state.view) || state.handleColour === "Black" || state.features.includes("Retractable Screen")) {
    list.map(item => item.value === "Seasonal" ? item.disabled = true : null)
  }

  return list
}

export const getColourList = state => {
  const GROUP1 = ["Woodland", "White Linen", "Pebblestone"]
  const GROUP2 = ["Graphite"]
  const GROUP3 = ["Black", "Cranberry", "Green"]
  const GROUP4 = ["Almond", "Sandstone"]

  let list = JSON.parse(JSON.stringify(data.colour))

  if (["Black", "Colour Matched"].includes(state.handleColour) || ["High View", "Mid View"].includes(state.view) || ["Seasonal", "On Demand"].includes(state.ventilation) || state.features.includes("Built-in Keyed Lock") || state.features.includes("Retractable Screen")) {
    list.map(item => GROUP1.includes(item.value) ? item.disabled = true : null)
  }

  if (["Black", "Colour Matched"].includes(state.handleColour) || ["High View", "Mid View"].includes(state.view) || state.ventilation === "Seasonal" || state.features.includes("Built-in Keyed Lock")) {
    list.map(item => GROUP2.includes(item.value) ? item.disabled = true : null)
  }

  if (["Black", "Colour Matched"].includes(state.handleColour) || state.view === "High View") {
    list.map(item => GROUP3.includes(item.value) ? item.disabled = true : null)
  }

  if (state.handleColour === "Black") {
    list.map(item => GROUP4.includes(item.value) ? item.disabled = true : null)
  }

  return list
}

export const getHandleColourList = state => {
  const GROUP1 = ["Black"]
  const GROUP2 = ["Colour Matched"]
  const GROUP3 = ["Antique Brass", "Brown", "Matte Black", "Sandstone", "White"]

  let list = JSON.parse(JSON.stringify(data.handleColour))

  if (["Sandstone", "Almond", "Green", "Black", "Graphite", "Pebblestone", "Woodland", "Cranberry"].includes(state.colour) || state.view === "Full View" || ["Seasonal", "None"].includes(state.ventilation) || state.features.includes("Pet Door") || state.features.includes("Retractable Screen") || state.features.includes("Built-in Keyed Lock")) {
    list.map(item => GROUP1.includes(item.value) ? item.disabled = true : null)
  }

  if (["None"].includes(state.ventilation) || ["Green", "Black", "Graphite", "Pebblestone", "Woodland", "Cranberry"].includes(state.colour)) {
    list.map(item => GROUP2.includes(item.value) ? item.disabled = true : null)
  }

  if(state.features.includes("Built-in Keyed Lock")){
    list.map(item => GROUP3.includes(item.value) ? item.disabled = true : null)
  }

  return list
}

export const getFeaturesList = state => {
  let list = JSON.parse(JSON.stringify(data.features))

  if (state.handleColour === "Black" || state.view === "Mid View" || state.ventilation === "Seasonal") {
    list.map(item => item.value === "Pet Door" ? item.disabled = true : null)
  }

  if (state.handleColour === "Black" || ["None", "Seasonal"].includes(state.ventilation) || ["Pebblestone", "Woodland"].includes(state.colour)) {
    list.map(item => item.value === "Retractable Screen" ? item.disabled = true : null)
  }

  if (["Black", "Antique Brass", "Brown", "Matte Black", "Sandstone", "White"].includes(state.handleColour) || state.view === "High View" || ["Pebblestone", "Woodland", "Graphite"].includes(state.colour)) {
    list.map(item => item.value === "Built-in Keyed Lock" ? item.disabled = true : null)
  }

  return list
}
