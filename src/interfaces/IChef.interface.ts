import { IRestaurant } from "./IRestaurant.interface"

export interface IChef{
    id: number,
    first_name: string,
    last_name: string,
    desc: string,
    image: string,
    resturants: Array<IRestaurant>
}