import db from "../mock/db.json"

export const fetchHeroImage = async () => {
    return (await Promise.resolve(db)).hero
}

export const fetchLogo = async () => {
    return (await Promise.resolve(db)).logo
}

export const fetchIcons = async () => {
    return (await Promise.resolve(db)).icons
}

export const fetchPopularRestaurants = async () => {
    return (await Promise.resolve(db)).populars
}

export const fetchSignatureDishes = async () => {
    return (await Promise.resolve(db)).signatures
}

export const fetchStripeData = async (type: string) => {
    switch(type) {
        case 'restaurants':
            return fetchPopularRestaurants()
        case 'dishes':
            return fetchSignatureDishes()
        default:
            return null
    }
}

export const fetchStores = async () => {
    return (await Promise.resolve(db)).stores
}

export const fetchAbout = async () => {
    return (await Promise.resolve(db)).about
}

export const fetchSpecials = async () => {
    return (await Promise.resolve(db)).specials
}

export const fetchChefOfWeek = async () => {
    return (await Promise.resolve(db)).weekly
}