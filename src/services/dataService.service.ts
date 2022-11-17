import db from "../mock/db.json"

export const fetchHeroImage = async () => {
    return (await Promise.resolve(db)).hero
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