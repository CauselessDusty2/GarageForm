import data from "../data/deck.json"

export const getAttachmentList = support => {
  const padList = [
    "12\"x12\"x4\" Deck Pad",
    "12\"x12\"x4\" Deck Pad with Deck Jack",
    "18\"x18\"x4\" Footing Pad",
    "18\"x18\"x4\" Footing Pad with Deck Jack",
    "18\"x18\"x6\" Footing Pad",
    "18\"x18\"x6\" Footing Pad with Deck Jack"
    ]

  let attachmentList = data.attachment

  if (padList.includes(support)) {
    attachmentList = data.attachmentPad
  }

  return attachmentList
}

export const getSupportList = attachment => attachment === "Attached" ? data.supportAttached : data.supportFreestanding

export const getPostSizeList = (framingMaterial, beamPly) => {
  let list = []

  if (framingMaterial === "Cedar") {
      if (beamPly === "3-Ply" || beamPly === "4-Ply") {
        list = data.postSizeCedarLargeBeam
      } else {
        list = data.postSizeCedar
      }
  } else {
      if (beamPly === "3-Ply" || beamPly === "4-Ply") {
        list = data.postSizeBrownLargeBeam
      } else {
        list = data.postSizeBrown
      }
  }

  return list
}

export const getDeckingColourList = (deckingType, trexDeckingLine) => {
  let list = null

  if (deckingType === "Trex") {
      if (trexDeckingLine === "Transcend") {
        list = data.trexTranscendColours
      } else if (trexDeckingLine === "Select") {
        list = data.trexSelectColours
      } else if (trexDeckingLine === "Enhance") {
        list = data.trexEnhanceColours
      }
  } else if (deckingType === "MoistureShield") {
      list = data.MoistureShieldColours
  }

  return list
}

export const getPictureframeColourList = (deckingType, trexDeckingLine) => {
  let list = null

  if (deckingType === "Trex") {
      if (trexDeckingLine === "Transcend" || trexDeckingLine === "Enhance") {
        list = data.pictureframeTrexEnhanceTranscend
      } else if (trexDeckingLine === "Select") {
        list = data.trexSelectColours
      }
  } else if (deckingType === "MoistureShield") {
      list = data.MoistureShieldColours
  }

  return list
}

export const getFasciaSize = deckingType => {
  let list = null

  if (deckingType === "Brown Pressure Treated") {
    list = data.fasciaSizeBrown
  } else if (deckingType === "Cedar") {
    list = data.fasciaSizeCedar
  } else if (deckingType === "Trex") {
    list = data.fasciaSizeTrex
  } else if (deckingType === "MoistureShield") {
    list = data.fasciaSizeMoistureShield
  }

  return list
}

export const getBalusterList = railing => {
  let list
  switch (railing) {
    case "Brown Treated":
      list = data.brownBalust
      break;
    case "Cedar":
      list = data.cedarBalust
      break;
    case "Regal":
      list = data.regalConfig
      break;
    default:
      list = null
  }

  return list
}

export const getSkirtingList = (plankingType, line) => {
  let list = null

  if (plankingType === "MoistureShield") {
    list = data.skirtingMoistureshield
  } else if (plankingType === "Trex") {
    if (line === "Select") {
        list = data.skirtingTrexSelect
    } else if (line === "Transcend" || line === "Enhance") {
        list = data.skirtingTrexEnhanceTranscend
    }
  }

  return list
}

export const toggleSectionHeading = (section, state) => {
  let showHeading = false

  const FRAME_LIST = [
    state.attachment,
    state.height,
    state.support,
    state.framingMaterial,
    state.postSize,
    state.beamSize,
    state.beamPly,
    state.joistSize,
    state.joistSpacing,
  ]

  const DECKING_LIST = [
    state.deckingType,
  ]

  const RAILING_LIST = [
    state.railing
  ]
  const SKIRTING_LIST = [
    state.skirting
  ]
  const POST_LIST = [
    state.postSize
  ]
  const BEAM_LIST = [
    state.beamSize,
    state.beamPly
  ]
  const JOIST_LIST = [
    state.joistSize,
    state.joistSpacing
  ]
  const PICTUREFRAME_LIST = [
    state.pictureframe
  ]

  if (section === "Frame"){
    showHeading = FRAME_LIST.some(i => i !== '')
  } else if (section === "Decking"){
    showHeading = DECKING_LIST.some(i => i !== '')
  } else if (section === "Railing"){
    showHeading = RAILING_LIST.some(i => i !== '')
  } else if (section === "Skirting"){
    showHeading = SKIRTING_LIST.some(i => i !== '')
  } else if (section === "Post"){
    showHeading = POST_LIST.some(i => i !== '')
  } else if (section === "Beam"){
    showHeading = BEAM_LIST.some(i => i !== '')
  } else if (section === "Joist"){
    showHeading = JOIST_LIST.some(i => i !== '')
  } else if (section === "Pictureframe"){
    showHeading = PICTUREFRAME_LIST.some(i => i !== '')
  }

  return showHeading
}
