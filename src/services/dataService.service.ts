import db from "../mock/db.json"

export const fetchHeroImage = async () => {
    return (await Promise.resolve(db)).hero
}

export const fetchIcons = async () => {
    return (await Promise.resolve(db)).icons
}