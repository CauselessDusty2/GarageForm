import React from 'react'
import CardContainer from "./CardContainer";

const BasicQuoteSection = props => {
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
                stateGroup="basicVinylColour"
                list={BASIC_VINYL_COLOUR}
                title="Vinyl Siding Colour"
                state={props.state.basicVinylColour}
            />

            <CardContainer
                onChange={props.onClick}
                stateGroup="shingleColour"
                list={SHINGLE_COLOUR}
                title="Shingle Colour"
                state={props.state.shingleColour}
            />
        </div>
    )
}

export default BasicQuoteSection

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
    {value: "Other", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmZH3hkaoPDIdnJtwIKTz1XakSVX6zIAkfw&usqp=CAU"}
]
const BASIC_VINYL_COLOUR = [
    {
        value:"Frost",
        imgSrc:"https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-frost-sm.jpg"
    },{
        value:"Brownstone",
        imgSrc:"https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-brownstone-sm.jpg"
    },{
        value:"Gunmetal Grey",
        imgSrc:"https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-gunmetal-grey-sm.jpg"
    },{
        value:"Stratus",
        imgSrc:"https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-stratus-sm.jpg"
    }
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