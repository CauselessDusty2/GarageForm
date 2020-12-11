import React from 'react'
import CardContainer from "./CardContainer";

const AdvancedQuoteSection = props => {
    const getProfileType = sidingType => {
        switch(sidingType) {
            case "Mitten Vinyl":
                return VINYL_SIDING_PROFILES;
            case "Domtek Metal":
                return DOMTEK_PROFILES;
            case "Canexel":
                return CANEXEL_PROFILES;
            case "KWP":
                return KWP_PROFILES;
            case "Hardie":
                return HARDIE_PROFILES;
            default:
                return ""
        }
    }
    let getMittenLineType = profile => {
        if ( profile === "Board & Batten" ) {
            return VINYL_LINE_ONE
        } else if ( profile === "Double 4.5\" Dutchlap" || profile === "Double 4\" Horizontal" ) {
            return VINYL_LINE_TWO
        } else if ( profile === "Triple Three" || profile === "Double 5\" Horizontal" ) {
            return VINYL_LINE_THREE
        } else if ( profile === "Double 5\" Dutchlap" || profile === "Double 4.5\" Horizontal" ) {
            return VINYL_LINE_FOUR
        } else if ( profile === "Double 4\" Dutchlap" || profile === "Double 5\" Vertical" ) {
            return VINYL_LINE_FIVE
        } else {
            return ""
        }
    }

    let getMittenColour = productLine => {
        switch(productLine) {
            case "Sentry Variegated":
                return MITTEN_VARIEGATED_COLOURS
            case "Sentry":
                return [ ...MITTEN_BOLD_PREMIUM_COLOURS, ...MITTEN_STANDARD_COLOURS ]
            case "Highland":
                return [ ...MITTEN_HIGHLAND_SPECIFIC_COLOURS, ...MITTEN_STANDARD_COLOURS ]
            case "Oregon Pride":
                return MITTEN_STANDARD_COLOURS
            case "Unsure":
                return [ ...MITTEN_VARIEGATED_COLOURS, ...MITTEN_BOLD_PREMIUM_COLOURS, ...MITTEN_STANDARD_COLOURS ]
            default:
                return ""
        }
    }

    let getDomtekColour = ( productLine, gauge ) => {
        if ( gauge === "24 Gauge" ) {
            return DOMTEK_24_COLOURS
        } else if ( gauge === "28 Gauge" ) {
            return DOMTEK_28_COLOURS
        } else if ( gauge === "26 Gauge" ) {
            if ( productLine === "Pro-Lock" ) {
                return [ ...PRO_LOCK_26_COLOURS, ...DOMTEK_MATTE_COLOURS ]
            } else if ( productLine === "Pro-Rib" || productLine === "Tuff-Rib" || productLine === "PB-Rib" ) {
                return [ ...PRO_LOCK_26_COLOURS, ...DOMTEK_MATTE_COLOURS, {value:"Antique Linen"} ]
            } else if ( productLine === "Lo-Rib" || productLine === "7/8 Corrugated" ) {
                return [ ...PRO_LOCK_26_COLOURS, {value:"Antique Linen"} ]
            }
        } else if ( gauge === "Unsure") {
            if ( productLine === "Pro-Lock" ) {
                return [ ...PRO_LOCK_26_COLOURS, ...DOMTEK_MATTE_COLOURS, {value:"Regent Green"}, {value:"Metallic Copper"}, {value:"Silver Metallic"} ]
            } else if ( productLine === "Pro-Rib" || productLine === "Tuff-Rib" ) {
                return [ ...DOMTEK_28_COLOURS, {value:"Gold"}, {value:"Dark Brown"}, ...DOMTEK_MATTE_COLOURS ]
            } else if ( productLine === "Lo-Rib" ) {
                return [ ...DOMTEK_28_COLOURS, {value:"Gold"}, {value:"Dark Brown"} ]
            } else if ( productLine === "PB-Rib" ) {
                return [ ...PRO_LOCK_26_COLOURS, ...DOMTEK_MATTE_COLOURS, {value:"Antique Linen"}, {value:"Regent Green"}, {value:"Metallic Copper"}, {value:"Silver Metallic"} ]
            } else if (productLine === "7/8 Corrugated" ) {
                return [ ...PRO_LOCK_26_COLOURS, {value:"Antique Linen"}, {value:"Regent Green"}, {value:"Metallic Copper"}, {value:"Silver Metallic"} ]
            }
        } else if ( productLine === "Unsure" ) {
            return ALL_DOMTEK_COLOURS
        } else {
            return ""
        }
    }

    let getCanexelColour = productLine => productLine ? CANEXEL_COLOURS : ""

    let getKWPColour = productLine => {
        if ( productLine === "Prestige Double 5\" Dutch Lap" || productLine === "Unsure") {
            return PRESTIGE_COLOURS
        } else if ( productLine === "Laurentian 8 ½\" Bevel" || productLine === "Provincial double 5\" Vertical" ) {
            return LAURENTIAN_COLOURS
        } else if ( productLine === "Bold 6\"" || productLine === "Bold 8\"" ) {
            return  BOLD_COLOURS
        } else if ( productLine === "Rustics" || productLine === "Smooth" ) {
            return RUSTIC_COLOURS
        } else {
            return ""
        }
    }

    let getHardieFinish = productLine => {
        switch(productLine) {
            case "HardiePlank Lap Siding":
                return HARDIEPLANK_FINISH;
            case "HardiePanel Vertical Siding":
                return HARDIEPANEL_FINISH;
            default:
                return ""
        }
    }

    let getHardieSize = ( productLine, finish) => {
        if ( productLine && finish ) {
            if ( productLine === "HardiePlank Lap Siding" ) {
                if ( finish === "Select Cedarmill" || finish === "Unsure" ) {
                    return HARDIEPLANK_SIZE_2
                } else if ( finish === "Smooth" ) {
                    return HARDIEPLANK_SIZE_1
                } else if ( finish === "Beaded Cedarmill" ) {
                    return HARDIEPLANK_SIZE_3
                }
            } else if ( productLine === "HardiePanel Vertical Siding" ){
                if ( finish === "Select Cedarmill" || finish === "Smooth" || finish === "Unsure" ){
                    return HARDIEPANEL_SIZE_1
                } else {
                    return HARDIEPANEL_SIZE_2
                }
            }
        }
        return ""
    }

    let getHardieColour = ( line, finish, size ) => {
        if ( line && finish && size ) {
            if ( line === "HardiePlank Lap Siding" ) {
                if ( finish === "Select Cedarmill" && size === "8-1/4\"" ) {
                    return HARDIE_COLOUR_3
                } else if ( finish === "Smooth" ) {
                    return HARDIE_COLOUR_1
                } else {
                    return HARDIE_COLOUR_2
                }
            } else if ( line === "HardiePanel Vertical Siding" ) {
                if ( finish === "Select Cedarmill" || finish === "Smooth" || finish === "Unsure" ) {
                    return HARDIE_COLOUR_3
                } else {
                    return HARDIE_COLOUR_2
                }
            }
        }
        return ""
    }

    let getSidingColour = ( sidingType, productLine, gauge, mittenVinylLine, hardieFinish, hardieSize ) => {
        switch(sidingType) {
            case "Mitten Vinyl":
                return getMittenColour( mittenVinylLine )
            case "Domtek Metal":
                return getDomtekColour( productLine, gauge )
            case "Canexel":
                return getCanexelColour( productLine )
            case "KWP":
                return getKWPColour( productLine )
            case "Hardie":
                return getHardieColour( productLine, hardieFinish, hardieSize )
            default:
                return ""
        }
    }

    let getGauge = productLine => {
        if ( productLine === "Pro-Lock" || productLine === "PB-Rib" || productLine === "7/8 Corrugated" ) {
            return GAUGE_ONE
        } else if ( productLine === "Pro-Rib" || productLine === "Tuff-Rib" || productLine === "Lo-Rib" ) {
            return GAUGE_TWO
        } else {
            return ""
        }
    }

    const getOverheadSize = width => width < 20 ? OVERHEAD_DOOR_SIZE_1 : OVERHEAD_DOOR_SIZE_2

    const getOverheadColour = series => {
        if (series === "Thermocraft") {
            return OVERHEAD_COLOUR_1
        } else if (series === "Ranchcraft" || series === "Carriagecraft") {
            return OVERHEAD_COLOUR_2
        } else if (series === "Flush") {
            return OVERHEAD_COLOUR_3
        } else if (series === "Elite") {
            return OVERHEAD_COLOUR_4
        } else if (series === "Contemporary") {
            return OVERHEAD_COLOUR_5
        } else if (series === "Esteem") {
            return OVERHEAD_COLOUR_6
        } else if (series === "Mid-Century Modern")
            return OVERHEAD_COLOUR_7
        return ""
    }

    const getOverheadWindowPatern = series => {
        if (series === "Thermocraft" || series === "Ranchcraft" || series === "Carriagecraft" || series === "Flush" || series === "Elite" || series === "Mid-Century Modern") {
            return WINDOW_PATERN_1
        } else if (series === "Contemporary") {
            return WINDOW_PATERN_2
        } else if (series === "Esteem") {
            return WINDOW_PATERN_3
        }
        return ""
    }

    const getOverheadWindowType = ( series, patern, finish ) => {
        if (patern && patern !== "None" && series) {
            if (series === "Thermocraft" || series === "Ranchcraft" || series === "Carriagecraft" || series === "Flush" ) {
                return WINDOW_TYPE_3
            } else if ( series === "Elite" || ( series === "Mid-Century Modern" && finish !== "Dark Tint Clear")) {
                return WINDOW_TYPE_2
            } else {
                return WINDOW_TYPE_1
            }
        }
        return ""
    }

    const getOverheadGlassFinish = ( series, patern ) => {
        if ( patern && patern !== "None" ) {
            if (series === "Thermocraft" || series === "Ranchcraft" || series === "Carriagecraft" || series === "Flush" ) {
                return GLASS_FINISH_1
            } else if ( series === "Elite" || series === "Contemporary" ) {
                return GLASS_FINISH_2
            } else if ( series === "Esteem" ) {
                return GLASS_FINISH_3
            } else if ( series === "Mid-Century Modern") {
                return GLASS_FINISH_4
            }
        }
        return ""
    }

    const getOverheadWindowFrame = ( series, patern, glassFinish ) => {
        if ( patern !== "None" && series === "Contemporary" && glassFinish) {
            if ( glassFinish === "Clear") {
                return WINDOW_FRAME_COLOUR_1
            } else if ( glassFinish === "Satin" ) {
                return WINDOW_FRAME_COLOUR_2
            } else if ( glassFinish === "Bronze Reflective" ) {
                return WINDOW_FRAME_COLOUR_3
            }
        }
        return ""
    }

    const getOverheadMuntinStyle = ( series, windowType ) => {
        if ( windowType === "Inlaid Muntin Bars" ) {
            if ( series === "Thermocraft" || series === "Flush" || series === "Ranchcraft" || series === "Carriagecraft" ) {
                return MUNTIN_STYLE_1
            } else if ( series === "Elite" || series === "Mid-Century Modern") {
                return MUNTIN_STYLE_2
            }
        }
        return ""
    }

    const getOverheadMuntinColour = ( series, windowType, glassFinish ) => {
        if ( windowType === "Inlaid Muntin Bars" ) {
            if ( series === "Thermocraft" || series === "Flush" || series === "Ranchcraft" || series === "Carriagecraft") {
                return MUNTIN_COLOUR_1
            } else if ( series === "Elite" ) {
                if ( glassFinish === "Clear" ) {
                    return MUNTIN_COLOUR_2
                } else if ( glassFinish === "Satin" ) {
                    return MUNTIN_COLOUR_3
                } else if ( glassFinish === "Bronze Reflective") {
                    return MUNTIN_COLOUR_4
                }
            } else if ( series === "Mid-Century Modern") {
                if ( glassFinish === "Clear" ) {
                    return [...MUNTIN_COLOUR_1, ...MUNTIN_COLOUR_2]
                } else if ( glassFinish === "Satin" ) {
                    return MUNTIN_COLOUR_3
                } else if ( glassFinish === "Bronze Tint") {
                    return MUNTIN_COLOUR_4
                }
            }
        }
        return ""
    }

    const getOverheadSnapInDesign = ( series, windowType ) => {
        if ( windowType === "Snap-In Decorative Designs") {
            if ( series === "Thermocraft" || series === "Flush" ) {
                return SNAP_IN_DESIGN_1
            } else if ( series === "Ranchcraft" || series === "Carriagecraft" ) {
                return SNAP_IN_DESIGN_2
            }
        }
        return ""
    }

    const getOverheadGlassType = windowPatern => windowPatern && windowPatern !== "None" ? GLASS_TYPE : ""

    const getDecorativeHandle = series => ( series === "Carriagecraft" || series === "Elite") ? DECORATIVE_HANDLE : ""

    const getDecorativeHinge = series => ( series === "Carriagecraft" || series === "Elite" ) ? DECORATIVE_HINGE : ""

    return(
        <section id="advancedSection">
            <CardContainer
                onChange={props.onClick}
                stateGroup="width"
                list={props.state.length > 30 ? WIDTH_ALT : WIDTH}
                title="Width"
                state={props.state.width}
                summary="The width of the garage means the gable end of the garage, the side that the overhead door will be on"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="length"
                list={props.state.width ? props.state.width < 16 ? LENGTH_ALT : LENGTH : LENGTH}
                title="Length"
                state={props.state.length}
                summary="The length of the garage means the eave end of the garage, the side that the man door will be on"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="height"
                list={HEIGHT}
                title="Height"
                state={props.state.height}
                summary="The height of the garage walls, measured from the ground to the bottom of the roof line"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="studSize"
                list={STUD_SIZE}
                title="Stud Size"
                state={props.state.studSize}
                summary="The size of the studs for the walls, either 2x4 or 2x6 studs"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="drywall"
                list={YES_NO}
                title="Drywall"
                state={props.state.drywall}
                summary="Option to add drywall"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="insulation"
                list={YES_NO}
                title="Insulation"
                state={props.state.insulation}
                summary="Option to add insulation"
            />
            <CardContainer
                onChange={props.handleSidingTypeChange}
                stateGroup="sidingType"
                list={SIDING_TYPES}
                title="Siding Type"
                state={props.state.sidingType}
                summary="The diferent types of siding for the garage, vinyl, metal, engineered, stucco prep"
            />
            <CardContainer
                onChange={props.handleSidingProfileChange}
                stateGroup="sidingProfile"
                list={props.state.sidingType && getProfileType(props.state.sidingType)}
                title="Siding Profile"
                state={props.state.sidingProfile}
                summary="The different profile options for the siding type"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.handleMittenLineChange}
                stateGroup="mittenLine"
                list={getMittenLineType(props.state.sidingProfile)}
                title="Siding Product Line"
                state={props.state.mittenLine}
                summary="The different mitten product lines"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.handleGaugeChange}
                stateGroup="gauge"
                list={getGauge(props.state.sidingProfile)}
                title="Gauge"
                state={props.state.gauge}
                summary="The gauge of the metal"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.handleHardieFinishChange}
                stateGroup="hardieFinish"
                list={getHardieFinish(props.state.sidingProfile)}
                title="Siding Finish"
                state={props.state.hardieFinish}
                summary="The finish of the siding"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.handleHardieSizeChange}
                stateGroup="hardieSize"
                list={getHardieSize(props.state.sidingProfile, props.state.hardieFinish)}
                title="Siding Size"
                state={props.state.hardieSize}
                summary="The size of the siding"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="sidingColour"
                list={getSidingColour(
                    props.state.sidingType,
                    props.state.sidingProfile,
                    props.state.gauge,
                    props.state.mittenLine,
                    props.state.hardieFinish,
                    props.state.hardieSize
                )}
                title="Siding Colour"
                state={props.state.sidingColour}
                summary="The colour of the siding"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.handleRoofTypeChange}
                stateGroup="roofType"
                list={ROOFING_TYPES}
                title="Roofing Type"
                state={props.state.roofType}
                summary="The type of roofing"
            />

            <CardContainer
                onChange={props.handleRoofProfileChange}
                stateGroup="roofProfile"
                list={props.state.roofType === "Domtek Metal" && getProfileType(props.state.roofType)}
                title="Roofing Profile"
                state={props.state.roofProfile}
                summary="The different profile options for the roofing type"
                additionalClass="childSelection"
            />

            {props.state.roofProfile &&
                <CardContainer
                    onChange={props.handleRoofGaugeChange}
                    stateGroup="roofGauge"
                    list={getGauge(props.state.roofProfile)}
                    title="Gauge"
                    state={props.state.roofGauge}
                    summary="The gauge of the metal"
                    additionalClass="childSelection"
                />
            }
            {props.state.roofType &&
                <CardContainer
                    onChange={props.onClick}
                    stateGroup="roofColour"
                    list={props.state.roofGauge ? getSidingColour(
                        props.state.roofType,
                        props.state.roofProfile,
                        props.state.roofGauge
                    ) : props.state.roofType === "Shingles" ? SHINGLE_COLOUR : ""}
                    title={props.state.roofType === "Domtek Metal" ? "Metal Roofing Colour" : "Shingle Colour"}
                    state={props.state.roofColour}
                    summary="The colour of the roofing"
                    additionalClass="childSelection"
                />
            }

            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadSize"
                list={getOverheadSize(props.state.width)}
                title="Overhead Door Size"
                state={props.state.overheadSize}
                summary="overhead door size options"
            />
            <CardContainer
                onChange={props.handleOverheadSeriesChange}
                stateGroup="overheadSeries"
                list={OVERHEAD_DOOR_SERIES}
                title="Overhead Door Series"
                state={props.state.overheadSeries}
                summary="overhead door series options"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadEliteStyle"
                list={props.state.overheadSeries === "Elite" ? ELITE_STYLE : ""}
                title="Overhead Door Style"
                state={props.state.overheadEliteStyle}
                summary="overhead door style options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadColour"
                list={getOverheadColour(props.state.overheadSeries)}
                title="Overhead Door Colour"
                state={props.state.overheadColour}
                summary="overhead door colour options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadDecorativeHandle"
                list={getDecorativeHandle(props.state.overheadSeries)}
                title="Overhead Door Decorative Handle"
                state={props.state.overheadDecorativeHandle}
                summary="overhead door decorative handle options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadDecorativeHinge"
                list={getDecorativeHinge(props.state.overheadSeries)}
                title="Overhead Door Decorative Hinge"
                state={props.state.overheadDecorativeHinge}
                summary="overhead door decorative hinge options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.handleWindowPaternChange}
                stateGroup="overheadWindowPatern"
                list={getOverheadWindowPatern(props.state.overheadSeries)}
                title="Overhead Door Window Patern"
                state={props.state.overheadWindowPatern}
                summary="overhead door window patern options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadGlassType"
                list={getOverheadGlassType(props.state.overheadWindowPatern)}
                title="Overhead Door Glass Type"
                state={props.state.overheadGlassType}
                summary="overhead door Glass Type options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.handleOverheadGlassFinish}
                stateGroup="overheadGlassFinish"
                list={getOverheadGlassFinish(props.state.overheadSeries, props.state.overheadWindowPatern)}
                title="Overhead Door Glass Finish"
                state={props.state.overheadGlassFinish}
                summary="overhead door glass finish options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadWindowFrameColour"
                list={getOverheadWindowFrame(props.state.overheadSeries, props.state.overheadWindowPatern, props.state.overheadGlassFinish)}
                title="Overhead Door Window Frame Colour"
                state={props.state.overheadWindowFrameColour}
                summary="overhead door window frame colour options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.handleOverheadWindowType}
                stateGroup="overheadWindowType"
                list={getOverheadWindowType(props.state.overheadSeries, props.state.overheadWindowPatern, props.state.overheadGlassFinish)}
                title="Overhead Door Window Type"
                state={props.state.overheadWindowType}
                summary="overhead door window type options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadMuntinStyle"
                list={getOverheadMuntinStyle(props.state.overheadSeries, props.state.overheadWindowType)}
                title="Overhead Door Muntin Style"
                state={props.state.overheadMuntinStyle}
                summary="overhead door muntin style options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadMuntinColour"
                list={getOverheadMuntinColour(props.state.overheadSeries, props.state.overheadWindowType, props.state.overheadGlassFinish)}
                title="Overhead Door Muntin Colour"
                state={props.state.overheadMuntinColour}
                summary="overhead door muntin colour options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="overheadSnapInDesign"
                list={getOverheadSnapInDesign(props.state.overheadSeries, props.state.overheadWindowType)}
                title="Overhead Door Snap-In Design"
                state={props.state.overheadSnapInDesign}
                summary="overhead door snap-in design options"
                additionalClass="childSelection"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="gdoHp"
                list={HORSE_POWER}
                title="Garage Door Opener Horse Power"
                state={props.state.gdoHp}
                summary="Garage door openers horse power is the power it has to lift the door"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="gdoDrive"
                list={DRIVE_TYPE}
                title="Garage Door Opener Drive Type"
                state={props.state.gdoDrive}
                summary="Chain drive costs less but is louder than the belt drive"
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="gdoOption"
                list={OPENER_OPTIONS}
                title="Garage Door Opener Additional Options"
                state={props.state.gdoOption}
                summary="Openers come with a few additional options, built in lights and MyQ smart phone connectivity"
            />
        </section>
    )
}

export default AdvancedQuoteSection

//CONSTANTS --

const WIDTH = [
    {value: "12", imgSrc: "../img/12.png"},
    {value: "14", imgSrc: "../img/14.png"},
    {value: "16", imgSrc: "../img/16.png"},
    {value: "18", imgSrc: "../img/18.png"},
    {value: "20", imgSrc: "../img/20.png"},
    {value: "22", imgSrc: "../img/22.png"},
    {value: "24", imgSrc: "../img/24.png"},
    {value: "26", imgSrc: "../img/26.png"},
    {value: "28", imgSrc: "../img/28.png"},
    {value: "30", imgSrc: "../img/30.png"},
    {value: "Other", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmZH3hkaoPDIdnJtwIKTz1XakSVX6zIAkfw&usqp=CAU"}
]
const WIDTH_ALT = [
    {value: "16", imgSrc: "../img/16.png"},
    {value: "18", imgSrc: "../img/18.png"},
    {value: "20", imgSrc: "../img/20.png"},
    {value: "22", imgSrc: "../img/22.png"},
    {value: "24", imgSrc: "../img/24.png"},
    {value: "26", imgSrc: "../img/26.png"},
    {value: "28", imgSrc: "../img/28.png"},
    {value: "30", imgSrc: "../img/30.png"},
    {value: "Other", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmZH3hkaoPDIdnJtwIKTz1XakSVX6zIAkfw&usqp=CAU"}
]
const LENGTH = [
    {value: "20", imgSrc: "../img/20.png"},
    {value: "22", imgSrc: "../img/22.png"},
    {value: "24", imgSrc: "../img/24.png"},
    {value: "26", imgSrc: "../img/26.png"},
    {value: "28", imgSrc: "../img/28.png"},
    {value: "30", imgSrc: "../img/30.png"},
    {value: "32", imgSrc: "../img/32.png"},
    {value: "34", imgSrc: "../img/34.png"},
    {value: "36", imgSrc: "../img/36.png"},
    {value: "38", imgSrc: "../img/38.png"},
    {value: "40", imgSrc: "../img/40.png"},
    {value: "Other", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmZH3hkaoPDIdnJtwIKTz1XakSVX6zIAkfw&usqp=CAU"}
]

const LENGTH_ALT = [
    {value: "20", imgSrc: "../img/20.png"},
    {value: "22", imgSrc: "../img/22.png"},
    {value: "24", imgSrc: "../img/24.png"},
    {value: "26", imgSrc: "../img/26.png"},
    {value: "28", imgSrc: "../img/28.png"},
    {value: "30", imgSrc: "../img/30.png"},
    {value: "Other", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmZH3hkaoPDIdnJtwIKTz1XakSVX6zIAkfw&usqp=CAU"}]

const HEIGHT = [
    {value: "8", imgSrc: ""},
    {value: "10", imgSrc: ""},
    {value: "Other", imgSrc: ""}
]
const STUD_SIZE = [
    {value: "2x4", imgSrc: ""},
    {value: "2x6", imgSrc: ""},
    {value: "Unsure", imgSrc: ""}
]
const SIDING_TYPES = [
    {value: "Mitten Vinyl", imgSrc: "https://www.mittensiding.com/upload/mproducts/10/sentry-richmond-red.jpg"},
    {value: "Stucco Prep", imgSrc: ""},
    {value: "Domtek Metal", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/agricultural.jpg"},
    {value: "Canexel", imgSrc: "https://canexel.ca/wp-content/themes/jsb/imports/images/inspiration-1.jpg"},
    {value: "KWP", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2017/04/rustic-gray.jpg"},
    {value: "Hardie", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Home/Highlights/ColorThatLast_SmallImage.jpg?ext=.jpg"},
    {value: "Unsure", imgSrc: ""},
    {value: "Other", imgSrc: ""}
]
const VINYL_SIDING_PROFILES = [
    {value: "Double 4\" Dutchlap", imgSrc: "https://www.mittensiding.com/upload/mproducts/profiles/d4-dutchlap-nickel-profile_2.jpg"},
    {value: "Double 4.5\" Dutchlap", imgSrc: "https://www.mittensiding.com/upload/mproducts/profiles/sentry-d45dl-huron-blue-profile.jpg"},
    {value: "Double 5\" Dutchlap", imgSrc: "https://www.mittensiding.com/upload/mproducts/profiles/d5-dutchlap-bone-profile.jpg"},
    {value: "Double 4\" Horizontal", imgSrc: "https://www.mittensiding.com/upload/mproducts/profiles/sentry-d4h-yukon-grey-profile.jpg"},
    {value: "Double 4.5\" Horizontal", imgSrc: "https://www.mittensiding.com/upload/mproducts/profiles/d45h-cypress-profile.jpg"},
    {value: "Double 5\" Horizontal", imgSrc: "https://www.mittensiding.com/upload/mproducts/profiles/d5h-brownstone-profile.jpg"},
    {value: "Triple Three", imgSrc: "https://www.mittensiding.com/upload/mproducts/profiles/t3-khaki-brown-profile_2.jpg"},
    {value: "Double 5\" Vertical", imgSrc: "https://www.mittensiding.com/upload/mproducts/profiles/d5-vertical-satin-grey-profile.jpg"},
    {value: "Board & Batten", imgSrc: "https://www.mittensiding.com/upload/mproducts/profiles/sentry-bnb-rockaway-grey-profile.jpg"},
    {value: "Unsure", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmZH3hkaoPDIdnJtwIKTz1XakSVX6zIAkfw&usqp=CAU"}
]
const DOMTEK_PROFILES = [
    {value: "Pro-Lock", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/feat_prolock.jpg"},
    {value: "Pro-Rib", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/10/feat_prorib.jpg"},
    {value: "Tuff-Rib", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/10/feat_tuffrib.jpg"},
    {value: "Lo-Rib", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/10/feat_lorib.jpg"},
    {value: "PB-Rib", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/10/feat_pbrib.jpg"},
    {value: "7/8 Corrugated", imgSrc: "http://www.domtek.ca/wp-content/uploads/2019/05/feat_corrugated.jpg"},
    {value: "Unsure", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmZH3hkaoPDIdnJtwIKTz1XakSVX6zIAkfw&usqp=CAU"}
]
const CANEXEL_PROFILES = [
    {value: "Ced’R-Vue 6\" Snap Lap", imgSrc: "https://canexel.ca/wp-content/themes/jsb/imports/images/cedr-vue-big.jpg"},
    {value: "Ced’R-Vue 8\" Lap", imgSrc: "https://canexel.ca/wp-content/themes/jsb/imports/images/cedr-vue-big.jpg"},
    {value: "Ridgewood D-5", imgSrc: "https://canexel.ca/wp-content/themes/jsb/imports/images/ridgewood-big.jpg"},
    {value: "Ultraplank", imgSrc: "https://canexel.ca/wp-content/themes/jsb/imports/images/ultraplank-big.jpg"},
    {value: "Unsure", imgSrc: ""}
]
const KWP_PROFILES = [
    {value: "Prestige Double 5\" Dutch Lap", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/PRESTIGE_CEDER.png"},
    {value: "Laurentian 8 ½\" Bevel", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/LAURENTIAN_ALMOND.png"},
    {value: "Provincial double 5\" Vertical", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/PROVINCIAL_REDpng.png"},
    {value: "Bold 6\"", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/BOLD_KHAKI-100x100.png"},
    {value: "Bold 8\"", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/BOLD_KHAKI-100x100.png"},
    {value: "Rustics", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/yellowstone_rustic_400x400-300x300.jpg"},
    {value: "Smooth", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/SMOOTH_SIERRA.png"},
    {value: "Unsure", imgSrc: ""}
]
const HARDIE_PROFILES = [
    {value: "HardiePlank Lap Siding", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Navigation/Products/menu-hardieplank-lap-siding.jpg?ext=.jpg"},
    {value: "HardiePanel Vertical Siding", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Navigation/Products/menu-hardiepanel-vertical-siding.jpg?ext=.jpg"},
    {value: "Unsure", imgSrc: ""}
]
const VINYL_LINE_ONE = [
    {value: "Sentry", imgSrc: "https://www.mittensiding.com/upload/mproducts/10/sentry-showcase.jpg"},
    {value: "Sentry Variegated", imgSrc: "https://www.mittensiding.com/upload/mproducts/444/arctic-2.jpg"}
]

const VINYL_LINE_TWO = [
    {value: "Sentry", imgSrc: "https://www.mittensiding.com/upload/mproducts/10/sentry-showcase.jpg"},
    {value: "Sentry Variegated", imgSrc: "https://www.mittensiding.com/upload/mproducts/444/arctic-2.jpg"},
    {value: "Highland", imgSrc: "https://www.mittensiding.com/upload/mproducts/69/highland-ash.jpg"},
    {value: "Oregon Pride", imgSrc: "https://www.mittensiding.com/upload/mproducts/9/op-frost.jpg"}
]

const VINYL_LINE_THREE = [
    {value: "Highland", imgSrc: "https://www.mittensiding.com/upload/mproducts/69/highland-ash.jpg"}
]

const VINYL_LINE_FOUR = [
    {value: "Highland", imgSrc: "https://www.mittensiding.com/upload/mproducts/69/highland-ash.jpg"},
    {value: "Oregon Pride", imgSrc: "https://www.mittensiding.com/upload/mproducts/9/op-frost.jpg"}
]

const VINYL_LINE_FIVE = [
    {value: "Oregon Pride", imgSrc: "https://www.mittensiding.com/upload/mproducts/9/op-frost.jpg"}
]

const MITTEN_VARIEGATED_COLOURS = [
    {value:"Burnt Sienna", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/variegated-d4h-burnt-sienna-webheader-box.jpg"},
    {value:"Farmhouse", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/variegated-d4h-farmhouse-webheader-box.jpg"},
    {value:"Arctic Grey", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/variegated-d4h-arctic-grey-webheader-box.jpg"},
    {value:"Hemlock", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/variegated-d4h-hemlock-webheader-box.jpg"}
]

const MITTEN_BOLD_PREMIUM_COLOURS = [
    {value:"Yukon Grey", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/yukon-grey-box.jpg"},
    {value:"Huron Blue", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/huron-blue-box.jpg"},
    {value:"Timber Bark", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-timber-bark-sm.jpg"},
    {value:"Lighthouse Red", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-lighthouse-red-sm.jpg"},
    {value:"Sapphire Blue", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-sapphire-blue-sm.jpg"},
    {value:"Regatta Blue", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-regatta-blue-sm.jpg"},
    {value:"Burnt Orange", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-burnt-orange-sm.jpg"},
    {value:"Eggplant", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-eggplant-sm.jpg"},
    {value:"Annapolis Blue", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-annapolis-blue-sm.jpg"},
    {value:"Aviator Green", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-aviator-green-sm.jpg"},
    {value:"Richmond Red", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-richmond-red-sm.jpg"},
    {value:"Gunmetal Grey", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-gunmetal-grey-sm.jpg"},
    {value:"Coffee Bean", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-coffee-bean-sm.jpg"},
    {value:"Grenadier Green", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-grenadier-green-sm.jpg"},
    {value:"Muskoka Green", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-muskoka-green-sm.jpg"},
    {value:"Khaki Brown", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-khaki-brown-sm.jpg"},
    {value:"Caribou Brown", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-caribou-brown-sm.jpg"},
    {value:"Chestnut Brown", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-chestnut-brown-sm.jpg"},
    {value:"Rockaway Grey", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-rockaway-grey-sm.jpg"}
]

const MITTEN_STANDARD_COLOURS = [
    {value:"Frost", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-frost-sm.jpg"},
    {value:"Bone", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-bone-sm.jpg"},
    {value:"Ivory", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-ivory-sm.jpg"},
    {value:"Cypress", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-cypress-sm.jpg"},
    {value:"Stratus", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-stratus-sm.jpg"},
    {value:"Flagstone", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-flagstone-sm.jpg"},
    {value:"Brownstone", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-brownstone-sm.jpg"},
    {value:"Clay", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-clay-sm.jpg"},
    {value:"Hearthstone", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-hearthstone-sm.jpg"},
    {value:"Sandalwood", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-sandcastle-sm.jpg"},
    {value:"Ash", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-ash-sm.jpg"},
    {value:"Sandcastle", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-sandalwood-sm.jpg"},
    {value:"Lite Maple", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-lite-maple-sm.jpg"},
    {value:"Saffron", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-saffron-sm-.jpg"},
    {value:"Satin Grey", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-satin-grey-sm.jpg"},
    {value:"Sage", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-sage-sm.jpg"},
    {value:"Nickel", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-nickelsampler.jpg"},
    {value:"Indigo", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-indigosample.jpg"}
]

const MITTEN_HIGHLAND_SPECIFIC_COLOURS =  [
    {value:"Khaki Brown", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-khaki-brown-sm.jpg"},
    {value:"Rockaway Grey", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-rockaway-grey-sm.jpg"},
    {value:"Grenadier Green", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-grenadier-green-sm.jpg"}
]

const PRO_LOCK_26_COLOURS = [
    {value:"White White", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_white.gif"},
    {value:"Brite White", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_brite.gif"},
    {value:"Bone White", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_bone.gif"},
    {value:"Black", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_black.gif"},
    {value:"Melcher's Green", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_melchers.gif"},
    {value:"Barn Red", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_barn.gif"},
    {value:"Gold", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_gold.gif"},
    {value:"Dark Brown", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_dark.gif"},
    {value:"Coffee Brown", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_coffee.gif"},
    {value:"Charcoal", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_charcoal-1.gif"},
    {value:"Copper Penny", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_copper_penny.gif"},
    {value:"Galvalume", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_galvalume.jpg"},
]

const DOMTEK_24_COLOURS = [
    {value:"White White", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_white.gif"},
    {value:"Black", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_black.gif"},
    {value:"Dark Brown", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_dark.gif"},
    {value:"Charcoal", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_charcoal-1.gif"},
    {value:"Regent Grey", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_regent.gif"},
    {value:"Metallic Copper", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_copper.jpg"},
    {value:"Silver Metallic", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_silver.jpg"},
    {value:"Galvalume", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_galvalume.jpg"}
]

const DOMTEK_MATTE_COLOURS = [
    {value:"Matte Jet Black", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_matte_black.gif"},
    {value:"Matte Graphite Grey", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_matte_grey.gif"},
    {value:"Matte Green", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_matte_green.gif"},
    {value:"Matte Chocolate Brown", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_matte_brown.gif"},
    {value:"Matte Sepia Brown", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_matte_sepia.gif"}
]

const DOMTEK_28_COLOURS = [
    {value:"White White", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_white.gif"},
    {value:"Brite White", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_brite.gif"},
    {value:"Bone White", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_bone.gif"},
    {value:"Black", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_black.gif"},
    {value:"Melcher's Green", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_melchers.gif"},
    {value:"Forest Green", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_forest.gif"},
    {value:"Heron Blue", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_heron.gif"},
    {value:"Slate Blue", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_slate.gif"},
    {value:"Tile Red", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_tile.gif"},
    {value:"Barn Red", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_barn.gif"},
    {value:"Burgundy", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_burgundy.gif"},
    {value:"Antique Linen", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_antique.gif"},
    {value:"Light Stone", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_light_stone.gif"},
    {value:"Buckskin", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_buckskin.gif"},
    {value:"Burnished Slate", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_burnished.gif"},
    {value:"Tan", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_tan.gif"},
    {value:"Coffee Brown", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_coffee.gif"},
    {value:"Taupe", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_taupe.gif"},
    {value:"Charcoal", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_charcoal-1.gif"},
    {value:"MS Charcoal", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_mscharcoal.gif"},
    {value:"Zinc Grey", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_zinc.gif"},
    {value:"Stone Grey", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_stone.gif"},
    {value:"Regent Grey", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_regent.gif"},
    {value:"Copper Penny", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_copper_penny.gif"},
    {value:"Galvalume", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_galvalume.jpg"},
    {value:"Galvanized", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_galvanized.jpg"}
]

const ALL_DOMTEK_COLOURS = [
    ...DOMTEK_28_COLOURS,
    ...DOMTEK_MATTE_COLOURS,
    {value:"Gold", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_gold.gif"},
    {value:"Dark Brown", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_dark.gif"},
    {value:"Metallic Copper", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_copper.jpg"},
    {value:"Silver Metallic", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/colour_silver.jpg"}
]

const CANEXEL_COLOURS = [
    {value:"Khaki", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/classic-khaki-colours.jpg"},
    {value:"Mist Grey", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/classic-mist-grey-colours.jpg"},
    {value:"River Rock", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/classic-river-rock-colours.jpg"},
    {value:"Cedar", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/inspiration-cedar-colours.jpg"},
    {value:"Country Red", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/inspiration-country-red-colours.jpg"},
    {value:"Midnight Blue", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/inspiration-midnight-blue-colours.jpg"},
    {value:"Scotia Blue", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/inspiration-scotia-blue-colours.jpg"},
    {value:"Acadia", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-acadia-colours.jpg"},
    {value:"Barista", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-barista-colours.jpg"},
    {value:"Barnwood", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/BoisGrange.jpg"},
    {value:"Black", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-black-colours.jpg"},
    {value:"Cliffside", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-cliffside-colours.jpg"},
    {value:"Coastline", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-coastline-colours.jpg"},
    {value:"Granite", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-granite-colours.jpg"},
    {value:"Sandalwood", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-sandalwood-colours.jpg"},
    {value:"Red Fox", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-redfox-colours.jpg"},
    {value:"Sand", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-sand-colours.jpg"},
    {value:"Sierra", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-sierra-colours.jpg"},
    {value:"Timberwolf", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/LoupGris.jpg"},
    {value:"Walnut", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-walnut-colours.jpg"},
    {value:"White", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/blanc.jpg"},
    {value:"Yellowstone", imgSrc: "https://canexel.ca/wp-content/uploads/2020/06/nature-yellowstone-colours.jpg"}
]

const PRESTIGE_COLOURS = [
    {value:"Acadia", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_ACADIA-1.png"},
    {value:"Acadia Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/acadia_rustic_400x400-opt-300x300.jpg"},
    {value:"Almond", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_ALMOND-1.png"},
    {value:"Cactus", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/BOLD_CACTUS.png"},
    {value:"Cedar", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_CEDAR-1.png"},
    {value:"Cedar Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/cedar_rustic_400x400-opt-300x300.jpg"},
    {value:"Coffee", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_COFFEE-1.png"},
    {value:"Commercial Brown", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2017/02/BOLD_com-brown.png"},
    {value:"Country Red", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_RED-1.png"},
    {value:"Granite", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_GRANITE-1.png"},
    {value:"Granite Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/Granite_rustic_400x400-300x300.jpg"},
    {value:"Gray Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/gray_rustic_400x400-300x300.jpg"},
    {value:"Khaki", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_KHAKI-1.png"},
    {value:"Maize", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_MAIZE-1.png"},
    {value:"Olive", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2017/02/BOLD_OLIVE.png"},
    {value:"Pearl Gray", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/bold_PearlGray.png"},
    {value:"Sierra", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_SIERRA-1.png"},
    {value:"Sierra Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/sierra_rustic_400x400-300x300.jpg"},
    {value:"Thunder Blue", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_BLUE-1.png"},
    {value:"Torrified Brown Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/torrefied_brown__rustic_600x600-1-300x300.jpg"},
    {value:"Walnut", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2017/02/WALNUT_RUSTIC.png"},
    {value:"Walnut Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/walnut_rustic_400x400-300x300.jpg"},
    {value:"White", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_WHITE.png"},
    {value:"Yellowstone", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_YELLOWSTONEpng-1.png"},
    {value:"Yellowstone Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/yellowstone_rustic_400x400-300x300.jpg"}
]

const LAURENTIAN_COLOURS = [
    {value:"Acadia", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_ACADIA-1.png"},
    {value:"Almond", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_ALMOND-1.png"},
    {value:"Cedar", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_CEDAR-1.png"},
    {value:"Coffee", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_COFFEE-1.png"},
    {value:"Country Red", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_RED-1.png"},
    {value:"Granite", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_GRANITE-1.png"},
    {value:"Khaki", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_KHAKI-1.png"},
    {value:"Maize", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_MAIZE-1.png"},
    {value:"Sierra", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_SIERRA-1.png"},
    {value:"Thunder Blue", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_BLUE-1.png"},
    {value:"White", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_WHITE.png"},
    {value:"Yellowstone", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_YELLOWSTONEpng-1.png"}
]

const BOLD_COLOURS = [
    {value:"Cactus", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/BOLD_CACTUS.png"},
    {value:"Coffee", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_COFFEE-1.png"},
    {value:"Commercial Brown", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2017/02/BOLD_com-brown.png"},
    {value:"Country Red", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_RED-1.png"},
    {value:"Granite", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_GRANITE-1.png"},
    {value:"Khaki", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_KHAKI-1.png"},
    {value:"Olive", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2017/02/BOLD_OLIVE.png"},
    {value:"Pearl Gray", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/bold_PearlGray.png"},
    {value:"White", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2016/01/CLASSIC_WHITE.png"}
]

const RUSTIC_COLOURS = [
    {value:"Acadia Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/acadia_rustic_400x400-opt-300x300.jpg"},
    {value:"Cedar Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/cedar_rustic_400x400-opt-300x300.jpg"},
    {value:"Granite Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/Granite_rustic_400x400-300x300.jpg"},
    {value:"Gray Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/gray_rustic_400x400-300x300.jpg"},
    {value:"Sierra Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/sierra_rustic_400x400-300x300.jpg"},
    {value:"Torrified Brown Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/torrefied_brown__rustic_600x600-1-300x300.jpg"},
    {value:"Walnut Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/walnut_rustic_400x400-300x300.jpg"},
    {value:"Yellowstone Rustic", imgSrc: "https://www.kwpproducts.com/wp-content/uploads/2018/07/yellowstone_rustic_400x400-300x300.jpg"}
]
const GAUGE_ONE = [
    {value:"26 Gauge", imgSrc: ""},
    {value:"24 Gauge", imgSrc: ""},
    {value:"Unsure", imgSrc: ""}
]
const GAUGE_TWO = [
    {value:"28 Gauge", imgSrc: ""},
    {value:"26 Gauge", imgSrc: ""},
    {value:"Unsure", imgSrc: ""}
]

const HARDIEPLANK_FINISH = [
    {value: "Select Cedarmill", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Products/HardiePlank-Lap-Siding/Variations/Select-Cedarmill/HardiePlank_SelectCedarmill_Drawer.jpg?ext=.jpg"},
    {value: "Smooth", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Products/HardiePlank-Lap-Siding/Variations/Smooth/HardiePlank_Smooth_Drawer.jpg?ext=.jpg"},
    {value: "Beaded Cedarmill", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Products/HardiePlank-Lap-Siding/Variations/Beaded-Cedarmill/HardiePlank_BeadedCedarmill_Drawer.jpg?ext=.jpg"},
    {value: "Unsure", imgSrc: ""}
]

const HARDIEPANEL_FINISH = [
    {value: "Select Cedarmill", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Products/HardiePanel-Vertical-Siding/Variations/Select-Cedarmill/HardiePanelSelectCedarmill_Drawer.jpg?ext=.jpg"},
    {value: "Smooth", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Products/HardiePanel-Vertical-Siding/Variations/Smooth/HardiePanelSmooth_Drawer.jpg?ext=.jpg"},
    {value: "Stucco", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Products/HardiePanel-Vertical-Siding/Variations/Stucco/HardiePanelStucco_Drawer.jpg?ext=.jpg"},
    {value: "Sierra 8\"", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Products/HardiePanel-Vertical-Siding/Variations/Sierra-8/HardiePanelSierra8_Drawer.jpg?ext=.jpg"},
    {value: "Unsure", imgSrc: ""}
]

const HARDIEPLANK_SIZE_1 = [
    {value: "5-1/4\"", imgSrc: ""},
    {value: "6-1/4\"", imgSrc: ""},
    {value: "7-1/4\"", imgSrc: ""},
    {value: "8-1/4\"", imgSrc: ""}
]

const HARDIEPLANK_SIZE_2 = [
    ...HARDIEPLANK_SIZE_1,
    {value: "12\"", imgSrc: ""}
]

const HARDIEPLANK_SIZE_3 = [
    {value: "8-1/4\"", imgSrc: ""}
]

const HARDIEPANEL_SIZE_1 = [
    {value: "4x8", imgSrc: ""},
    {value: "4x10", imgSrc: ""}
]

const HARDIEPANEL_SIZE_2 = [
    {value: "4x8", imgSrc: ""}
]

const HARDIE_COLOUR_1 = [
    {value: "Primed", imgSrc: "g"}
]

const HARDIE_COLOUR_2 = [
    {value: "Primed", imgSrc: ""},
    {value: "Dream Collection", imgSrc: ""}
]

const HARDIE_COLOUR_3 = [
    {value: "Arctic White", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Arctic-White/arctic-white-color-hero-left.jpg?ext=.jpg"},
    {value: "Cobble Stone", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Cobble-Stone/cobble-stone-color-hero-left.jpg?ext=.jpg"},
    {value: "Navajo Beige", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Navajo-Beige/navajo-beige-color-hero-left.jpg?ext=.jpg"},
    {value: "Monerey Taupe", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Monterey-Taupe/monterey-taupe-color-hero-left.jpg?ext=.jpg"},
    {value: "Khaki Brown", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Khaki-Brown/khaki-brown-color-hero-left.jpg?ext=.jpg"},
    {value: "Timber Bark", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Timber-Bark/timber-bark-color-hero-left.jpg?ext=.jpg"},
    {value: "Peral Gray", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Pearl-Gray/pearl-gray-color-hero-left.jpg?ext=.jpg"},
    {value: "Light Mist", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Light-Mist/light-mist-color-hero-left.jpg?ext=.jpg"},
    {value: "Gray Slate", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Gray-Slate/gray-slate-color-hero-left.jpg?ext=.jpg"},
    {value: "Night Gray", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Night-Gray/night-gray-color-hero-left.jpg?ext=.jpg"},
    {value: "BoothBay Blue", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Boothbay-Blue/boothbay-blue-color-hero-left.jpg?ext=.jpg"},
    {value: "Evening Blue", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Evening-Blue/evening-blue-color-hero-left.jpg?ext=.jpg"},
    {value: "Aged Pewter", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Aged-Pewter/aged-pewter-color-hero-left.jpg?ext=.jpg"},
    {value: "Iron Gray", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Iron-Grey/iron-gray-color-hero-left.jpg?ext=.jpg"},
    {value: "Countrylane Red", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Countrylane-Red/countrylane-red-color-hero-left.jpg?ext=.jpg"},
    {value: "Woodstock Brown", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Woodstock-Brown/woodstock-brown-color-hero-left.jpg?ext=.jpg"},
    {value: "Rich Expresso", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Rich-Espresso/rich-espresso-color-hero-left.jpg?ext=.jpg"},
    {value: "Heathered Moss", imgSrc: "https://www.jameshardie.ca/JamesHardieNorthAmerica/media/Color-and-Design/ColorPlus-Colors/Heathered-Moss/heathered-moss-color-hero-left.jpg?ext=.jpg"},
    {value: "Primed", imgSrc: ""},
    {value: "Dream Collection", imgSrc: ""}
]

const ROOFING_TYPES = [
    {value: "Shingles", imgSrc: "https://res.cloudinary.com/ocimages/image/upload/f_auto/v1579546785/roofing/shingles/duration-series/shingle-thumbs/duration.jpg"},
    {value: "Domtek Metal", imgSrc: "http://www.domtek.ca/wp-content/uploads/2016/09/agricultural.jpg"},
    {value: "Other", imgSrc: ""}
]
const OVERHEAD_DOOR_SIZE_1 = [
    {value: "9x7", imgSrc: ""},
    {value: "9x8", imgSrc: ""},
    {value: "Other", imgSrc: ""}
]

const OVERHEAD_DOOR_SIZE_2 = [
    {value: "9x7", imgSrc: ""},
    {value: "9x8", imgSrc: ""},
    {value: "16x7", imgSrc: ""},
    {value: "16x8", imgSrc: ""},
    {value: "Other", imgSrc: ""}
]

//series options
const OVERHEAD_DOOR_SERIES = [
    {value: "Thermocraft", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/thermo-16-front.jpg"},
    {value: "Ranchcraft", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/ranch-16-front.jpg"},
    {value: "Carriagecraft", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/carriagecraft-white-door.jpg"},
    {value: "Flush", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/flush-16-front.jpg"},
    {value: "Elite", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/door-elite.jpg"},
    {value: "Esteem", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/esteem-16-front.jpg"},
    {value: "Contemporary", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/door-mid-century-modern.jpg"},
    {value: "Mid-Century Modern", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/door-contemporary.jpg"}
]

//elite series door style options
const ELITE_STYLE = [
    {value: "Ranchcraft", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-elite-ranchcraft-walnut.jpg"},
    {value: "Carriagecraft", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-elite-carriagecraft-walnut.jpg"},
    {value: "Flush", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-elite-flush-walnut.jpg"}
]

//door colour options
const OVERHEAD_COLOUR_1 = [
    {value: "White", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/White.jpg"},
    {value: "Sable Grey", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/SableGrey.jpg"},
    {value: "Sandstone", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Sandstone.jpg"},
    {value: "Brown", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Brown.jpg"},
]

const OVERHEAD_COLOUR_2 = [
    {value: "White", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/White.jpg"},
    {value: "Sandstone", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Sandstone.jpg"},
    {value: "Brown", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Brown.jpg"}
]

const OVERHEAD_COLOUR_3= [
    {value: "White", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/White.jpg"},
    {value: "Sandstone", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Sandstone.jpg"}
]

const OVERHEAD_COLOUR_4 = [
    {value: "Walnut", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-elite-flush-walnut.jpg"},
    {value: "Charcoal", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-elite-flush-charcoal.jpg"}
]

const OVERHEAD_COLOUR_5 = [
    {value: "Walnut", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-contemporary-walnut.jpg"},
    {value: "Charcoal", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-contemporary-charcoal.jpg"},
    {value: "Cedar", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-contemporary-cedar.jpg"},
    {value: "White", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-contemporary-white.jpg"},
    {value: "Sable Grey", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-contemporary-sable-grey.jpg"}
]

const OVERHEAD_COLOUR_6 = [
    {value: "Walnut", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-walnut.jpg"},
    {value: "Cedar", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-cedar.jpg"},
    {value: "Ano-Light Bronze", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-light-bronze.jpg"},
    {value: "Ano-Medium Bronze", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-medium-bronze.jpg"},
    {value: "Ano-Dark Bronze", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-dark-bronze.jpg"},
    {value: "Ano-Black", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-ano-black.jpg"},
    {value: "Black", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-black.jpg"},
    {value: "Charcoal", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-charcoal.jpg"},
    {value: "Light Brown", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-light-brown.jpg"},
    {value: "Dark Brown", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-dark-brown.jpg"},
    {value: "Sable Grey", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-sable-grey.jpg"},
    {value: "Sandstone", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-sandstone.jpg"},
    {value: "Oyster Grey", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-oyster-grey.jpg"},
    {value: "Light Green", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-light-green.jpg"},
    {value: "Dark Green", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-dark-green.jpg"},
    {value: "Light Blue", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-light-blue.jpg"},
    {value: "Dark Blue", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-dark-blue.jpg"},
    {value: "Red", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-esteem-red.jpg"}
]

const OVERHEAD_COLOUR_7 = [
    {value: "White", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/White.jpg"},
    {value: "Sable Grey", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/SableGrey.jpg"},
    {value: "Cedar", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-contemporary-cedar.jpg"},
    {value: "Weathered Wood", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/color-mid-century-modern-weathered-wood.jpg"}
]

//window patern options
const WINDOW_PATERN_1 = [
    {value: "None", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-thermocraft-none.jpg"},
    {value: "Top Row", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-thermocraft-top-row.jpg"},
    {value: "Second Row", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-thermocraft-second-row.jpg"},
    {value: "Left Column", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-thermocraft-left-column.jpg"},
    {value: "Right Column", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-thermocraft-right-column.jpg"},
    {value: "Other", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-thermocraft-custom.jpg"}
]

const WINDOW_PATERN_2 = [
    {value: "None", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-none.jpg"},
    {value: "All Rows", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-all-rows.jpg"},
    {value: "Top Row", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-top-row.jpg"},
    {value: "Second Row", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-second-row.jpg"},
    {value: "Third Row", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-third-row.jpg"},
    {value: "Top Two Rows", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-top-two-rows.jpg"},
    {value: "Top Three Rows", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-top-three-rows.jpg"},
    {value: "Left Column", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-left-column.jpg"},
    {value: "Right Column", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-right-column.jpg"},
    {value: "Other", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-esteem-custom.jpg"}
]

const WINDOW_PATERN_3 = [
    {value: "None", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-contemporary-none.jpg"},
    {value: "Top Row", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-contemporary-top-row.jpg"},
    {value: "Left Column - Full Section", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-contemporary-left-column-full.jpg"},
    {value: "Right Column - Full Section", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-contemporary-right-column-full.jpg"},
    {value: "Left Column - Top Section", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-contemporary-left-column-top.jpg"},
    {value: "Right Column - Top Section", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-contemporary-right-column-top.jpg"},
    {value: "Left Column - Bottom", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-contemporary-left-column-bottom.jpg"},
    {value: "Right Column - Bottom", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-contemporary-right-column-bottom.jpg"},
    {value: "Other", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/window-pattern-contemporary-custom.jpg"}
]

const WINDOW_TYPE_1 = [
    {value: "Plain Lite", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Clear.jpg"}
]

const WINDOW_TYPE_2 = [
    {value: "Plain Lite", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Clear.jpg"},
    {value: "Inlaid Muntin Bars", imgSrc: ""}
]
const WINDOW_TYPE_3 = [
    {value: "Plain Lite", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Clear.jpg"},
    {value: "Inlaid Muntin Bars", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-26x14-stanton.jpg"},
    {value: "Snap-In Decorative Designs", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/insert-26x14-sunburst.jpg"}
]

const GLASS_FINISH_1 = [
    {value: "Clear", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Clear.jpg"},
    {value: "Satin", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Satin.jpg"}
]

const GLASS_FINISH_2 = [
    {value: "Clear", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Clear.jpg"},
    {value: "Satin", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Satin.jpg"},
    {value: "Bronze Reflective", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-38x14-bronze-reflective-contemporary.png"}
]

const GLASS_FINISH_3 = [
    {value: "Clear", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Clear.jpg"},
    {value: "Satin", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Satin.jpg"},
    {value: "Dark Tint Privacy", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-26x14-dark-tint-privacy.png"},
    {value: "Dark Tint Clear", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-26x14-dark-tint-clear.png"},
    {value: "Bronze Reflective", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-26x14-bronze-reflective.png"},
    {value: "Clear Lexan", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-26x14-clear-lexan.png"},
    {value: "Bronze Lexan", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-26x14-bronze-lexan.png"},
    {value: "Blue Lexan", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-26x14-blue-lexan.png"},
    {value: "Green Lexan", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-26x14-green-lexan.png"}
]

const GLASS_FINISH_4 = [
    {value: "Clear", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Clear.jpg"},
    {value: "Satin", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/Window-Satin.jpg"},
    {value: "Bronze Tint", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-38x14-bronze-reflective-contemporary.png"},
    {value: "Dark Tint Clear", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/glass-38x14-dark-tint-clear.png"},
]

const WINDOW_FRAME_COLOUR_1 = [
    {value: "Black", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-black.png"}
]

const WINDOW_FRAME_COLOUR_2 = [
    {value: "Bronze", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-bronze.png"}
]

const WINDOW_FRAME_COLOUR_3 = [
    {value: "Black", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-black.png"},
    {value: "Bronze", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-bronze.png"}
]

//Garage Door Muntin Style Options
const MUNTIN_STYLE_1 = [
    {value: "Stanton", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/muntin-26x14-stanton.jpg"},
    {value: "Regal", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/muntin-26x14-regal.jpg"}
]

const MUNTIN_STYLE_2 = [
    {value: "Stanton", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/muntin-26x14-stanton.jpg"},
    {value: "Regal", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/muntin-26x14-regal.jpg"},
    {value: "Provincial", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-38x14-provincial.jpg"}
]

const MUNTIN_COLOUR_1 = [
    {value: "White", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-white.png"},
    {value: "Pewter", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-pewter.png"},
    {value: "Brass", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-brass.png"}
]

const MUNTIN_COLOUR_2 = [
    {value: "Bronze", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-bronze.png"},
    {value: "Black", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-black.png"}
]

const MUNTIN_COLOUR_3 = [
    {value: "Black", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-black.png"}
]

const MUNTIN_COLOUR_4 = [
    {value: "Bronze", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/muntin-color-bronze.png"}
]

const SNAP_IN_DESIGN_1 = [
    {value: "Sunburst", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-sunburst.jpg"},
    {value: "Ridgewood", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-ridgewood.jpg"},
    {value: "Somerview", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-somerview.jpg"},
    {value: "Cascade", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-cascade.jpg"},
    {value: "Waterton", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-waterton.jpg"},
    {value: "Stockton", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-stockton.jpg"},
    {value: "Colonial", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-colonial.jpg"},
    {value: "Wynbridge", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-wynbridge.jpg"},
    {value: "Somerton", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-somerton.jpg"},
    {value: "Stockbridge", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-stockbridge.jpg"}
]

const SNAP_IN_DESIGN_2 = [
    {value: "Cascade", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-cascade.jpg"},
    {value: "Waterton", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-waterton.jpg"},
    {value: "Stockton", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-stockton.jpg"},
    {value: "Wynbridge", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-wynbridge.jpg"},
    {value: "Somerton", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-somerton.jpg"},
    {value: "Stockbridge", imgSrc: "https://www.steel-craft.ca/portals/3/Images/doors/insert-26x14-stockbridge.jpg"}
]

const GLASS_TYPE = [
    {value: "1/8\" Single Pane", imgSrc: ""},
    {value: "5/8\" Thermopane", imgSrc: ""},
    {value: "Unsure", imgSrc: ""}
]

const DECORATIVE_HANDLE = [
    {value: "Veneto", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/handle-veneto.png"},
    {value: "Milano", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/handle-milano.png"},
    {value: "San Marino", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/handle-san-marino.png"},
    {value: "None", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/handle-none.png"}
]

const DECORATIVE_HINGE = [
    {value: "Sicilian", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/hinge-sicilian.png"},
    {value: "Tuscan", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/hinge-tuscan.png"},
    {value: "Umbria", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/hinge-umbria.png"},
    {value: "None", imgSrc: "https://doordesigner.steel-craft.ca/img/preview/handle-none.png"}
]

/*
* Garage Door Opener Options
*/

//Garage door opener extra options
const OPENER_OPTIONS = [
    {value: "Lights", imgSrc: "https://embed.widencdn.net/img/cgi/doho01uhq8/520px/C203_FAMILY_2.jpg"},
    {value: "MyQ", imgSrc: "https://www.chamberlain.com/medias/TopNav-Smart-CLP22.jpg?context=bWFzdGVyfGltYWdlc3w2MzY5fGltYWdlL2pwZWd8aW1hZ2VzL2gwOC9oZGMvODc5ODAxNzEyNjQzMC5qcGd8MGY0MzBjNDM5NzdlNjlmYTA4YjlkNjljM2QxZmIwYWU3OTE2YTlmZmFlOWFiZDEzYzNkNjk0ZjEyZWRlMDMxMA"},
    {value: "MyQ and Lights", imgSrc: "https://embed.widencdn.net/img/cgi/0aa0ihwxis/520px/B1381_family_2.jpg"},
    {value: "None", imgSrc: ""}
]

//Garage door operner horse power options
const HORSE_POWER = [
    {value: "1/2HP", imgSrc: ""},
    {value: "3/4HP", imgSrc: ""},
    {value: "1-1/2HP", imgSrc: ""},
    {value: "Unsure", imgSrc: ""}
]

//Garage door opener drive options
const DRIVE_TYPE = [
    {value: "Chain Drive", imgSrc: "https://www.chamberlain.com/medias/chain77.jpg?context=bWFzdGVyfGltYWdlc3wxNzYzNnxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaDE0Lzg4NTAyNzU0MDE3NTguanBnfDNkMDhlZTQwMzVkOTA3MGRhOWNlNzliZTVmZjc4OWUxMzQ4MzNjYjA5ZmZkZTdhZjEzYWQyYTU2ZWUzMWMxNDY"},
    {value: "Belt Drive", imgSrc: "https://www.chamberlain.com/medias/beltnav300b.jpg?context=bWFzdGVyfGltYWdlc3wyNTM5NnxpbWFnZS9qcGVnfGltYWdlcy9oZTAvaGRiLzg3OTY4OTQwNjg3NjYuanBnfGE4MThjODVhNDRhNzlmZjA2ZjM3MzNjM2U5MzQ0MWUzNDdmOWQ1MjFhNzUzMjhiZGZhYzBjZDUwMGMyNTljNzA"},
    {value: "Unsure", imgSrc: ""}
]

const YES_NO = [
    {value: "Yes", imgSrc: ""},
    {value: "No", imgSrc: ""}
]

const SHINGLE_COLOUR = [
    {
        value:"Desert Tan",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/208/original/PYS_TruDefDur_DesertTan_768x768_72dpi.jpg?1503324909"
    },{
        value:"Brownwood",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/205/original/PYS_TruDefDur_Brownwood_768x768_72dpi.jpg?1503324906"
    },{
        value:"Teak",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/218/original/PYS_TruDefDur_Teak_768x768_72dpi.jpg?1503324920"
    },{
        value:"Driftwood",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/209/original/open-uri20200811-17537-sxvbzb?1597169699"
    },{
        value:"Onyx Black",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/212/original/PYS_TruDefDur_OnyxBlack_768x768_72dpi.jpg?1503324914"
    },{
        value:"Estate Gray",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/210/original/PYS_TruDefDur_EstateGray_768x768_72dpi.jpg?1503324912"
    },{
        value:"Sierra Gray",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/216/original/PYS_TruDefDur_SierraGray_768x768_72dpi.jpg?1503324918"
    },{
        value:"Quarry Gray",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/214/original/PYS_TruDefDur_QuarryGray_768x768_72dpi.jpg?1503324916"
    },{
        value:"Harbor Blue",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/211/original/PYS_TruDefDur_HarborBlue_768x768_72dpi.jpg?1503324913"
    },{
        value:"Chareau Green",
        imgSrc:"https://dcpd6wotaa0mb.cloudfront.net/mdms/uploads/shingle_colors/swatch_160x160s/000/000/206/original/PYS_TruDefDur_ChateauGreen_768x768_72dpi.jpg?1503324907"
    }
]