export const toggleSectionHeading = (section, state) => {
  let showHeading = false

  const SIDING_LIST = [
    state.sidingType
  ]
  const GABLE_LIST = [
    state.gableSidingType
  ]
  const SKIRTING_LIST = [
    state.skirtingSidingType
  ]
  const TRIM_LIST = [
    state.trimColour
  ]

  if (section === "Siding"){
    showHeading = SIDING_LIST.some(i => i !== '')
  } else if (section === "Gable"){
    showHeading = GABLE_LIST.some(i => i !== '')
  } else if (section === "Skirting"){
    showHeading = SKIRTING_LIST.some(i => i !== '')
  } else if (section === "Trim"){
    showHeading = TRIM_LIST.some(i => i !== '')
  }

  return showHeading
}
