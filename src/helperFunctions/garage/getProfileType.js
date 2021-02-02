import data from "../data/garage.json"

export const getProfileType = sidingType => {
    switch(sidingType) {
        case "Mitten Vinyl":
            return data.vinylSidingProfiles;
        case "Domtek Metal":
            return data.domtekProfiles;
        case "Canexel":
            return data.canexelProfiles;
        case "KWP":
            return data.kwpProfiles;
        case "Hardie":
            return data.hardieProfiles;
        default:
            return null
    }
}
