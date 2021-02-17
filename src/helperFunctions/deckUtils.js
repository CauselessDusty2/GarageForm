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

export const getFasciaSize = (deckingType) => {
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
