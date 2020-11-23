import React from 'react'
import CardContainer from "./CardContainer";

const AdvancedQuoteSection = props => {
    const getProfileType = (sidingType) => {
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
    let getMittenLineType = ( profile ) => {
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
                return MITTEN_VARIEGATED_COLOURS;
            case "Sentry":
                return [ ...MITTEN_BOLD_PREMIUM_COLOURS, ...MITTEN_STANDARD_COLOURS ];
            case "Highland":
                return [ ...MITTEN_HIGHLAND_SPECIFIC_COLOURS, ...MITTEN_STANDARD_COLOURS ];
            case "Oregon Pride":
                return MITTEN_STANDARD_COLOURS;
            case "Unsure":
                return [ ...MITTEN_VARIEGATED_COLOURS, ...MITTEN_BOLD_PREMIUM_COLOURS, ...MITTEN_STANDARD_COLOURS ];
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

    let getCanexelColour = productLine => {
        if (productLine) {
            return CANEXEL_COLOURS
        }
        return ""
    }

    let getKWPColour = ( productLine ) => {
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

    let getHardieColour =() => {return ""}

    let getSidingColour = ( sidingType, productLine, gauge, mittenVinylLine ) => {
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
                return getHardieColour( productLine )
            default:
                return ""
        }
    }

    let getGauge = ( productLine ) => {
        if ( productLine === "Pro-Lock" || productLine === "PB-Rib" || productLine === "7/8 Corrugated" ) {
            return GAUGE_ONE
        } else if ( productLine === "Pro-Rib" || productLine === "Tuff-Rib" || productLine === "Lo-Rib" ) {
            return GAUGE_TWO
        } else {
            return ""
        }
    }

    return(
        <div>
            <CardContainer
                onChange={props.onClick}
                stateGroup="width"
                list={props.state.length > 30 ? WIDTH_ALT : WIDTH}
                title="Width"
                state={props.state.width}
            />

            <CardContainer
                onChange={props.onClick}
                stateGroup="length"
                list={props.state.width ? props.state.width < 16 ? LENGTH_ALT : LENGTH : LENGTH}
                title="Length"
                state={props.state.length}
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="height"
                list={HEIGHT}
                title="Height"
                state={props.state.height}
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="studSize"
                list={STUD_SIZE}
                title="Stud Size"
                state={props.state.studSize}
            />
            <CardContainer
                onChange={props.handleSidingTypeChange}
                stateGroup="sidingType"
                list={SIDING_TYPES}
                title="Siding Type"
                state={props.state.sidingType}
            />
            <CardContainer
                onChange={props.handleSidingProfileChange}
                stateGroup="sidingProfile"
                list={props.state.sidingType && getProfileType(props.state.sidingType)}
                title="Siding Profile"
                state={props.state.sidingProfile}
            />
            <CardContainer
                onChange={props.handleMittenLineChange}
                stateGroup="mittenLine"
                list={getMittenLineType(props.state.sidingProfile)}
                title="Siding Product Line"
                state={props.state.mittenLine}
            />
            <CardContainer
                onChange={props.handleGaugeChange}
                stateGroup="gauge"
                list={getGauge(props.state.sidingProfile)}
                title="Gauge"
                state={props.state.gauge}
            />
            <CardContainer
                onChange={props.onClick}
                stateGroup="sidingColour"
                list={getSidingColour(props.state.sidingType, props.state.sidingProfile, props.state.gauge, props.state.mittenLine)}
                title="Siding Colour"
                state={props.state.sidingColour}
            />
        </div>
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
    {value: "8"},
    {value: "10"},
    {value: "Other"}
]
const STUD_SIZE = [
    {value: "2x4", imgSrc: "https://www.capitolcitylumber.com/cms/wp-content/uploads/2017/04/2x4-Cypress.jpg"},
    {value: "2x6"},
    {value: "Unsure"}
]
const SIDING_TYPES = [
    {value: "Mitten Vinyl"},
    {value: "Stucco Prep"},
    {value: "Domtek Metal"},
    {value: "Canexel"},
    {value: "KWP"},
    {value: "Hardie"},
    {value: "Unsure"},
    {value: "Other"}
]
const VINYL_SIDING_PROFILES = [
    {value: "Double 4\" Dutchlap"},
    {value: "Double 4.5\" Dutchlap"},
    {value: "Double 5\" Dutchlap"},
    {value: "Double 4\" Horizontal"},
    {value: "Double 4.5\" Horizontal"},
    {value: "Double 5\" Horizontal"},
    {value: "Triple Three"},
    {value: "Double 5\" Vertical"},
    {value: "Board & Batten"},
    {value: "Unsure"}
]
const DOMTEK_PROFILES = [
    {value: "Pro-Lock"},
    {value: "Pro-Rib"},
    {value: "Tuff-Rib"},
    {value: "Lo-Rib"},
    {value: "PB-Rib"},
    {value: "7/8 Corrugated"},
    {value: "Unsure"}
]
const CANEXEL_PROFILES = [
    {value: "Ced’R-Vue 6\" Snap Lap"},
    {value: "Ced’R-Vue 8\" Lap"},
    {value: "Ridgewood D-5"},
    {value: "Ultraplank"},
    {value: "Unsure"}
]
const KWP_PROFILES = [
    {value: "Prestige Double 5\" Dutch Lap"},
    {value: "Laurentian 8 ½\" Bevel"},
    {value: "Provincial double 5\" Vertical"},
    {value: "Bold 6\""},
    {value: "Bold 8\""},
    {value: "Rustics"},
    {value: "Smooth"},
    {value: "Unsure"}
]
const HARDIE_PROFILES = [
    {value: "HardiePlank Lap Siding"},
    {value: "HardiePanel Vertical Siding"},
    {value: "Unsure"}
]
const VINYL_LINE_ONE = [
    {value: "Sentry"},
    {value: "Sentry Variegated"}
]

const VINYL_LINE_TWO = [
    {value: "Sentry"},
    {value: "Sentry Variegated"}, {value: "Highland"},
    {value: "Oregon Pride"}
]

const VINYL_LINE_THREE = [ {value: "Highland"} ]

const VINYL_LINE_FOUR = [ {value: "Highland"}, {value: "Oregon Pride"} ]

const VINYL_LINE_FIVE = [ {value: "Oregon Pride"} ]

const MITTEN_VARIEGATED_COLOURS = [
    {value:"Burnt Sienna", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/variegated-d4h-burnt-sienna-webheader-box.jpg"},
    {value:"Farmhouse"},
    {value:"Arctic Grey"},
    {value:"Hemlock"}
]

const MITTEN_BOLD_PREMIUM_COLOURS = [
    {value:"Yukon Grey", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/yukon-grey-box.jpg"},
    {value:"Huron Blue"},
    {value:"Timber Bark"},
    {value:"Lighthouse Red"},
    {value:"Sapphire Blue"},
    {value:"Regatta Blue"},
    {value:"Burnt Orange"},
    {value:"Eggplant"},
    {value:"Annapolis Blue"},
    {value:"Aviator Green"},
    {value:"Richmond Red"},
    {value:"Gunmetal Grey"},
    {value:"Coffee Bean"},
    {value:"Grenadier Green"},
    {value:"Muskoka Green"},
    {value:"Khaki Brown"},
    {value:"Caribou Brown"},
    {value:"Chestnut Brown"},
    {value:"Rockaway Grey"}
]

const MITTEN_STANDARD_COLOURS = [
    {value:"Frost"},
    {value:"Bone"},
    {value:"Ivory"},
    {value:"Cypress"},
    {value:"Stratus"},
    {value:"Flagstone"},
    {value:"Brownstone"},
    {value:"Clay"},
    {value:"Hearthstone"},
    {value:"Sandalwood"},
    {value:"Ash"},
    {value:"Sandcastle"},
    {value:"Lite Maple"},
    {value:"Saffron", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-saffron-sm-.jpg"},
    {value:"Satin Grey"},
    {value:"Sage"},
    {value:"Nickel"},
    {value:"Indigo"}
]

const MITTEN_HIGHLAND_SPECIFIC_COLOURS =  [
    {value:"Khaki Brown", imgSrc: "https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-khaki-brown-sm.jpg"},
    {value:"Rockaway Grey"},
    {value:"Grenadier Green"}
]

const PRO_LOCK_26_COLOURS = [
    {value:"White White"},
    {value:"Brite White"},
    {value:"Bone White"},
    {value:"Black"},
    {value:"Melcher's Green"},
    {value:"Barn Red"},
    {value:"Gold"},
    {value:"Buckskin"},
    {value:"Dark Brown"},
    {value:"Coffee Brown"},
    {value:"Charcoal"},
    {value:"Copper Penny", imgSrc: "https://lh3.googleusercontent.com/proxy/wdOohcOK3HysidKdrbN8FvlMkPVp7JJUbydXen0_WHLw4cX00KNx6DlznfAXpGfD5zMEVhjyFwYPlPGzqiN-fTnc3YuXDYXCa0MpNPggRVMz5TnqRl-RYdik1a42J74"},
    {value:"Galvalume Plus"},
    {value:"Galvanized Plus"}
]

const DOMTEK_24_COLOURS = [
    {value:"White White"},
    {value:"Black"},
    {value:"Dark Brown"},
    {value:"Charcoal"},
    {value:"Regent Grey"},
    {value:"Metallic Copper"},
    {value:"Silver Metallic"},
    {value:"Galvalume Plus"}
]

const DOMTEK_MATTE_COLOURS = [
    {value:"Matte Jet Black"},
    {value:"Matte Graphite Grey"},
    {value:"Matte Green"},
    {value:"Matte Chocolate Brown"},
    {value:"Matte Sepia Brown"}
]

const DOMTEK_28_COLOURS = [
    {value:"White White"},
    {value:"Brite White"},
    {value:"Bone White"},
    {value:"Black"},
    {value:"Melcher's Green"},
    {value:"Forest Green"},
    {value:"Heron Blue"},
    {value:"Slate Blue"},
    {value:"Tile Red"},
    {value:"Barn Red"},
    {value:"Burgundy"},
    {value:"Antique Linen"},
    {value:"Light Stone"},
    {value:"Rawhide"},
    {value:"Buckskin"},
    {value:"Burnished Slate"},
    {value:"Tan"},
    {value:"Coffee Brown"},
    {value:"Taupe"},
    {value:"Charcoal"},
    {value:"MS Charcoal"},
    {value:"Zinc Grey"},
    {value:"Stone Grey"},
    {value:"Regent Grey"},
    {value:"Copper Penny"},
    {value:"Galvalume Plus"},
    {value:"Galvanized Plus"}
]

const ALL_DOMTEK_COLOURS = [
    ...DOMTEK_28_COLOURS,
    ...DOMTEK_MATTE_COLOURS,
    {value:"Gold"},
    {value:"Dark Brown"},
    {value:"Metallic Copper"},
    {value:"Silver Metallic"}
]

const CANEXEL_COLOURS = [
    {value:"Khaki"},
    {value:"Mist Grey"},
    {value:"River Rock"},
    {value:"Cedar"},
    {value:"Country Red"},
    {value:"Midnight Blue"},
    {value:"Scotia Blue"},
    {value:"Acadia"},
    {value:"Barista"},
    {value:"Barnwood"},
    {value:"Black"},
    {value:"Cliffside"},
    {value:"Coastline"},
    {value:"Granite"},
    {value:"Sandalwood"},
    {value:"Red Fox"},
    {value:"Sand"},
    {value:"Sierra"},
    {value:"Timberwolf"},
    {value:"Walnut"},
    {value:"White"},
    {value:"Yellowstone"}
]

const PRESTIGE_COLOURS = [
    {value:"Arcadia"},
    {value:"Acadia Rustic"},
    {value:"Almond"},
    {value:"Cactus"},
    {value:"Cedar"},
    {value:"Cedar Rustic"},
    {value:"Coffee"},
    {value:"Commercial Brown"},
    {value:"Country Red"},
    {value:"Granite"},
    {value:"Granite Rustic"},
    {value:"Gray Rustic"},
    {value:"Khaki"},
    {value:"Maize"},
    {value:"Pearl Gray"},
    {value:"Sierra"},
    {value:"Sierra Rustic"},
    {value:"Thunder Blue"},
    {value:"Torrified Brown Rustic"},
    {value:"Walnut Rustic"},
    {value:"White"},
    {value:"Yellowstone"},
    {value:"Yellowstone Rustic"}
]

const LAURENTIAN_COLOURS = [
    {value:"Acadia"},
    {value:"Almond"},
    {value:"Cedar"},
    {value:"Coffee"},
    {value:"Country Red"},
    {value:"Granite"},
    {value:"Khaki"},
    {value:"Maize"},
    {value:"Sierra"},
    {value:"Thunder Blue"},
    {value:"White"},
    {value:"Yellowstone"}
]

const BOLD_COLOURS = [
    {value:"Cactus"},
    {value:"Coffee"},
    {value:"Commercial Brown"},
    {value:"Country Red"},
    {value:"Granite"},
    {value:"Khaki"},
    {value:"Olive"},
    {value:"Pearl Gray"},
    {value:"White"}
]

const RUSTIC_COLOURS = [
    {value:"Acadia Rustic"},
    {value:"Cedar Rustic"},
    {value:"Granite Rustic"},
    {value:"Gray Rustic"},
    {value:"Sierra Rustic"},
    {value:"Torrified Brown Rustic"},
    {value:"Walnut Rustic"},
    {value:"Yellowstone Rustic"}
]
const GAUGE_ONE = [
    {value:"26 Gauge"},
    {value:"24 Gauge"},
    {value:"Unsure"}
]
const GAUGE_TWO = [
    {value:"28 Gauge"},
    {value:"26 Gauge"},
    {value:"Unsure"}
]
