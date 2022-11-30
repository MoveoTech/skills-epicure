import { IDish } from "./IDish.interface";

export interface IRestaurant{
    id: number,
    name: string,
    rating: number,
    image: string,
    banner: string,
    chef: string,
    distance: number,
    price: number,
    dishes: Array<IDish>
}
