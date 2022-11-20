import { Etudiant } from './etudiant';
import { Tachetype } from "../enum/tachetype"

export class Tahces {
    IdTache?:number
    name?:String
    type?:Tachetype
    StartDate?:Date
    EndDate?:Date
    Description?:String
    etudiant?:Etudiant

}
