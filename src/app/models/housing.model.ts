import { User } from "./users.model";


export class Housing {
    
    id!: number;
    description!: string;
    price!: number;
    bedroom?: number;
    livingRoom?:number;
    bathroom?: number;
    swimmingPool?: number;
    garage?: number;
    cellar?: number;
    images?: string;
    noStreet?: string;
    nameStreet?: string;
    postalCode?: string;
    city?: string;
    about?: string;
    user?: User;
    garden?: string;
    publication!: Date;

}