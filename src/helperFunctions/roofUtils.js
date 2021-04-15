export const toggleSectionHeading = (section, state) => {
  let showHeading = false

  const SPECIFICATION_LIST = [
    state.sqft,
    state.overhang,
    state.roofPitch
  ]

  const ROOFING_LIST = [
    state.roofType,
    state.roofProfile,
    state.roofGauge,
    state.roofColour
  ]

  if (section === "spec"){
    showHeading = SPECIFICATION_LIST.some(i => i !== '')
  } else if (section === "roofing"){
    showHeading = ROOFING_LIST.some(i => i !== '')
  }

  return showHeading
}
