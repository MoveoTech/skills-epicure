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

export const fetchAbout = async () => {
    return (await Promise.resolve(db)).about
}