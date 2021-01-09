import React from 'react'
import CardContainer from "./CardContainer";


const BasicQuoteSection = props => {
    return(
        <section id="basicSection">
            <CardContainer
                onChange={props.onClick}
                stateGroup="basicWidth"
                list={props.state.length > 30 ? WIDTH_ALT : WIDTH}
                title="Width"
                state={props.state.basicWidth}
                summary="The width of the garage means the gable end of the garage, the side that the overhead door will be on"
            />

            <CardContainer
                onChange={props.onClick}
                stateGroup="basicLength"
                list={props.state.width ? props.state.width < 16 ? LENGTH_ALT : LENGTH : LENGTH}
                title="Length"
                state={props.state.basicLength}
                summary="The length of the garage means the eave end of the garage, the side that the man door will be on"
            />

            <CardContainer
                onChange={props.onClick}
                stateGroup="basicSiding"
                list={SIDING}
                title="Siding"
                state={props.state.basicSiding}
                summary="The garage can either have Mitten vinyl siding in one of three stocked colours, or have no siding"
            />

            <CardContainer
                onChange={props.onClick}
                stateGroup="basicShingleColour"
                list={SHINGLE_COLOUR}
                title="Shingle Colour"
                state={props.state.basicShingleColour}
                summary="The duration colours come in 10 different colour option"
            />
        </section>
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
    {value: "30", imgSrc: "../img/30.png"}
]
const WIDTH_ALT = [
    {value: "16", imgSrc: "../img/16.png"},
    {value: "18", imgSrc: "../img/18.png"},
    {value: "20", imgSrc: "../img/20.png"},
    {value: "22", imgSrc: "../img/22.png"},
    {value: "24", imgSrc: "../img/24.png"},
    {value: "26", imgSrc: "../img/26.png"},
    {value: "28", imgSrc: "../img/28.png"},
    {value: "30", imgSrc: "../img/30.png"}
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
    {value: "40", imgSrc: "../img/40.png"}
]

const LENGTH_ALT = [
    {value: "20", imgSrc: "../img/20.png"},
    {value: "22", imgSrc: "../img/22.png"},
    {value: "24", imgSrc: "../img/24.png"},
    {value: "26", imgSrc: "../img/26.png"},
    {value: "28", imgSrc: "../img/28.png"},
    {value: "30", imgSrc: "../img/30.png"}
]
const SIDING =  [
    {
        value:"Vinyl - Frost",
        imgSrc:"https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-frost-sm.jpg"
    },{
        value:"Vinyl - Brownstone",
        imgSrc:"https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-brownstone-sm.jpg"
    },{
        value:"Vinyl - Stratus",
        imgSrc:"https://www.mittensiding.com/upload/mproducts/colors/thumb/sentry-stratus-sm.jpg"
    },{
        value:"No Siding",
        imgSrc:"https://garagedoorcompanyoseo.com/wp-content/uploads/2020/03/0C04C2E9-0965-4674-AC0A-E784F85833A8-rotated.jpg"
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