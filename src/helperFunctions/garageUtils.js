import data from "../data/garage.json"

export const getMittenLineType = profile => {
    let lineType = null

    if ( profile === "Board & Batten" ) {
        lineType = data.vinylLineOne
    } else if ( profile === "Double 4.5\" Dutchlap" || profile === "Double 4\" Horizontal" ) {
        lineType = data.vinylLineTwo
    } else if ( profile === "Triple Three" || profile === "Double 5\" Horizontal" ) {
        lineType = data.vinylLineThree
    } else if ( profile === "Double 5\" Dutchlap" || profile === "Double 4.5\" Horizontal" ) {
        lineType = data.vinylLineFour
    } else if ( profile === "Double 4\" Dutchlap" || profile === "Double 5\" Vertical" ) {
        lineType = data.vinylLineFive
    }

    return lineType
}

export const getProfileType = sidingType => {
    let profileType = null

    switch(sidingType) {
        case "Mitten Vinyl":
            profileType = data.vinylSidingProfiles;
            break;
        case "Domtek Metal":
            profileType = data.domtekProfiles;
            break;
        case "Canexel":
            profileType = data.canexelProfiles;
            break;
        case "KWP":
            profileType = data.kwpProfiles;
            break;
        case "Hardie":
            profileType = data.hardieProfiles;
            break;
        default:
            profileType = null
    }

    return profileType
}

export const getMittenColours = productLine => {
    let colours = null

    switch(productLine) {
        case "Sentry Variegated":
            colours = data.mittenVariegatedColours
            break;
        case "Sentry":
            colours = [ ...data.mittenBoldPremiumColours, ...data.mittenStandardColours ]
            break;
        case "Highland":
            colours = [ ...data.mittenHighlandSpecificColours, ...data.mittenStandardColours ]
            break;
        case "Oregon Pride":
            colours = data.mittenStandardColours
            break;
        case "Unsure":
            colours = [ ...data.mittenVariegatedColours, ...data.mittenBoldPremiumColours, ...data.mittenStandardColours ]
            break;
        default:
            colours = null
    }

    return colours
}

export const getDomtekColours = ( productLine, gauge ) => {
  let colours = null

    if ( gauge === "24 Gauge" ) {
        colours = data.domtek24Colours
    } else if ( gauge === "28 Gauge" ) {
        colours = data.domtek28Colours
    } else if ( gauge === "26 Gauge" ) {
        if ( productLine === "Pro-Lock" ) {
            colours = [ ...data.domtek26Colours, ...data.domtekMatteColours ]
        } else if ( productLine === "Pro-Rib" || productLine === "Tuff-Rib" || productLine === "PB-Rib" ) {
            colours = [ ...data.domtek26Colours, ...data.domtekMatteColours, {value:"Antique Linen"} ]
        } else if ( productLine === "Lo-Rib" || productLine === "7/8 Corrugated" ) {
            colours = [ ...data.domtek26Colours, {value:"Antique Linen"} ]
        }
    } else if ( gauge === "Unsure") {
        if ( productLine === "Pro-Lock" ) {
            colours = [ ...data.domtek26Colours, ...data.domtekMatteColours, {value:"Regent Green"}, {value:"Metallic Copper"}, {value:"Silver Metallic"} ]
        } else if ( productLine === "Pro-Rib" || productLine === "Tuff-Rib" ) {
            colours = [ ...data.domtek28Colours, {value:"Gold"}, {value:"Dark Brown"}, ...data.domtekMatteColours ]
        } else if ( productLine === "Lo-Rib" ) {
            colours = [ ...data.domtek28Colours, {value:"Gold"}, {value:"Dark Brown"} ]
        } else if ( productLine === "PB-Rib" ) {
            colours = [ ...data.domtek26Colours, ...data.domtekMatteColours, {value:"Antique Linen"}, {value:"Regent Green"}, {value:"Metallic Copper"}, {value:"Silver Metallic"} ]
        } else if (productLine === "7/8 Corrugated" ) {
            colours = [ ...data.domtek26Colours, {value:"Antique Linen"}, {value:"Regent Green"}, {value:"Metallic Copper"}, {value:"Silver Metallic"} ]
        }
    } else if ( productLine === "Unsure" ) {
        colours = data.allDomtekColours
    }

    return colours
}

export const getCanexelColours = productLine => productLine ? data.canexelColours : null

export const getKWPColours = productLine => {
    let colours = null

    if ( productLine === "Prestige Double 5\" Dutch Lap" || productLine === "Unsure") {
        colours = data.prestigeColours
    } else if ( productLine === "Laurentian 8 ½\" Bevel" || productLine === "Provincial double 5\" Vertical" ) {
        colours = data.laurentianColours
    } else if ( productLine === "Bold 6\"" || productLine === "Bold 8\"" ) {
        colours =  data.boldColours
    } else if ( productLine === "Rustics" || productLine === "Smooth" ) {
        colours = data.rusticColours
    }

    return colours
}

export const getHardieFinish = productLine => {
    let finish = null

    switch(productLine) {
        case "HardiePlank Lap Siding":
            finish = data.hardieplankFinish;
            break;
        case "HardiePanel Vertical Siding":
            finish = data.hardiepanelFinish;
            break;
        default:
            return null
    }

    return finish
}

export const getHardieSizes = ( productLine, finish) => {
    let sizes = null

    if ( productLine && finish ) {
        if ( productLine === "HardiePlank Lap Siding" ) {
            if ( finish === "Select Cedarmill" || finish === "Unsure" ) {
                sizes = data.hardiePlankSize2
            } else if ( finish === "Smooth" ) {
                sizes = data.hardiePlankSize1
            } else if ( finish === "Beaded Cedarmill" ) {
                sizes = data.hardiePlankSize3
            }
        } else if ( productLine === "HardiePanel Vertical Siding" ){
            if ( finish === "Select Cedarmill" || finish === "Smooth" || finish === "Unsure" ){
                sizes = data.hardiePanelSize1
            } else {
                sizes = data.hardiePanelSize2
            }
        }
    }
    return sizes
}

export const getHardieColours = ( line, finish, size ) => {
    let colours = null

    if ( line && finish && size ) {
        if ( line === "HardiePlank Lap Siding" ) {
            if ( finish === "Select Cedarmill" && size === "8-1/4\"" ) {
                colours = data.hardieColour3
            } else if ( finish === "Smooth" ) {
                colours = data.hardieColour1
            } else {
                colours = data.hardieColour2
            }
        } else if ( line === "HardiePanel Vertical Siding" ) {
            if ( finish === "Select Cedarmill" || finish === "Smooth" || finish === "Unsure" ) {
                colours = data.hardieColour3
            } else {
                colours = data.hardieColour2
            }
        }
    }
    return colours
}

export const getSidingColours = ( sidingType, productLine, gauge, mittenVinylLine, hardieFinish, hardieSize ) => {
    let colours = null
    switch(sidingType) {
        case "Mitten Vinyl":
            colours = productLine === "Unsure" ? [ ...data.mittenVariegatedColours, ...data.mittenBoldPremiumColours, ...data.mittenStandardColours ] :  getMittenColours( mittenVinylLine )
            break;
        case "Domtek Metal":
            colours = getDomtekColours( productLine, gauge )
            break;
        case "Canexel":
            colours = getCanexelColours( productLine )
            break;
        case "KWP":
            colours = getKWPColours( productLine )
            break;
        case "Hardie":
            colours = getHardieColours( productLine, hardieFinish, hardieSize )
            break;
        default:
            colours = null
    }

    return colours
}


export const getGauge = productLine => {
    let gauges = null

    if ( productLine === "Pro-Lock" || productLine === "PB-Rib" || productLine === "7/8 Corrugated" ) {
        gauges = data.gaugeOne
    } else if ( productLine === "Pro-Rib" || productLine === "Tuff-Rib" || productLine === "Lo-Rib" ) {
        gauges = data.gaugeTwo
    } else {
        gauges = null
    }

    return gauges
}

export const getOverheadSizes = (width, height) => {
  let size = null
  if (width && width < 20) {
    if (height === "8ft") {
      size = data.overheadDoorSize1
    } else {
      size = data.overheadDoorSize2
    }
  } else {
    if (height === "8ft") {
      size = data.overheadDoorSize3
    } else {
      size = data.overheadDoorSize4
    }
  }
  return size
}

export const getOverheadColours = series => {
    let colours = null

    if (series === "Thermocraft") {
        colours = data.overheadColour1
    } else if (series === "Ranchcraft" || series === "Carriagecraft") {
        colours = data.overheadColour2
    } else if (series === "Flush") {
        colours = data.overheadColour3
    } else if (series === "Elite") {
        colours = data.overheadColour4
    } else if (series === "Contemporary") {
        colours = data.overheadColour5
    } else if (series === "Esteem") {
        colours = data.overheadColour6
    } else if (series === "Mid-Century Modern")
        colours = data.overheadColour7

    return colours
}

export const getOverheadWindowPaterns = series => {
    let patterns = null

    if (series === "Thermocraft" || series === "Ranchcraft" || series === "Carriagecraft" || series === "Flush" || series === "Elite" || series === "Mid-Century Modern") {
        patterns = data.windowPatern1
    } else if (series === "Contemporary") {
        patterns = data.windowPatern2
    } else if (series === "Esteem") {
        patterns = data.windowPatern3
    }

    return patterns
}

export const getOverheadWindowTypes = ( series, patern, finish ) => {
    let types = null

    if (patern && patern !== "None" && series) {
        if (series === "Thermocraft" || series === "Ranchcraft" || series === "Carriagecraft" || series === "Flush" ) {
            types = data.windowType3
        } else if ( series === "Elite" || ( series === "Mid-Century Modern" && finish !== "Dark Tint Clear")) {
            types = data.windowType2
        } else {
            types = data.windowType1
        }
    }

    return types
}

export const getOverheadGlassFinishes = ( series, patern ) => {
    let finishes = null

    if ( patern && patern !== "None" ) {
        if (series === "Thermocraft" || series === "Ranchcraft" || series === "Carriagecraft" || series === "Flush" ) {
            finishes = data.glassFinish1
        } else if ( series === "Elite" || series === "Contemporary" ) {
            finishes = data.glassFinish2
        } else if ( series === "Esteem" ) {
            finishes = data.glassFinish3
        } else if ( series === "Mid-Century Modern") {
            finishes = data.glassFinish4
        }
    }

    return finishes
}

export const getOverheadWindowFrames = ( series, patern, glassFinish ) => {
    let colours = null

    if ( patern !== "None" && series === "Contemporary" && glassFinish) {
        if ( glassFinish === "Clear") {
            colours = data.windowFrameColour1
        } else if ( glassFinish === "Satin" ) {
            colours = data.windowFrameColour2
        } else if ( glassFinish === "Bronze Reflective" ) {
            colours = data.windowFrameColour3
        }
    }

    return colours
}

export const getOverheadMuntinStyles = ( series, windowType ) => {
    let styles = null

    if ( windowType === "Inlaid Muntin Bars" ) {
        if ( series === "Thermocraft" || series === "Flush" || series === "Ranchcraft" || series === "Carriagecraft" ) {
            styles = data.muntinStyle1
        } else if ( series === "Elite" || series === "Mid-Century Modern") {
            styles = data.muntinStyle2
        }
    }

    return styles
}

export const getOverheadMuntinColours = ( series, windowType, glassFinish ) => {
    let colours = null

    if ( windowType === "Inlaid Muntin Bars" ) {
        if ( series === "Thermocraft" || series === "Flush" || series === "Ranchcraft" || series === "Carriagecraft") {
            colours = data.muntinColour1
        } else if ( series === "Elite" ) {
            if ( glassFinish === "Clear" ) {
                colours = data.muntinColour2
            } else if ( glassFinish === "Satin" ) {
                colours = data.muntinColour3
            } else if ( glassFinish === "Bronze Reflective") {
                colours = data.muntinColour4
            }
        } else if ( series === "Mid-Century Modern") {
            if ( glassFinish === "Clear" ) {
                colours = [...data.muntinColour1, ...data.muntinColour2]
            } else if ( glassFinish === "Satin" ) {
                colours = data.muntinColour3
            } else if ( glassFinish === "Bronze Tint") {
                colours = data.muntinColour4
            }
        }
    }

    return colours
}

export const getOverheadSnapInDesigns = ( series, windowType ) => {
  let designs = null

    if ( windowType === "Snap-In Decorative Designs") {
        if ( series === "Thermocraft" || series === "Flush" ) {
            designs = data.snapInDesign1
        } else if ( series === "Ranchcraft" || series === "Carriagecraft" ) {
            designs = data.snapInDesign2
        }
    }

    return designs
}

export const getOverheadGlassType = windowPatern => windowPatern && windowPatern !== "None" ? data.glassType : null

export const getDecorativeHandle = series => ( series === "Carriagecraft" || series === "Elite") ? data.decorativeHandle : null

export const getDecorativeHinge = series => ( series === "Carriagecraft" || series === "Elite" ) ? data.decorativeHinge : null
