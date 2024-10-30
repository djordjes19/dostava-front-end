import { Cusine } from "./cuisine";
import { Restaurant } from "./restaurant";

export class Meal{
    public kcal : number = 0;
    public name: string = '';
    public price: number = 0.0;
    public slika: string = '';
    public cuisine: Cusine  = new Cusine();
    public restaurant: Restaurant = new Restaurant();
}