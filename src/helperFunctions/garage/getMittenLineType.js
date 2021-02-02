import data from "../data/garage.json"

let getMittenLineType = profile => {
    if ( profile === "Board & Batten" ) {
        return data.vinylLineOne
    } else if ( profile === "Double 4.5\" Dutchlap" || profile === "Double 4\" Horizontal" ) {
        return data.vinylLineTwo
    } else if ( profile === "Triple Three" || profile === "Double 5\" Horizontal" ) {
        return data.vinylLineThree
    } else if ( profile === "Double 5\" Dutchlap" || profile === "Double 4.5\" Horizontal" ) {
        return data.vinylLineFour
    } else if ( profile === "Double 4\" Dutchlap" || profile === "Double 5\" Vertical" ) {
        return data.vinylLineFive
    } else {
        return null
    }
}
