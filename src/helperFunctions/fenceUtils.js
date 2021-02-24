export const toggleSectionHeading = (section, state) => {
  let showHeading = false

  const POST_LIST = [
    state.postSize,
    state.postSpacing,
    state.postOptions
  ]

  const PICKET_LIST = [
    state.picketType,
    state.picketDirection,
    state.picketSpacing
  ]

  const RAIL_LIST = [
    state.railQty
  ]

  const OPTION_LIST = [
    state.topCap,
  ]

  if (section === "post"){
    showHeading = POST_LIST.some(i => i !== '')
  } else if (section === "picket"){
    showHeading = PICKET_LIST.some(i => i !== '')
  } else if (section === "rail"){
    showHeading = RAIL_LIST.some(i => i !== '')
  } else if (section === "topCap"){
    showHeading = OPTION_LIST.some(i => i !== '')
  }

  return showHeading
}
